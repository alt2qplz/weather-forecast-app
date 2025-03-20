import { memo, MutableRefObject, useCallback, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchWeatherForecast, WeatherForecast } from 'features/WeatherForecast';
import { HStack } from 'shared/ui/Stack';
import { Button } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './MainPage.module.scss';
import CachedIcon from '@mui/icons-material/Cached';

const MainPage = memo(() => {
  const { t } = useTranslation();
  const interval = useRef() as MutableRefObject<ReturnType<typeof setInterval>>;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchWeatherForecast());

      interval.current = setInterval(() => {
        dispatch(fetchWeatherForecast());
      }, 10000);
    }

    return () => {
      clearInterval(interval.current);
    };
  }, [dispatch]);

  const reload = useCallback(() => {
    dispatch(fetchWeatherForecast());
  }, [dispatch]);

  return (
    <Page>
      <HStack justify="between" className={cls.wrap}>
        <Button onClick={reload} theme="clear" className={cls.reloadBtn}><CachedIcon/>{t('Обновить')}</Button>
        <AppLink to={'/cities'}>{t('Редактировать города')}</AppLink>
      </HStack>
      <WeatherForecast />
    </Page>
  );
});

MainPage.displayName = 'MainPage';

export default MainPage;
