import React, { useCallback, useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import getValigationErrors from '../../utils/getValidationErrors';

import { useAuth }  from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';

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

interface ISignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async (data: ISignInFormData) => {
    setLoading(prev => !prev);

    try {
      formRef.current?.setErrors({});
      
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.email,
        password: data.password
      });

      history.push('/dashboard');

    } catch(err) {
      if (err instanceof Yup.ValidationError) {
        const erros = getValigationErrors(err);

        formRef.current?.setErrors(erros);
      }

      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais.'
      });

      setLoading(prev => !prev);
    }
  }, [history, signIn, addToast]);

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

        <Form ref={formRef} onSubmit={handleSubmit} >
          <h2>Faça seu Login</h2>

          <Input
            icon={MailIcon}
            autoFocus
            name="email"
            placeholder="Digite seu e-mail"
          />

          <Input
            icon={LockIcon}
            name="password"
            placeholder="Digite sua senha"
            autoComplete="current-password"
            type="password"
          />

          {/* <Link to="/forgot-password" >Esqueci minha senha</Link> */}

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