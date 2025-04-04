import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import MainPage from './MainPage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { weatherForecastReducer } from 'features/WeatherForecast';

export default {
  title: 'pages/Main Page',
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const MainPageLight = Template.bind({});
MainPageLight.args = {};
MainPageLight.decorators = [
  StoreDecorator({
    weatherForecast: {
      isLoading: false,
      data: {
        'Москва': {
          current: {
            temperature_2m: 4.8,
            weather_code: 0
          },
          daily: {
            time: ['2025-03-20', '2025-03-21', '2025-03-22', '2025-03-23', '2025-03-24', '2025-03-25', '2025-03-26'],
            temperature_2m_min: [-0.7, 1.5, -2.1, -3.3, -2.3, 2.5, 2.4],
            temperature_2m_max: [9, 7.9, 4.2, 4.9, 9.4, 8.9, 10.3],
            weather_code: [3, 3, 3, 2, 3, 61, 61]
          }
        },
        'Казань': {
          current: {
            temperature_2m: 4.8,
            weather_code: 0
          },
          daily: {
            time: ['2025-03-20', '2025-03-21', '2025-03-22', '2025-03-23', '2025-03-24', '2025-03-25', '2025-03-26'],
            temperature_2m_min: [-0.7, 1.5, -2.1, -3.3, -2.3, 2.5, 2.4],
            temperature_2m_max: [9, 7.9, 4.2, 4.9, 9.4, 8.9, 10.3],
            weather_code: [3, 3, 3, 2, 3, 61, 61]
          }
        },
        'Санкт-Петербург': {
          current: {
            temperature_2m: 4.8,
            weather_code: 0
          },
          daily: {
            time: ['2025-03-20', '2025-03-21', '2025-03-22', '2025-03-23', '2025-03-24', '2025-03-25', '2025-03-26'],
            temperature_2m_min: [-0.7, 1.5, -2.1, -3.3, -2.3, 2.5, 2.4],
            temperature_2m_max: [9, 7.9, 4.2, 4.9, 9.4, 8.9, 10.3],
            weather_code: [3, 3, 3, 2, 3, 61, 61]
          }
        },
      }
    }
  },
  {
    weatherForecast: weatherForecastReducer
  })
];