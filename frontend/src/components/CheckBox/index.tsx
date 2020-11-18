import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ title, name, ...rest }) => {
  return (
    <Container>
      <input
        type="checkbox"
        name={name}
        {...rest}
      />
      <label htmlFor={name}>
        {title}
      </label>
    </Container>
  );
};

export default CheckBox;
