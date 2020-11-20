import styled from 'styled-components';
import { MdAdd } from 'react-icons/md'

export const Container = styled.div`
  height: 100%;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--dashboard-background);
`;

export const Content = styled.div`
  width: 100%;
  flex: 1;
`;

export const Main = styled.div`
  max-width: 91rem;
  width: 100%;
  height: 100%;

  padding: 4rem 5.4rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > h3 {
    margin-top: 2.4rem;
  }
`;

export const AnimatedTasksContainer = styled.ul`
  width: 100%;
  margin-top: 2.8rem;
  list-style: none;
`;

export const Separator = styled.div`
  margin-top: 1.8rem;
  width: 100%;
  border-bottom: 0.1rem solid var(--darker-gray);
`;

export const CreateTaskForm = styled.form`
  width: 100%;
  margin-top: 2.2rem;
  padding: 1rem;
  border-radius: 0.4rem;
  background: var(--secondary);

  display: flex;
  flex-direction: column;
  justify-content: center;

  > div:first-child {
    display: flex;
    justify-content: space-between;

    > input {
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      color: var(--text-color);
    }
  }

  > div + div {
    display: flex;
    margin-top: 1.6rem;
  }
`;

export const InputOptions = styled.div`
  width: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CreateTaskButton = styled.button`
  display: flex;
  align-items: center;

  margin-top: 2.2rem;

  border: none;
  background: transparent;
  color: var(--gray);

  &:hover {
    color: var(--text-color);

    > svg {
      color: var(--text-color);
    }
  }
`;

export const AddIcon = styled(MdAdd)`
  width: 2rem;
  height: 2rem;
  color: var(--gray);

  margin-right: 0.8rem;
`;