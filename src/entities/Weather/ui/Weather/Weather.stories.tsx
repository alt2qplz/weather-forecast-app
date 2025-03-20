import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Weather } from './Weather';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';

export default {
  title: 'entities/Weather',
  component: Weather,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Weather>;

const Template: ComponentStory<typeof Weather> = (args) => <Weather {...args} />;

const defaultArgs = {
  cityName: 'Москва',
  weather: {
    current: {
      temperature_2m: 8.7,
      weather_code: 1
    },
    daily: {
      time: [ '2025-03-20', '2025-03-21',],
      temperature_2m_min: [-0.7, 1.2],
      temperature_2m_max: [8.7, 8],
      weather_code: [3, 3]
    }
  }
};

export const Light = Template.bind({});
Light.args = defaultArgs;

export const Dark = Template.bind({});
Dark.args = defaultArgs;
Dark.decorators = [
  ThemeDecorator(Theme.DARK)
];

export const Error = Template.bind({});
Error.args = {
  cityName: 'Москва'
};