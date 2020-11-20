import React, { FormEvent, useCallback, useEffect, useState } from 'react';

import Button from '../../components/Button';
import DatePicker from '../../components/DatePicker';
import Header from '../../components/Header';
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
  date?: Date | null | undefined;
}

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
 
  const [creatingMode, setCreatingMode] = useState(false);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    setTasks([
    {
      id: 1,
      title: "Entregar formulário",
      priority: 3,
      categories: [],
      date: new Date()
    },
    {
      id: 2,
      title: "Entregar formulário",
      priority: 1,
      categories: ["Trabalho"],
      date: new Date()
    },
    ])

    // setCategories(["Trabalho"]);
  }, []);


  const handleCreateTask = useCallback(() => {
    setCreatingMode(true);
  }, [])

  const handleCancelCreation = useCallback(() => {
    setCreatingMode(false);
  }, [])

  const handleDelete = useCallback((id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }, [])

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();

    const task = {
      id: title.length,
      title,
      priority: 0,
      categories: [],
      date,
    }

    setTasks(prev => [...prev, task]);

    setTitle('');
    setCreatingMode(false);
  }, [title, date])

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
                    <DatePicker setDate={setDate}/>
                  </InputOptions>
                </div>
                <div>
                  <Button
                    containerStyles={{
                      width: "content-fit"
                    }}
                    type="submit"
                  >
                    Adicionar tarefa
                  </Button>
                  <Button
                    styleType="text"
                    onClick={handleCancelCreation}
                    containerStyles={{
                      width: "content-fit",
                      marginLeft: "0.8rem"
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
