import styled, { keyframes } from 'styled-components';
import { MdDelete } from 'react-icons/md';

const fadeFromBottom = keyframes`
  from {
    transform: translateY(5rem);
    opacity: 0;
  }
  to {
    transform: translateY(0rem);
    opacity: 1;
  }
`;

export const Container = styled.li`
  position: relative;

  width: 100%;
  border-radius: 0.4rem;
  background: var(--secondary);

  display: flex;
  /* align-items: center; */

  animation: ${fadeFromBottom} 0.4s ease-out;

  & + li {
    margin-top: 0.8rem;
  }

  &:hover {
    > button {
      width: 4.2rem;

      > svg {
        opacity: 1;
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 0.8rem 1rem;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 0.2rem;
`;

export const Schedule = styled.div`
  font-size: 1rem;
  color: var(--gray);
  font-weight: 500;

  margin-right: 1rem;
`;

export const Group = styled.div`
  font-size: 1rem;
  color: var(--gray);
  font-weight: 500;
`;

export const TimeLeft = styled.span`
  margin-left: auto;

  font-size: 1rem;
  color: var(--gray);
  font-weight: 500;
`;

interface DeleteProps {
  priority?: number;
}

export const DeleteButton = styled.button<DeleteProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.2rem;
  height: initial;

  border-radius: 0 0.4rem 0.4rem 0;
  border: none;
  outline: none;

  background: 
  ${props => {
    if (props.priority === 1)
      return "var(--priority-1)"
    else if (props.priority === 2)
      return "var(--priority-2)"
    else if (props.priority === 3)
      return "var(--priority-3)"
    else
      return "var(--darker-gray)"
  }};

  transition: width 0.4s ease-out;
`;

export const DeleteIcon = styled(MdDelete)`
  width: 2.4rem;
  height: 2.4rem;
  color: var(--secondary);
  opacity: 0;

  transition: opacity 0.4s ease-out;
`;
