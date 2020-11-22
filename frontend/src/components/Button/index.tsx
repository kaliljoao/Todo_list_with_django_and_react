import React, { ButtonHTMLAttributes, useState } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  styleType?:'outlined' | 'text';
  loading?: boolean;
  containerStyles?: object;
  containerHoverStyles?: object;
};

const Button: React.FC<ButtonProps> = ({
  children,
  styleType,
  loading,
  containerStyles,
  containerHoverStyles,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false); 


  return (
    <Container
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      styleType={styleType || 'default'}
      style={ isHovered ? {...containerStyles, ...containerHoverStyles} : containerStyles}
      {...rest}
    >
      {loading ? 'Carregando...' : children }
    </Container>
  );
};

export default Button;
