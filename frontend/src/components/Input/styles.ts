import styled, { css } from 'styled-components';
import { FiAlertCircle } from 'react-icons/fi';
import Tooltip from '../Tooltip';

interface IContainerProps {
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<IContainerProps>`
  background-color: var(--secondary);
  width: 36rem;

  padding: 1.4rem 1.6rem;
  border-radius: 0.4rem;
  border: 0.2rem solid  var(--tertiary);

  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.isErrored && css`
    border-color: var(--error);
  `}

  ${props => props.isFilled && css`
    > svg {
      color: var(--primary);
    }
  `}

  & + div {
    margin-top: 0.8rem;
  }

  > input {
    width: 100%;
    margin-left: 1.4rem;
    background: transparent;
    border: 0;
    outline: 0;

    color: var(--text-color);
  }

  &:focus-within {
    border: 0.2rem solid var(--primary);

    > svg {
      color: var(--primary);
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: var(--tooltip-error);
    color: var(--text-color);

    &::before{
      border-color: var(--tooltip-error) transparent;
    }
  }
`;

export const AlertIcon = styled(FiAlertCircle)`
  width: 2rem;
  color: var(--error);
`;