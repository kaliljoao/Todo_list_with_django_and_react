import React, { InputHTMLAttributes, useState } from 'react';
import { ptBR } from 'date-fns/locale';
import { getDate, getMonth, getYear } from 'date-fns';

import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from 'react-datepicker';

import {
  Container,
  CustomHeaderContainer,
  ArrowIcon,
  CustomInputContainer,
  ClockIcon,
  CustomTimeInputContainer
} from './styles';

interface DatePickerProps {
  setDate(date: Date): void;
}

const DatePicker: React.FC<DatePickerProps> = ({ setDate }) => {
  const [startDate, setStartDate] = useState<Date | undefined | null>(null);
  
  const years = Array.from(Array(getYear(new Date()) - 1980), (v, i) => 1990 + i);
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outrubro",
    "Novembro",
    "Dezembro"
  ];

  const renderDayContents = (day: number, date: Date) => {
    const tooltipText = `Tooltip for date: ${date}`;
    return <span title={tooltipText}>{getDate(date)}</span>;
  };

  return (
    <Container>
      <ReactDatePicker
        selected={startDate}
        openToDate={new Date()}
        onChange={date => {
          setStartDate(date as Date);
          setDate(date as Date);
        }}
        dateFormat="PPp"
        locale={ptBR}
        shouldCloseOnSelect={false}
        renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled
      }) => {

        return (
          <CustomHeaderContainer>
  
            <button type='button' onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              <ArrowIcon/>
            </button>

            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(Number(value))}
            >
              {years.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button
              type='button' 
              style={{
                margin: "0 0 0 0.6rem"
              }}
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              <ArrowIcon style={{
                  transform: "rotate(-90deg)",
                }}
              />
            </button>
          
          </CustomHeaderContainer>
        )}}
        showTimeInput
        customInput={<CustomInput/>}
        customTimeInput={<CustomTimeInput/>}
        renderDayContents={renderDayContents}
        todayButton="Hoje"
        calendarClassName="calendar"
        className="calendar-container"
        dayClassName={date => "calendar-day"}
      />
    </Container> 
  );
};

export default DatePicker;

type ICustomInputProps = InputHTMLAttributes<HTMLInputElement>;


const CustomInput: React.FC<ICustomInputProps> = ({ value, onClick }) => {
  return (
    <CustomInputContainer onClick={onClick}>
      <ClockIcon/>
      {value ? (
        <span>{value}</span>
      ) : (
        <span>Agendar</span>
      )
      }
    </CustomInputContainer>
  )
}

interface ICustomTimeInputProps {
  date?: Date;
  onChange?: (date?: string) => void;
  value?: string;
}

const CustomTimeInput: React.FC<ICustomTimeInputProps> = ({ date, value, onChange }) => {
  return (
    <CustomTimeInputContainer>
      <input
        placeholder="tempo"
        value={value}
        type='time'
        onChange={!!onChange ? (e => onChange(e.target.value)) : undefined}
      />
    </CustomTimeInputContainer>
  );
}
