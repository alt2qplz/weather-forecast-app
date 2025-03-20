import cls from './Footer.module.scss';
import { memo } from 'react';
import { HStack } from 'shared/ui/Stack';
import { LangSwitcher } from 'features/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher/ThemeSwitcher';

export const Footer = memo(() => {
  return (
    <HStack justify={'between'} align={'center'} className={cls.Footer} >
      <LangSwitcher/>
      <ThemeSwitcher/>
    </HStack>
  );
});

Footer.displayName = 'Footer';
