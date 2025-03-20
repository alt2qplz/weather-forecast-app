import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Loader } from './Loader';

export default {
  title: 'shared/Loader',
  component: Loader
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const LoaderLight = Template.bind({});

export const LoaderDark = Template.bind({});
LoaderDark.decorators = [ThemeDecorator(Theme.DARK)];
