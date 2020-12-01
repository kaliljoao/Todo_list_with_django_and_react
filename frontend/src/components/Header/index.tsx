import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
//import { Form } from '@unform/web';

import { useAuth } from '../../hooks/AuthContext';

//import Input from '../Input';

import {
  Container,
  LeftSide,
  Logo,
  RightSide,
  Greeting,
  LogOutIcon
} from './styles';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  const history = useHistory();

  const handleLogOut = useCallback( () => {
    signOut();
    history.push('/');

  }, [history, signOut]);

  return (
    <Container>
      <LeftSide>
        {/* <button>
          <MenuIcon/>
        </button>
       */}
        <Logo/>
      </LeftSide>

      <RightSide>
        {/* <Form onSubmit={() => {}}>
          <Input
            name='search'
            containerStyles={{
              height: "4.2rem",
              borderColor: "transparent",
              backgroundColor: "var(--tertiary)"
            }}
            icon={SearchIcon}
            placeholder="Busque tarefas"
          />
        </Form> */}
        <div></div>

        <div>
          <Greeting>
            Bem-vindo, {user.first_name}
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
