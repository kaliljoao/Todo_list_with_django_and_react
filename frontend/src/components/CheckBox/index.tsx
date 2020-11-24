import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  title: string;
  onDone: (id: number) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ title, id, onDone, ...rest }) => {
  return (
    <Container>
      <input
        onChange={() => onDone(Number(id))}
        type="checkbox"
        name={id}
        {...rest}
      />
      <label htmlFor={id}>
        {title}
      </label>
    </Container>
  );
};

export default CheckBox;
