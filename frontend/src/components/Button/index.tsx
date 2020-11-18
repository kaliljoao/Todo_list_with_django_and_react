import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  styleType?:'outlined' | 'text';
  loading?: boolean;
  containerStyles?: object;
};

const Button: React.FC<ButtonProps> = ({
  children,
  styleType,
  loading,
  containerStyles,
  ...rest
}) => {
  return (
    <Container
      styleType={styleType || 'default'}
      style={containerStyles}
      {...rest}
    >
      {loading ? 'Carregando...' : children }
    </Container>
  );
};

export default Button;
