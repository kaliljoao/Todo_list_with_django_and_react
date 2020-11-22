import styled from 'styled-components';
import { MdAccessTime, MdArrowDropDown } from 'react-icons/md';

export const Container = styled.div`
  .react-datepicker-popper {
    border: 1px solid var(--secondary);
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.4);
  }

  .react-datepicker__triangle {
    border: none !important;

    &::before {
      border-bottom-color: var(--secondary) !important;
    }
  }

  .react-datepicker__header {
    background-color: var(--secondary) !important;
    border: none;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.25);
  }

  .react-datepicker__day-name {
    color: var(--gray) !important;
  }

  .react-datepicker__today-button {
    margin-top: 0.4rem !important;
    border-top: 1px solid var(--darker-gray);
    border-bottom: 1px solid var(--darker-gray);
    background: var(--dashboard-background);
  }

  .react-datepicker__input-time-container {
    margin-top: 1rem !important;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent !important;
  }

  .react-datepicker-time__input-container {
    padding: 0 !important;
    margin-right: 2.6rem !important;
    background: transparent !important;
  }

  .react-datepicker-time__input {
    background: transparent !important;
    padding: 0 !important;
    margin: 0 !important;
  }

 .calendar {
    font-size: 1.2rem;
    color: var(--text-color);

    border: transparent;
    background: var(--dashboard-background);
  }

  .calendar-day {
    color: var(--text-color);

    &:hover {
      background: var(--darker-gray);
    }
  }

  .calendar-container {
    background: var(--dashboard-background);
  }
`;

export const CustomHeaderContainer = styled.div`
  padding: 0 0.6rem;
  margin-bottom: 0.6rem;
  display: flex;
  justify-content: space-between;

  background-color: transparent;
  color: var(--darker-gray);

  > button {
    margin: 0 0.6rem 0 0;
    border: 0.1rem solid var(--darker-gray);
    background: transparent;
    display: flex;
    align-items: center;
  }

  > select {
    border: 0.1rem solid var(--darker-gray);
    background: transparent;
    color: var(--text-color);
  
    & + select {
      margin-left: 0.6rem;
    }

    > option {
      appearance: none;
      background: var(--darker-gray);
      color: var(--text-color);
    }
  }
`;

export const ArrowIcon = styled(MdArrowDropDown)`
  width: 2.4rem;
  height: 2.4rem;
  color: var(--text-color);

  transform: rotate(90deg);
`;

export const CustomInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 0.4rem;
  padding: 0.6rem;
  border-radius: 0.6rem;

  color: var(--primary-darker);

  cursor: pointer;

  transition: background-color 0.2s ease-out;

  > span {
    margin-left: 0.4rem;
  }

  &:hover {
    background: var(--dashboard-background);
  }
`;

export const ClockIcon = styled(MdAccessTime)`
  width: 2.4rem;
  height: 2.4rem;
  color: var(--primary-darker);
`;

export const CustomTimeInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > input {
    width: 16rem !important;
    padding: 0 0.6rem;
    border: none;
    border-radius: 0.4rem;
    background: var(--darker-gray);
    color: var(--text-color);

    &::-webkit-calendar-picker-indicator {
      color: var(--primary);
    }
  }
`; 