import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City, CitySchema } from '../types/CitySchema';

const initialState: CitySchema = { // preload data
  cities: [
    { name: 'Москва', lat: 55.7558, lon: 37.6173, checked: true },
    { name: 'Лондон', lat: 51.5074, lon: -0.1278, checked: true },
    { name: 'Нью-Йорк', lat: 40.7128, lon: -74.0060, checked: true },
    { name: 'Париж', lat: 48.8566, lon: 2.3522, checked: true },
    { name: 'Токио', lat: 35.6762, lon: 139.6503, checked: false },
    { name: 'Берлин', lat: 52.5200, lon: 13.4050, checked: false },
    { name: 'Рим', lat: 41.9028, lon: 12.4964, checked: false },
    { name: 'Мадрид', lat: 40.4168, lon: -3.7038, checked: false },
    { name: 'Сидней', lat: -33.8688, lon: 151.2093, checked: false },
    { name: 'Торонто', lat: 43.65107, lon: -79.347015, checked: false },
    { name: 'Кейптаун', lat: -33.9249, lon: 18.4241, checked: false }
  ]
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    editCities: (state, action: PayloadAction<City[]>) => {
      state.cities = action.payload;
    },
  },
});

export const { actions: cityActions } = citySlice;
export const { reducer: cityReducer } = citySlice;