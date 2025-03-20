import { useTranslation } from 'react-i18next';
import cls from './Weather.module.scss';
import { memo } from 'react';
import { WeatherType } from 'shared/types/WeatherType';
import { WeatherIcon } from 'shared/ui/WeatherIcon/WeatherIcon';
import { Text } from 'shared/ui/Text/Text';
import { HStack, VStack } from 'shared/ui/Stack';

interface WeatherProps {
  cityName: string;
  weather?: WeatherType | null;
  className?: string;
}

export const Weather = memo((props: WeatherProps) => {
  const { cityName, weather } = props;
  const { t } = useTranslation();
  const { t: citiesTranslate } = useTranslation('cities');

  if (!weather) return <VStack gap="8" className={`${cls.Weather} ${cls.error}`}>
    <Text title={cityName} theme="error" />
    <Text text={t('Ошибка загрузки данных')} theme="error" />
  </VStack>;

  return (
    <VStack gap="8" className={cls.Weather}>
      <HStack className={cls.weatherWrap} justify="between">
        <Text title={citiesTranslate(cityName)} />
        <Text title={`${weather.current.temperature_2m}°C`} />
      </HStack>
      <WeatherIcon weatherCode={weather.current.weather_code}/>
      <div className={cls.line} />
      <HStack className={cls.weatherWrap} justify="between">
        <Text text={t('Завтра')} />
        <Text text={`${weather.daily.temperature_2m_min[0]}°C ... ${weather.daily.temperature_2m_max[0]}°C`} />
      </HStack>
    </VStack>
  );
});

Weather.displayName = 'Weather';
