import { memo } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import cls from './Checkbox.module.scss';
import { classNames as cn } from 'shared/lib/classNames/classNames';

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
};

export const Checkbox = memo(({ checked, onChange, label }: CheckboxProps) => {
  return (
    <label className={cls.checkboxContainer} onClick={() => onChange(!checked)} role="button">
      <div className={cn(cls.checkbox, { [cls.checked]: checked })}>
        {checked && <CheckIcon className={cls.checkmark} />}
      </div>
      {label && <span className={cls.labelText}>{label}</span>}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';