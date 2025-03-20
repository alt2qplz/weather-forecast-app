import { WeatherType } from 'shared/types/WeatherType';

export interface WeatherForecastSchema {
  data?: { [key: string]: WeatherType | null };
  isLoading?: boolean;
  error?: string
}