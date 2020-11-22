import styled from 'styled-components';

interface ButtonProps {
  styleType?:'outlined' | 'text' | 'default';
}

export const Container = styled.button<ButtonProps>`
  padding: 1.4rem 1.6rem;

  font-size: 1.8rem;
  font-weight: 600;
  text-transform: uppercase;
  border: 0.1rem solid transparent;
  border-radius: 0.4rem;

  transition: color 0.4s ease-out, background-color 0.4s ease-out, border-color 0.4s ease-out, opacity 0.4s ease-out;

  ${props => {
    if (props.styleType?.includes('outlined')) {
      return "background-color: transparent; color: var(--primary); border-color: var(--primary);"
    } else if (props.styleType?.includes('text')) {
      return "background-color: transparent; color: var(--primary);"
    } else if (props.styleType?.includes('default')) {
      return "background-color: var(--primary); color: var(--text-color);"
    }
  }}

  &:hover{
    ${props => {
      if (props.styleType?.includes('outlined')) {
        return "color: var(--primary-darker); border-color: var(--primary-darker);"
      } else if (props.styleType?.includes('text')) {
        return "color: var(--primary-darker);"
      } else if (props.styleType?.includes('default')) {
        return "background-color: var(--primary-darker);"
      }
    }}
    }
`;
