import styled, { css, keyframes } from 'styled-components';
import { MdMail, MdLock, MdPerson, MdArrowBack } from 'react-icons/md'

import signInBackgroundImg from '../../assets/sign-up-background.png';
import LogoImg from '../../assets/logo.svg';

export const Container = styled.div`
  height: 100%;

  display: flex;
  align-items: stretch;
`;

const fadeFromRight = keyframes`
  from {
    transform: translateX(5rem);
    opacity: 0;
  }
  to {
    transform: translateX(0rem);
    opacity: 1;
  }
`;

export const AnimatedWrapper = styled.div`
  width: 100%;
  max-width: 70rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  animation: ${fadeFromRight} 1s ease-out; 
`;

export const Form = styled.form`
  background-color: var(--tertiary);
  padding: 5.8rem;
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;

  > h2 {
    margin-bottom: 3.8rem;
  }

  > a {
    margin-top: 24px;

    text-align: center;
    text-decoration: none;
    font-size: 1.2rem;
    color: var(--primary);
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;
  color: var(--tertiary);
`;

export const MailIcon = styled(MdMail)`${iconCSS}`;

export const UserIcon = styled(MdPerson)`${iconCSS}`;

export const LockIcon = styled(MdLock)`${iconCSS}`;

export const BackIcon = styled(MdArrowBack)`
  ${iconCSS}
  color: var(--primary);
  margin-right: 0.8rem;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 20.7rem;
`;

Logo.defaultProps = {
  src: LogoImg
}