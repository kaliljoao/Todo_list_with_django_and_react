import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  AnimatedWrapper,
  Form,
  MailIcon,
  UserIcon, 
  LockIcon,
  BackIcon,
  Background,
  Logo
} from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <AnimatedWrapper>
        <Form onSubmit={() => {}} >
          <h2>Crie sua conta</h2>

          <Input
            icon={MailIcon}
            autoFocus
            type="email"
            placeholder="Digite seu e-mail"
          />

          <Input
            icon={UserIcon}
            type="name"
            placeholder="Digite seu nome"
          />

          <Input
            icon={LockIcon}
            type="password"
            placeholder="Digite sua senha"
          />
          
          <Input
            icon={LockIcon}
            type="password"
            placeholder="Confirme sua senha"
          />

          <Button
            type="submit"
            containerStyles={{
              marginTop: "3.4rem",
            }}
          >
            Cadastrar
          </Button>

          <Link to="/"><BackIcon/>Voltar para o login</Link>
        </Form>
      </AnimatedWrapper>

      <Background>
        <Logo/>
      </Background>
    </Container>
  );
};

export default SignUp;
