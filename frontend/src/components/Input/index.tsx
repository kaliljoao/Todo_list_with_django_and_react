import React, { InputHTMLAttributes, useRef, useEffect, useCallback, useState } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { useField } from '@unform/core';


import { Container, Error, AlertIcon } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyles?: object;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, containerStyles, ...rest }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputBlur = useCallback(() => {
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyles}
      isErrored={!!error}
      isFilled={isFilled}
    >
      <Icon />
      <input
        ref={inputRef}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        {...rest}
      />
 
      { error &&
        <Error title={error}>
          <AlertIcon/>
        </Error>
      }
    </Container>
  );
};

export default Input;
