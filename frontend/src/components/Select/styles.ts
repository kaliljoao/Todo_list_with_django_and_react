import styled, {css} from 'styled-components';
import { MdFlag } from 'react-icons/md';

export const Container = styled.div`
  position: relative;
  width: max-content;
  height: initial;
  border-radius: 0.4rem;
  padding: 0.8rem;

  display: flex;
  align-items: center;

  background: transparent;
  
  transition: background-color 0.4s ease-out;

  cursor: pointer;

  &:hover {
    background-color: var(--dashboard-background);

    > div {
      display: block;
    }
  }
`;

export const CustomSelect = styled.div`
  display: none;

  position: absolute;
  top: calc(100%);
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;

  min-width: inherit;
  border-radius: 0.6rem;
  border: 1px solid #000;

  background: var(--dashboard-background);
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.4);
  overflow: hidden;

  > div {
    padding: 0.4rem 0.8rem;

    &.selected {
      background: var(--darker-gray);
    }

    &:hover {
      background: var(--darker-gray);
    }
  }
`;

interface IFlagProps {
  priority: 1 | 2 | 3 | 0;
}

export const FlagIcon = styled(MdFlag)<IFlagProps>`
  min-width: 2.4rem;
  min-height: 2.4rem;

  transition: color 0.2s ease-out;

  ${props => {
    if ( props.priority === 0 ) {
      return css`
        color: var(--gray);
      `;
    } else if ( props.priority === 1 ) {
      return css`
        color: var(--priority-1);
      `;
    } else if ( props.priority === 2 ) {
      return css`
        color: var(--priority-2);
      `;
    } else if ( props.priority === 3 ) {
      return css`
        color: var(--priority-3);
      `;
    } 
  }}
`;