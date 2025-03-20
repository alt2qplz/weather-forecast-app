import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Header.module.scss';
import { memo, useCallback } from 'react';
import { Logo } from 'shared/ui/Logo/Logo';
import { useSelector } from 'react-redux';
import { getUserAuthData, userLogout } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';

interface HeaderProps {
  className?: string;
}

export const Header = memo((props: HeaderProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const auth = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  const onLogout = useCallback(() => {
    dispatch(userLogout());
  }, [dispatch]);

  return (
    <div className={classNames(cls.Header, {}, [className])}>
      <Logo />
      {auth ? <Button theme="clear" onClick={onLogout}>{t('Выход')}</Button> : null}
    </div>
  );
});

Header.displayName = 'Header';
