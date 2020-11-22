import styled, { css, keyframes } from 'styled-components';
import { MdMail, MdLock } from 'react-icons/md'
import { Form as Unform } from '@unform/web';

import LogoImg from '../../assets/logo.svg';

export const Container = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const fadeFromLeft = keyframes`
  from {
    transform: translateX(-5rem);
    opacity: 0;
  }
  to {
    transform: translateX(0rem);
    opacity: 1;
  }
`;

export const AnimatedWrapper = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  animation: ${fadeFromLeft} 0.4s ease-out;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > div {
    display: flex;
    align-items: center;

    > span {
      margin-left: 1.8rem;
      font-size: 3.6rem;
      font-weight: 500;
    }
  }

  > h1 {
    width: 43rem;
    margin-top: 6.5rem;
    font-size: 5.6rem;
    line-height: 120%;
  }
`;

export const Logo = styled.img`
  width: 8.6rem;
`;

Logo.defaultProps = {
  src: LogoImg
}

export const Form = styled(Unform)`
  background-color: var(--tertiary);
  padding: 5.8rem;
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;

  > h2 {
    margin-bottom: 3.8rem;
  }

  > a {
    margin-top: 8px;
    text-decoration: none;
    font-size: 1.2rem;
    color: var(--primary);
    font-weight: 600;
  }
`;

const iconCSS = css`
  min-width: 2rem;
  height: 2rem;
  color: var(--tertiary);
`;

export const MailIcon = styled(MdMail)`${iconCSS}`;

export const LockIcon = styled(MdLock)`${iconCSS}`;

export const Register = styled.div`
  margin-top: 2.4rem;
    
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    font-size: 1.2rem;

    > a {
      text-decoration: none;
      font-size: 1.2rem;
      color: var(--primary);
      font-weight: 600;
    }
  }
`;