import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
  error?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    error = false,
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.error]: error
  };

  return (
    <input
      ref={ref}
      type={type}
      value={value}
      onChange={onChangeHandler}
      className={classNames(cls.input, mods)}
      readOnly={readonly}
      placeholder={placeholder}
      {...otherProps}
    />
  );
});

Input.displayName = 'Input';
