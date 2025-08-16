import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Welcome',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj;

export const Welcome: Story = {
  render: () => html`
    <div style="
      max-width: 600px;
      padding: 40px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      color: white;
      text-align: center;
    ">
      <h1 style="margin: 0 0 20px 0; font-size: 2.5em; font-weight: 600;">
        📚 Sketch WebUI Components
      </h1>
      
      <p style="font-size: 1.2em; margin: 0 0 30px 0; opacity: 0.9;">
        Welcome to the component library for the Sketch coding assistant!
      </p>
      
      <div style="
        background: rgba(255,255,255,0.1);
        padding: 20px;
        border-radius: 8px;
        margin: 20px 0;
        text-align: left;
      ">
        <h3 style="margin: 0 0 15px 0;">🎯 What's included:</h3>
        <ul style="margin: 0; padding-left: 20px;">
          <li><strong>Mobile Components:</strong> Chat, input, title bar</li>
          <li><strong>Desktop Components:</strong> Status indicators, shells</li>
          <li><strong>Interactive Controls:</strong> Modify properties in real-time</li>
          <li><strong>Responsive Testing:</strong> Mobile, tablet, desktop viewports</li>
          <li><strong>Accessibility:</strong> Built-in a11y testing</li>
          <li><strong>Dark Mode:</strong> Theme variants for all components</li>
        </ul>
      </div>
      
      <div style="
        background: rgba(255,255,255,0.1);
        padding: 15px;
        border-radius: 8px;
        font-size: 0.9em;
      ">
        👈 <strong>Browse the sidebar</strong> to explore components by category
      </div>
    </div>
  `,
};
