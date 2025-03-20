import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  login: loginReducer
};

export const LoginForm = memo((props: LoginFormProps) => {
  const { onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { username, password, isLoading } = useSelector(getLoginState);
  const [error, setError] = useState<'username' | 'password' | null>(null);

  const onChangeUsername = useCallback((value: string) => {
    if (error === 'username') setError(null);
    dispatch(loginActions.setUsername(value));
  }, [dispatch, error]);

  const onChangePassword = useCallback((value: string) => {
    if (error === 'password') setError(null);
    dispatch(loginActions.setPassword(value));
  }, [dispatch, error]);

  const onLoginClick = useCallback(async () => {
    if (!username) {
      setError('username');
      return;
    }

    if (!password) {
      setError('password');
      return;
    }

    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') onSuccess();
  }, [onSuccess, dispatch, password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.LoginForm, {}, [props.className])}>
        <Text
          title={t('Авторизация')}
          size="size_l"
          align="center"
        />
        <Input
          autofocus
          type="text"
          placeholder={t('Логин')}
          onChange={onChangeUsername}
          value={username}
          error={error === 'username'}
        />
        <Input
          type="password"
          placeholder={t('Пароль')}
          onChange={onChangePassword}
          value={password}
          error={error === 'password'}
        />
        <Button
          className={cls['auth-button']}
          onClick={onLoginClick}
          disabled={isLoading}
          theme="background"
          isLoading={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

LoginForm.displayName = 'LoginForm';