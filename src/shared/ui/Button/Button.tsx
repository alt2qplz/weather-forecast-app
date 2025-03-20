import React, { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

type ButtonTheme = 'clear' | 'outline' | 'danger' | 'outlineInverted' | 'background' | 'backgroundInverted'

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  square?: boolean
  theme?: ButtonTheme
  size?: ButtonSize
  children?: React.ReactNode
  isLoading?: boolean
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = 'outline',
    square,
    size = ButtonSize.M,
    isLoading = false,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(`${cls.Button}`, { [cls.square]: square, [cls.disabled]: otherProps.disabled }, [className, cls[theme], cls[size]])}
      {...otherProps}
    >
      {isLoading ? <div className={cls.loader}/> : children }
      {/*{children}*/}
    </button>
  );
});

Button.displayName = 'Button';
