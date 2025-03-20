import { createSlice } from '@reduxjs/toolkit';
import { WeatherForecastSchema } from '../types/WeatherForecastSchema';
import { fetchWeatherForecast } from '../services/fetchWeatherForecast/fetchWeatherForecast';

export const initialState: WeatherForecastSchema = {
  isLoading: false,
};

export const weatherForecastSlice = createSlice({
  name: 'weatherForecast',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherForecast.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWeatherForecast.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeatherForecast.rejected, (state) => {
        state.isLoading = false;
        state.error = 'error';
        state.data = undefined;
      });

  },
});

export const { actions: weatherForecastActions } = weatherForecastSlice;
export const { reducer: weatherForecastReducer } = weatherForecastSlice;