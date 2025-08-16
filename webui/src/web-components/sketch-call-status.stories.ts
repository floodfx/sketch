import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './sketch-call-status';

type SketchCallStatusElement = {
  isDisconnected: boolean;
};

const meta: Meta<SketchCallStatusElement> = {
  title: 'Components/SketchCallStatus',
  component: 'sketch-call-status',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isDisconnected: {
      control: 'boolean',
      description: 'Whether the connection is disconnected',
    },
  },
};

export default meta;
type Story = StoryObj<SketchCallStatusElement>;

export const Connected: Story = {
  args: {
    isDisconnected: false,
  },
  render: (args) => html`
    <div class="p-4">
      <sketch-call-status .isDisconnected=${args.isDisconnected}></sketch-call-status>
    </div>
  `,
};

export const Disconnected: Story = {
  args: {
    isDisconnected: true,
  },
  render: (args) => html`
    <div class="p-4">
      <sketch-call-status .isDisconnected=${args.isDisconnected}></sketch-call-status>
    </div>
  `,
};

export const InToolbar: Story = {
  args: {
    isDisconnected: true,
  },
  render: (args) => html`
    <div class="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-3 border-b border-gray-200 dark:border-gray-700">
      <h1 class="text-lg font-semibold">Sketch</h1>
      <div class="flex items-center space-x-2">
        <sketch-call-status .isDisconnected=${args.isDisconnected}></sketch-call-status>
        <button class="px-2 py-1 text-sm bg-blue-500 text-white rounded">Action</button>
      </div>
    </div>
  `,
};
