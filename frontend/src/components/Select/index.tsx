import React, { useCallback, useState } from 'react';

import {
  Container,
  CustomSelect,
  FlagIcon
} from './styles';

interface SelectProps {
  onChange(priority: number): void;
  options: Array<{
    value: number;
    label: string;
  }>
}

const Select: React.FC<SelectProps> = ({ options, onChange }) => {
  const [prioritySelected, setPrioritySelected] = useState<1 | 2 | 3 | 0>(0);

  const handleSelect = useCallback((priority: number) => {
    setPrioritySelected(priority as 1|2|3|0);
    onChange(priority);
  }, [onChange])

  return (
    <Container>
      <FlagIcon priority={prioritySelected}/>
      <CustomSelect>
        {options.map(option => (
          <div
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className={ option.value === prioritySelected ? 'selected' : ''}
          >
            <FlagIcon priority={option.value as 1|2|3|0}/>
          </div>
        ))}
        
      </CustomSelect>
    </Container>
  );
};

export default Select;
