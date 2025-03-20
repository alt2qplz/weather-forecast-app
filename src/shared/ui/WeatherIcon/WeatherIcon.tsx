import React, { memo } from 'react';
import { WbSunny, Cloud, CloudQueue, Thunderstorm, AcUnit, Grain, Opacity } from '@mui/icons-material';
import cls from './WeatherIcon.module.scss';
import { useTranslation } from 'react-i18next';

// Мапа кодов погоды с иконками и описаниями
const weatherIcons: Record<string, { icon: React.ReactElement, description: string }> = {
  0: { icon: <WbSunny />, description: 'Ясно' }, // Ясно
  1: { icon: <WbSunny />, description: 'Преимущественно ясно' },
  2: { icon: <CloudQueue />, description: 'Переменная облачность' },
  3: { icon: <Cloud />, description: 'Пасмурно' },
  // 45: { icon: <Foggy fontSize="large" color="disabled" />, description: 'Туман' },
  // 48: { icon: <Foggy fontSize="large" color="disabled" />, description: 'Изморось' },
  51: { icon: <Opacity />, description: 'Лёгкая морось' },
  53: { icon: <Opacity />, description: 'Умеренная морось' },
  55: { icon: <Opacity />, description: 'Сильная морось' },
  61: { icon: <Grain />, description: 'Слабый дождь' },
  63: { icon: <Grain />, description: 'Умеренный дождь' },
  65: { icon: <Grain />, description: 'Сильный дождь' },
  71: { icon: <AcUnit />, description: 'Слабый снег' },
  73: { icon: <AcUnit />, description: 'Умеренный снег' },
  75: { icon: <AcUnit />, description: 'Сильный снегопад' },
  80: { icon: <Grain />, description: 'Слабый ливень' },
  81: { icon: <Grain />, description: 'Умеренный ливень' },
  82: { icon: <Grain />, description: 'Сильный ливень' },
  95: { icon: <Thunderstorm />, description: 'Гроза ️' },
  96: { icon: <Thunderstorm />, description: 'Гроза с градом' },
  99: { icon: <Thunderstorm />, description: 'Сильная гроза с градом' },
};

type WeatherIconProps = {
  weatherCode: number;
}

export const WeatherIcon = memo((props: WeatherIconProps) => {
  const weather = weatherIcons[props.weatherCode] || { icon: <Cloud />, description: 'Неизвестная погода' };
  const { t } = useTranslation('weather');


  return (
    <div className={cls.WeatherIcon}>
      {weather.icon}
      <span className={cls.weatherDescription}>{t(weather.description)}</span>
    </div>
  );
});

WeatherIcon.displayName = 'WeatherIcon';
