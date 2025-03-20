import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Login.module.scss';
import { memo, useCallback, useEffect } from 'react';
import { LoginForm } from 'features/AuthByUsername';
import { useNavigate } from 'react-router-dom';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

interface LoginProps {
  className?: string;
}

export const LoginPage = memo((props: LoginProps) => {
  const { className } = props;
  const navigate = useNavigate();
  const auth = useSelector(getUserAuthData);

  const navigateToMainPage = useCallback(() => {
    navigate(routePath.main);
  }, [navigate]);

  useEffect(() => {
    if (auth) navigateToMainPage();
  }, [auth, navigateToMainPage]);

  return (
    <div className={classNames(cls.Login, {}, [className])}>
      <LoginForm onSuccess={navigateToMainPage}/>
    </div>
  );
});

LoginPage.displayName = 'LoginPage';
