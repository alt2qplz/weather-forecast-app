import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { WeatherType } from 'shared/types/WeatherType';
import { getCities } from 'entities/City';

export const fetchWeatherForecast = createAsyncThunk<
  Record<string, WeatherType | null>,
  void,
  ThunkConfig<string>
>(
  'weatherForecast/fetchWeatherForecast',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const cities = getCities(getState()).filter(el => el.checked);

    const weatherResponses = await Promise.allSettled(
      cities.map(async (city) => {
        const response = await extra.api.get<WeatherType>('/forecast', {
          params: {
            latitude: city.lat,
            longitude: city.lon,
            current: 'temperature_2m,weather_code',
            daily: 'temperature_2m_min,temperature_2m_max,weather_code',
            timezone: 'auto',
          },
        });
        return { city: city.name, data: response.data };
      })
    );

    const successfulResponses = weatherResponses.filter(
      (result): result is PromiseFulfilledResult<{ city: string; data: WeatherType }> =>
        result.status === 'fulfilled'
    );


    if (successfulResponses.length === 0) {
      return rejectWithValue('Все запросы завершились с ошибкой');
    }

    const weatherData: Record<string, WeatherType | null> = cities.reduce((acc, city) => {
      const result = weatherResponses.find(
        (res) => res.status === 'fulfilled' && res.value.city === city.name
      );

      acc[city.name] = result && result.status === 'fulfilled' ? result.value.data : null;
      return acc;
    }, {} as Record<string, WeatherType | null>);

    return weatherData;
  }
);
