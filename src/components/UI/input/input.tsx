import React from "react";
import { StyleInput, ErrorMessage } from "./input.style"; // Исправлен импорт

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  errorText?: string; // Сделаем это поле необязательным, чтобы можно было использовать Input без ошибки
  isError?: boolean;  // Сделаем это поле необязательным, чтобы избежать ошибок при его отсутствии
}

export const Input = ({
  type,
  placeholder,
  errorText = "",
  isError = false,
  ...props
}: IInput) => {
  return (
    <div>
      <StyleInput type={type} placeholder={placeholder} $isError={isError} {...props} /> {/* Передаем isError в стили */}
      {isError && <ErrorMessage>{errorText}</ErrorMessage>} {/* Условие для отображения ошибки */}
    </div>
  );
};
