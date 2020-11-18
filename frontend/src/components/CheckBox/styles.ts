import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  width: 100%;
  align-items: flex-start;

  > input {
    appearance: none;
    outline: 0;
    position: relative;

    cursor: pointer;

    min-width: 1.4rem;
    height: 1.4rem;
    margin-top: 0.4rem;
    margin-right: 1rem;
    border-radius: 0.4rem;
    background-color: var(--darker-gray);

    &:checked {
      background-color: var(--primary);

      &::after{
        display: block;
      }
    }

    &::after {
      content: "";
      position: absolute;
      display: none;

      left: 0.1rem;
      top: 0.1rem;

      width: 0.4rem;
      height: 0.8rem;
      border: solid var(--darker-gray);
      border-width: 0 0.2rem 0.2rem 0;
      transform: translateX(50%) rotate(45deg);
    }
  }

  > input:checked + label {
    color: var(--gray);
    text-decoration: line-through;
  }

  > label {
    width: 100%;

    font-size: 1.4rem;
    font-weight: 400;

    text-overflow: ellipsis;
    line-break: strict;
  }
`;