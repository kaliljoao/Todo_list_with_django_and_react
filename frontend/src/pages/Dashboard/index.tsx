import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { format } from 'date-fns';

import api from '../../services/api';
import { useAuth } from '../../hooks/AuthContext';

import Button from '../../components/Button';
import DatePicker from '../../components/DatePicker';
import Header from '../../components/Header';
import Select from '../../components/Select';
import Task from '../../components/Task';

import {
  Container,
  Content,
  Main,
  AnimatedTasksContainer,
  Separator,
  CreateTaskForm,
  InputOptions,
  CreateTaskButton,
  AddIcon
} from './styles';

interface ITask {
  id: number;
  title: string;
  priority: number;
  categories?: string[];
  deadline?: string | null | undefined;
  is_done: boolean;
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState<ITask[]>([]);
 
  const [creatingMode, setCreatingMode] = useState(false);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [selectedPriority, setSelectedPriority] = useState<number>(0);

  useEffect(() => {
    api.get<ITask[]>('user/tasks/').then(response => {
      setTasks(response.data.filter(task => task.is_done !== false));
    });
    
  }, []);

  const handleCreateTask = useCallback(() => {
    setCreatingMode(true);
  }, []);

  const handleCancelCreation = useCallback(() => {
    setCreatingMode(false);
  }, []);

  const handleDelete = useCallback(async (id) => {
    await api.delete(`user/tasks-detail/${id}/`);

    setTasks(prev => prev.filter(task => task.id !== id));
  }, []);

  const handleToggle = useCallback(async (id) => {
    const task = tasks.find(task => task.id === id);

    if (!task) {
      console.log(`Task with id: ${id} does not exist`)
      return
    }

    await api.put(`user/tasks-detail/update/${id}/`, {
      ...task,
      is_done: !task.is_done 
    });

    setTasks(prev => prev.map(task => {
      return task.id !== id
        ? task
        : {...task, is_done: !task.is_done}
    }));

  }, [tasks]);

  const handleSubmit = useCallback( async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      owner: user.id,
      title,
      priority: selectedPriority,
      deadline: date
        ? format(new Date(date), 'yyyy-MM-dd HH:mm')
        : format(new Date(), 'yyyy-MM-dd HH:mm') 
    }

    const response = await api.post('tasks/', data);

    console.log(response.data)

    const task = response.data;

    setTasks(prev => [...prev, task]);

    setTitle('');
    setDate(null);
    setSelectedPriority(0);
    setCreatingMode(false);
  }, [title, date, selectedPriority, user]);

  return (
    <Container>
      <Header/>

      <Content>
        <Main>
          <h2>Caixa de entrada</h2>

          <AnimatedTasksContainer>
            {tasks.map((task) => {
              return <Task
                key={task.id}
                data={task}
                onDone={handleToggle}
                onDelete={handleDelete}
              /> 
            })}

            <Separator/>

            { creatingMode ? (
              <CreateTaskForm onSubmit={handleSubmit}>
                <div>
                  <input
                    autoFocus
                    type="text"
                    placeholder="Digite o título da tarefa"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <InputOptions>
                    <Select
                      onChange={setSelectedPriority}
                      options={[
                        { value: 1, label: 'Prioridade 1' },
                        { value: 2, label: 'Prioridade 2' },
                        { value: 3, label: 'Prioridade 3' },
                        { value: 0, label: 'Sem prioridade' },
                      ]}
                    />
                    <DatePicker setDate={setDate}/>
                  </InputOptions>
                </div>
                <div>
                  <Button
                    containerStyles={{
                      width: "content-fit",
                      backgroundColor: "var(--darker-gray)"
                    }}
                    containerHoverStyles={{
                      opacity: '0.8',
                    }}
                    type="submit"
                  >
                    Adicionar tarefa
                  </Button>
                  <Button
                    styleType="text"
                    type="button"
                    onClick={handleCancelCreation}
                    containerStyles={{
                      width: "content-fit",
                      marginLeft: "0.8rem",
                      color: "var(--gray)"
                    }}
                    containerHoverStyles={{
                      opacity: '0.8',
                    }}
                  >
                    Cancelar
                  </Button>
                </div>
              </CreateTaskForm>
            ) : (
              <CreateTaskButton onClick={handleCreateTask}>
                <AddIcon/>
                Adicionar tarefa
              </CreateTaskButton>
            )}

          </AnimatedTasksContainer>
        </Main>
      </Content>
    </Container>
  );
};

export default Dashboard;
