import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyles?: object;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, containerStyles, ...rest }) => {
  return (
    <Container style={containerStyles}>
      <Icon />
      <input
        {...rest}
      />
    </Container>
  );
};

export default Input;
