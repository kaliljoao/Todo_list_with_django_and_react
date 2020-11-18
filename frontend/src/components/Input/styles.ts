import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--secondary);
  width: 36rem;

  padding: 1.4rem 1.6rem;
  border-radius: 0.4rem;
  border: 0.2rem solid  var(--tertiary);

  display: flex;
  align-items: center;
  justify-content: center;

  & + div {
    margin-top: 0.8rem;
  }

  > input {
    width: 28.8rem;
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
