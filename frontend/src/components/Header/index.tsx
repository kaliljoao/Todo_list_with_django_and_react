import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../Input';

import {
  Container,
  LeftSide,
  MenuIcon,
  Logo,
  RightSide,
  SearchIcon,
  Greeting,
  LogOutIcon
} from './styles';

const Header: React.FC = () => {
  const history = useHistory();

  const handleLogOut = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Container>
      <LeftSide>
        <button>
          <MenuIcon/>
        </button>
      
        <Logo/>
      </LeftSide>

      <RightSide>
        <Input
          containerStyles={{
            height: "4.2rem",
            borderColor: "transparent",
            backgroundColor: "var(--tertiary)"
          }}
          icon={SearchIcon}
          placeholder="Busque tarefas"
        />

        <div>
          <Greeting>
            Bom dia, Pedro
          </Greeting>
          
          <button
            onClick={handleLogOut}
          >
            <LogOutIcon/>
          </button>
        </div>
      </RightSide>
    </Container>
  );
};

export default Header;
