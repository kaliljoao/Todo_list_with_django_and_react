import styled, { css } from 'styled-components';
import { MdMenu, MdSearch, MdExitToApp } from 'react-icons/md'
import LogoImg from '../../assets/logo.svg';

export const Container = styled.div`
  width: 100%;
  min-height: 6.4rem;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  background: var(--secondary);
  box-shadow: 0px 0.1rem 0.8rem rgba(0, 0, 0, 0.25);
`;

export const LeftSide = styled.div`
  width: 26.4rem;
  
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > button {
    background-color: transparent;
    border: none;
    
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const iconCSS = css`
  min-width: 2rem;
  height: 2rem;
  color: var(--primary);
`;

export const MenuIcon = styled(MdMenu)`
  ${iconCSS}
`;

/* margin-left: 2.4rem; */

export const Logo = styled.img`
  width: 6rem;
`;

Logo.defaultProps = {
  src: LogoImg
}

export const RightSide = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    margin: 0;

    > button {
      background-color: transparent;
      border: none;
      
      display: flex;
      align-items: center;
      justify-content: center;
      
      cursor: pointer;
      z-index: 999;
    }
  } 

 
`;

export const SearchIcon = styled(MdSearch)`
  ${iconCSS}
  color: var(--gray);
`;

export const Greeting = styled.span`
  margin-right: 2.6rem;
`;

export const LogOutIcon = styled(MdExitToApp)`
  ${iconCSS}
`;
