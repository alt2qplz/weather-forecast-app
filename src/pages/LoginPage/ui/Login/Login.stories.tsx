import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoginPage } from './LoginPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
  title: 'pages/LoginPage',
  component: LoginPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = (args) => <LoginPage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  StoreDecorator({
    login: {
      username: 'login',
      password: 'password',
    }
  })
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  StoreDecorator({
    login: {
      username: 'login',
      password: 'password',
    }
  }),
  ThemeDecorator(Theme.DARK)
];