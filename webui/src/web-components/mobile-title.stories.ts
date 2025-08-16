import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './mobile-title.js';
import { ConnectionStatus } from '../data.js';

type MobileTitleElement = {
  connectionStatus: ConnectionStatus;
  isThinking: boolean;
  skabandAddr?: string;
  currentView: 'chat' | 'diff';
  slug: string;
};

const meta: Meta<MobileTitleElement> = {
  title: 'Mobile/MobileTitle',
  component: 'mobile-title',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  argTypes: {
    connectionStatus: {
      control: 'select',
      options: ['connected', 'connecting', 'disconnected'],
      description: 'Connection status',
    },
    isThinking: {
      control: 'boolean',
      description: 'Whether the assistant is thinking',
    },
    currentView: {
      control: 'select',
      options: ['chat', 'diff'],
      description: 'Current view mode',
    },
    slug: {
      control: 'text',
      description: 'Project slug or identifier',
    },
    skabandAddr: {
      control: 'text',
      description: 'Skaband address',
    },
  },
};

export default meta;
type Story = StoryObj<MobileTitleElement>;

export const Connected: Story = {
  args: {
    connectionStatus: 'connected',
    isThinking: false,
    currentView: 'chat',
    slug: 'my-project',
  },
  render: (args) => html`
    <mobile-title 
      .connectionStatus=${args.connectionStatus}
      .isThinking=${args.isThinking}
      .currentView=${args.currentView}
      .slug=${args.slug}
      .skabandAddr=${args.skabandAddr}
    ></mobile-title>
  `,
};

export const Thinking: Story = {
  args: {
    connectionStatus: 'connected',
    isThinking: true,
    currentView: 'chat',
    slug: 'my-project',
  },
  render: (args) => html`
    <mobile-title 
      .connectionStatus=${args.connectionStatus}
      .isThinking=${args.isThinking}
      .currentView=${args.currentView}
      .slug=${args.slug}
      .skabandAddr=${args.skabandAddr}
    ></mobile-title>
  `,
};

export const Disconnected: Story = {
  args: {
    connectionStatus: 'disconnected',
    isThinking: false,
    currentView: 'chat',
    slug: 'my-project',
  },
  render: (args) => html`
    <mobile-title 
      .connectionStatus=${args.connectionStatus}
      .isThinking=${args.isThinking}
      .currentView=${args.currentView}
      .slug=${args.slug}
      .skabandAddr=${args.skabandAddr}
    ></mobile-title>
  `,
};

export const DiffView: Story = {
  args: {
    connectionStatus: 'connected',
    isThinking: false,
    currentView: 'diff',
    slug: 'my-project',
  },
  render: (args) => html`
    <mobile-title 
      .connectionStatus=${args.connectionStatus}
      .isThinking=${args.isThinking}
      .currentView=${args.currentView}
      .slug=${args.slug}
      .skabandAddr=${args.skabandAddr}
    ></mobile-title>
  `,
};

export const WithSkaband: Story = {
  args: {
    connectionStatus: 'connected',
    isThinking: false,
    currentView: 'chat',
    slug: 'my-project',
    skabandAddr: 'https://skaband.example.com',
  },
  render: (args) => html`
    <mobile-title 
      .connectionStatus=${args.connectionStatus}
      .isThinking=${args.isThinking}
      .currentView=${args.currentView}
      .slug=${args.slug}
      .skabandAddr=${args.skabandAddr}
    ></mobile-title>
  `,
};
