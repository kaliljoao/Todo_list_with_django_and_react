import React, { FormEvent, useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  AnimatedWrapper,
  Content,
  Logo,
  Form,
  MailIcon,
  LockIcon,
  Register  
} from './styles';

const SignIn: React.FC = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();

    setLoading(prev => !prev);

    setTimeout(() => {
      setLoading(prev => !prev);
      history.push('/dashboard');
    }, 1000);

  }, [history]);

  return (
    <Container>
      <AnimatedWrapper>
        <Content>
          <div>
            <Logo/>
            <span>working</span>
          </div>

          <h1>
            Tenha controle sobre suas tarefas
          </h1>
        </Content>

        <Form onSubmit={handleSubmit} >
          <h2>Faça seu Login</h2>

          <Input
            icon={MailIcon}
            autoFocus
            type="email"
            placeholder="Digite seu e-mail"
          />

          <Input
            icon={LockIcon}
            type="password"
            placeholder="Digite sua senha"
          />

          <Link to="/forgot-password" >Esqueci minha senha</Link>

          <Button
            containerStyles={{
              marginTop: "3.4rem",
            }}
            loading={loading}
            type="submit"
          >
            Entrar
          </Button>

          <Register>
            <span>Não tem uma conta? <Link to="/signup">Registre-se</Link></span>
          </Register>
        </Form>
      </AnimatedWrapper>
    </Container>
  );
};

export default SignIn;