import React, { useCallback, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import getValigationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import { useToast } from '../../hooks/ToastContext';

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

interface ISignUpFormData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback( async (data: ISignUpFormData) => {
    setLoading(prev => !prev);

    try {
      formRef.current?.setErrors({});
      
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(8, 'No mínimo 8 dígitos'),
        passwordConfirmation: Yup.string()
          .oneOf([Yup.ref('password'), undefined], 'Senhas devem ser iguais')
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/users/', {
        ...data,
        username: data.email,
        first_name: data.name
      });

      history.push('/');

      addToast({
        type: 'success',
        title: 'Cadastro realizado!',
        description: 'Você já pode fazer seu logon no Working!',
      });


    } catch(err) {
      if (err instanceof Yup.ValidationError) {
        const erros = getValigationErrors(err);

        formRef.current?.setErrors(erros);
      }

      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Ocorreu um erro ao fazer cadastro, tente novamente.'
      });

      setLoading(prev => !prev);
    }
  },[history, addToast]);

  return (
    <Container>
      <AnimatedWrapper>
        <Form onSubmit={handleSubmit} ref={formRef} >
          <h2>Crie sua conta</h2>

          <Input
            icon={MailIcon}
            autoFocus
            name="email"
            placeholder="Digite seu e-mail"
          />

          <Input
            icon={UserIcon}
            name="name"
            placeholder="Digite seu nome"
          />

          <Input
            icon={LockIcon}
            name="password"
            placeholder="Digite sua senha"
            type="password"
            autoComplete="new-password"
          />
          
          <Input
            icon={LockIcon}
            name="passwordConfirmation"
            placeholder="Confirme sua senha"
            type="password"
            autoComplete="new-password"
          />

          <Button
            type="submit"
            loading={loading}
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
