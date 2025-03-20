import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './WeatherForecast.module.scss';
import { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { weatherForecastReducer } from '../../model/slices/WeatherForecastSlice';
import { useSelector } from 'react-redux';
import {
  getWeatherForecastData,
  getWeatherForecastError,
  getWeatherForecastIsLoading
} from '../../model/selectors/getWeatherForecast/getWeatherForecast';
import { Weather } from 'entities/Weather';

import { Loader } from 'shared/ui/Loader/Loader';
import { Text } from 'shared/ui/Text/Text';

interface WeatherForecastProps {
  className?: string;
}

const initialReducers: ReducersList = {
  weatherForecast: weatherForecastReducer
};

export const WeatherForecast = memo((props: WeatherForecastProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const data = useSelector(getWeatherForecastData);
  const error = useSelector(getWeatherForecastError);
  const isLoading = useSelector(getWeatherForecastIsLoading);

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (error) {
    content = <Text theme="error" title={t('Ошибка при загрузке данных')} align="center"/>;
  } else {
    content = <div className={classNames(cls.WeatherForecast, {}, [className])}>
      {Object.keys(data || {})
        .map(city => (
          <Weather key={city} cityName={city} weather={data?.[city]}/>
        ))
      }
    </div>;
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      {content}
    </DynamicModuleLoader>
  );
});

WeatherForecast.displayName = 'WeatherForecast';
