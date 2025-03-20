import { StateSchema } from 'app/providers/StoreProvider';

export const getWeatherForecastData = (state: StateSchema) => state?.weatherForecast?.data;
export const getWeatherForecastIsLoading = (state: StateSchema) => state?.weatherForecast?.isLoading;
export const getWeatherForecastError = (state: StateSchema) => state?.weatherForecast?.error;
