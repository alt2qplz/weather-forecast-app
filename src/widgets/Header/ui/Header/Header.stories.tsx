import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
  title: 'widgets/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
Normal.decorators = [StoreDecorator({
  user: {
    _inited: true,
    authData: {
      username: '123',
      password: '123'
    }
  }
})];