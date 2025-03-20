import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChooseCities } from './ChooseCities';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
  title: 'features/ChooseCities',
  component: ChooseCities,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ChooseCities>;

const Template: ComponentStory<typeof ChooseCities> = (args) => <ChooseCities {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
  city: {
    cities: [
      { name: 'Париж', lat: 48.8566, lon: 2.3522, checked: true },
      { name: 'Токио', lat: 35.6762, lon: 139.6503, checked: false },
      { name: 'Берлин', lat: 52.5200, lon: 13.4050, checked: false },
    ]
  }
})];