import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './mobile-chat-input.js';

type MobileChatInputElement = {
  disabled: boolean;
};

const meta: Meta<MobileChatInputElement> = {
  title: 'Mobile/MobileChatInput',
  component: 'mobile-chat-input',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<MobileChatInputElement>;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: (args) => html`
    <div class="bg-gray-50 h-screen flex flex-col justify-end">
      <mobile-chat-input .disabled=${args.disabled}></mobile-chat-input>
    </div>
  `,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => html`
    <div class="bg-gray-50 h-screen flex flex-col justify-end">
      <mobile-chat-input .disabled=${args.disabled}></mobile-chat-input>
    </div>
  `,
};

export const InContext: Story = {
  args: {
    disabled: false,
  },
  render: (args) => html`
    <div class="bg-white h-screen flex flex-col">
      <!-- Mock chat header -->
      <div class="bg-blue-500 text-white p-4 flex items-center">
        <h1 class="text-lg font-semibold">Sketch Assistant</h1>
      </div>
      
      <!-- Mock chat content -->
      <div class="flex-1 p-4 space-y-4 overflow-auto">
        <div class="bg-gray-100 p-3 rounded-lg max-w-xs">
          <p class="text-sm">Hello! How can I help you today?</p>
        </div>
        <div class="bg-blue-500 text-white p-3 rounded-lg max-w-xs ml-auto">
          <p class="text-sm">I need help with my code.</p>
        </div>
      </div>
      
      <!-- Chat input -->
      <mobile-chat-input .disabled=${args.disabled}></mobile-chat-input>
    </div>
  `,
};
