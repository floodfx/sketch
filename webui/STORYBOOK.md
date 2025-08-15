# Sketch WebUI Storybook

This directory contains a Storybook setup for developing and documenting the Sketch WebUI components.

## Quick Start

```bash
# Install dependencies (if not already done)
npm install

# Build Tailwind CSS (required for styling)
npm run tailwind

# Start Storybook development server
npm run storybook

# Build static Storybook
npm run build-storybook

# Run component tests
npm run storybook:test
```

## What's Included

### Component Stories
- **Mobile Components**: Mobile-optimized UI components with responsive stories
- **Desktop Components**: Desktop-focused components with various states
- **Documentation**: Comprehensive component documentation with examples

### Addons
- **Controls**: Interactive controls for component props
- **Actions**: Event logging and interaction tracking
- **Viewport**: Responsive testing across different screen sizes
- **Backgrounds**: Light/dark theme testing
- **A11y**: Accessibility testing and compliance checking
- **Docs**: Auto-generated documentation from component code
- **Vitest**: Component testing integration

## Writing Stories

### Basic Story Structure

```typescript
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './my-component';

type MyComponentElement = {
  prop1: string;
  prop2: boolean;
};

const meta: Meta<MyComponentElement> = {
  title: 'Components/MyComponent',
  component: 'my-component',
  parameters: {
    layout: 'centered', // or 'fullscreen', 'padded'
  },
  argTypes: {
    prop1: { control: 'text' },
    prop2: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<MyComponentElement>;

export const Default: Story = {
  args: {
    prop1: 'Hello',
    prop2: false,
  },
  render: (args) => html`
    <my-component 
      .prop1=${args.prop1}
      .prop2=${args.prop2}
    ></my-component>
  `,
};
```

### Mobile Stories

For mobile components, use these settings:

```typescript
const meta: Meta<ComponentType> = {
  title: 'Mobile/ComponentName',
  component: 'component-name',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};
```

### Desktop Stories

For desktop components:

```typescript
const meta: Meta<ComponentType> = {
  title: 'Components/ComponentName',
  component: 'component-name',
  parameters: {
    layout: 'centered', // or 'padded'
  },
};
```

## Component Architecture

### Base Classes
- All components extend `SketchTailwindElement`
- Shadow DOM is disabled for Tailwind CSS compatibility
- Components use Lit Element with TypeScript decorators

### Styling
- **Tailwind CSS** for all styling
- **Dark mode** support with `dark:` prefixes
- **Responsive design** with Tailwind breakpoints
- Global styles loaded from `dist/tailwind.css`

### Type Safety
- Component props typed with Lit's `@property` decorator
- Story types generated from component interfaces
- Integration with Go types via `go2ts`

## Testing

### Component Tests

```bash
# Run all component tests
npm run storybook:test

# Run tests in watch mode
npx vitest --project=storybook --watch

# Run tests with coverage
npx vitest --project=storybook --coverage
```

### Accessibility Testing

- Built-in a11y addon automatically tests components
- View violations in the "Accessibility" panel
- Configure test severity in `.storybook/preview.ts`

## Deployment

### Building for Production

```bash
# Build static Storybook
npm run build-storybook

# Serve built storybook
npx serve storybook-static
```

### Integration with CI/CD

```bash
# In your CI pipeline
npm install
npm run tailwind
npm run build-storybook
npm run storybook:test
```

## Tips and Best Practices

1. **Create stories for all component states** - loading, error, empty, etc.
2. **Use realistic data** - Don't just test with "Lorem ipsum"
3. **Test edge cases** - Long text, missing props, extreme values
4. **Document complex interactions** - Use MDX files for detailed docs
5. **Test accessibility** - Check color contrast, keyboard navigation, screen readers
6. **Mobile-first approach** - Start with mobile stories, then adapt for desktop
7. **Use semantic HTML** - Ensure proper heading structure and landmarks
8. **Test with real data** - Import fixtures from your actual application

## Troubleshooting

### Tailwind Styles Not Loading
- Make sure `npm run tailwind` has been run
- Check that `dist/tailwind.css` exists
- Verify the CSS import in `.storybook/preview.ts`

### Component Not Rendering
- Ensure the component is imported in the story file
- Check that all required properties are provided
- Verify the component is registered with `@customElement`

### TypeScript Errors
- Run `npm run gentypes` to update type definitions
- Check that component interfaces match story types
- Ensure all imports have correct file extensions

---

*For more information about Storybook, visit [storybook.js.org](https://storybook.js.org/)*
