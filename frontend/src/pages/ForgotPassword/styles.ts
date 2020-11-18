import styled, { css, keyframes } from 'styled-components';
import { MdMail } from 'react-icons/md'

export const Container = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${fadeFromBottom} 0.8s ease-out;

  > h2 {
    margin-bottom: 2.8rem;
  }

  > a {
    margin-top: 2rem;
    text-decoration: none;
    font-size: 1.2rem;
    color: var(--gray);
    font-weight: 500;
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;
  color: var(--tertiary);
`;

export const MailIcon = styled(MdMail)`${iconCSS}`;