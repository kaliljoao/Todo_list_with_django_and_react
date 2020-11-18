import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Form,
  MailIcon
} from './styles';

const ForgotPassword: React.FC = () => {

  return (
    <Container>
      <Form onSubmit={() => {}}>
        <h2>Recuperar senha</h2>

        <Input
          autoFocus
          icon={MailIcon}
          type="email"
          placeholder="Digite seu e-mail"
        />

        <Button
          containerStyles={{
            width: '100%',
            marginTop: "1.2rem",
          }}
          type="submit"
        >
          Recuperar
        </Button>

        <Link to="/">Voltar</Link>
      </Form>
    </Container>
  );
};

export default ForgotPassword;
