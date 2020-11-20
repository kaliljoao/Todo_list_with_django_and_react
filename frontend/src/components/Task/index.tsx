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
  date?: Date | null | undefined;
}

interface TaskProps {
  data: ITask;
  onDelete: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ data, onDelete }) => {
  return (
    <Container>
      <Content>
        <Info>
          { data.date &&
            <Schedule>{format(data.date, 'p • d MMMM', { locale: ptBR })}</Schedule>
          }
          { data.categories?.length !== 0 &&
            <Group>#{data.categories?.join(" #")}</Group>
          }
          { data.date &&
            <TimeLeft>Restam 30 min</TimeLeft>
          }
        </Info>
        
        <CheckBox
          name={data.id.toString()}
          title={data.title}
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
