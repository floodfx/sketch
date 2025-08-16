import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Test/SimpleTest',
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => html`
    <div style="padding: 20px; background: #f0f0f0; border-radius: 8px;">
      <h2 style="color: #333; margin: 0;">Hello from Storybook!</h2>
      <p style="color: #666; margin: 10px 0 0 0;">This is a basic test story to verify Storybook is working.</p>
    </div>
  `,
};
