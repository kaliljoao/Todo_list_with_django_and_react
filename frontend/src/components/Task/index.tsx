import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import CheckBox from '../CheckBox';

import {
  Container,
  Content,
  Info,
  Schedule,
  Group,
  TimeLeft,
  DeleteButton,
  DeleteIcon
} from './styles';

interface ITask {
  id: number;
  title: string;
  priority: number;
  categories?: string[];
  deadline?: string | null | undefined;
  is_done: boolean;
}

interface TaskProps {
  data: ITask;
  onDone: (id: number) => void;
  onDelete: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ data, onDone, onDelete }) => {
  return (
    <Container>
      <Content>
        <Info>
          { data.deadline &&
            <Schedule>{format(new Date(data.deadline), 'p • d MMMM', { locale: ptBR })}</Schedule>
          }
          { data.categories?.length !== 0 &&
            <Group>#{data.categories?.join(" #")}</Group>
          }
        </Info>
        
        <CheckBox
          id={data.id.toString()}
          checked={data.is_done}
          title={data.title}
          onDone={onDone}
        />
      </Content>

      <DeleteButton
        onClick={() => onDelete(data.id)}
        priority={data.priority}
      >
        <DeleteIcon />
      </DeleteButton>
    </Container>
  );
};

export default Task;
