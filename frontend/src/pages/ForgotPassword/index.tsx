import React, { useState, useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValigationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Form,
  MailIcon
} from './styles';

interface ISignInFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async (data: ISignInFormData) => {
    setLoading(prev => !prev);

    try {
      formRef.current?.setErrors({});
      
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // await api.post('/', data);

      history.push('/');

    } catch(err) {
      if (err instanceof Yup.ValidationError) {
        const erros = getValigationErrors(err);

        formRef.current?.setErrors(erros);
      }

      setLoading(prev => !prev);
    }
  }, [history]);

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h2>Recuperar senha</h2>

        <Input
          autoFocus
          icon={MailIcon}
          name="email"
          placeholder="Digite seu e-mail"
        />

        <Button
          containerStyles={{
            width: '100%',
            marginTop: "1.2rem",
          }}
          type="submit"
          loading={loading}
        >
          Recuperar
        </Button>

        <Link to="/">Voltar</Link>
      </Form>
    </Container>
  );
};

export default ForgotPassword;
