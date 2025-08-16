# Storybook Development Guide

This guide explains how to use Storybook for developing Sketch WebUI components with hot reload and automatic compilation.

## 🚀 Quick Start

```bash
# Start Storybook development server with hot reload
npm run storybook

# In another terminal, make changes to components and see them update live!
```

## 🔥 Hot Reload Features

### ✅ **What Updates Automatically:**
- **Component code changes** (`src/web-components/*.ts`)
- **Story file changes** (`src/**/*.stories.ts`)
- **Tailwind CSS changes** (styles update instantly)
- **TypeScript compilation** (handled by Vite)
- **Lit element properties** (reactive updates)
- **Template changes** (HTML templates in components)

### ⚡ **Development Workflow:**

1. **Start Storybook**: `npm run storybook`
2. **Open browser**: http://localhost:6006
3. **Navigate to a component story** (e.g., MobileChat → Default)
4. **Edit the component** in `src/web-components/`
5. **See changes instantly** in the browser
6. **Modify story controls** to test different states
7. **Update stories** to test new features

## 🛠️ Technical Details

### **Hot Module Replacement (HMR)**
- Powered by **Vite** + `vite-plugin-web-components-hmr`
- Specifically configured for **Lit elements**
- Preserves component state during updates
- Updates only changed modules (not full page reload)

### **TypeScript Compilation**
- **Real-time compilation** via Vite
- **Type checking** in development
- **Import resolution** handles `.ts` files directly
- **Source maps** for debugging

### **Tailwind CSS**
- **JIT compilation** for instant style updates
- **Dark mode** toggling works in real-time
- **Responsive breakpoints** update immediately
- **Custom utility classes** compile on-demand

## 💡 Development Tips

### **Component Development**

1. **Start with a story**: Create stories first to test different states
2. **Use Controls panel**: Modify props interactively
3. **Test responsive**: Use viewport addon for different screen sizes
4. **Check accessibility**: Use a11y addon to catch issues early
5. **Test dark mode**: Toggle backgrounds to test theme support

### **Story Development**

```typescript
// Example: Adding a new story variant
export const NewVariant: Story = {
  args: {
    // Your props here
    isLoading: true,
    disabled: false,
  },
  render: (args) => html`
    <my-component 
      .isLoading=${args.isLoading}
      .disabled=${args.disabled}
    ></my-component>
  `,
};
```

### **Debugging Components**

```typescript
// Add console logs that will appear in browser console
render() {
  console.log('Component rendered with props:', this.myProp);
  return html`<div>...</div>`;
}
```

## 📁 File Structure

```
webui/
├── src/
│   ├── web-components/
│   │   ├── my-component.ts          # ← Edit this
│   │   └── my-component.stories.ts  # ← Test here
│   └── types.ts                     # ← Shared types
├── .storybook/
│   ├── main.ts                      # ← Storybook config
│   └── preview.ts                   # ← Global settings
└── dist/                           # ← Built assets
```

## 🔧 Configuration Details

### **Vite Config** (`vite.config.mts`)
- **HMR plugin** for web components
- **Tailwind integration**
- **TypeScript support**
- **Monaco Editor** workers (for code editing components)

### **Storybook Config** (`.storybook/main.ts`)
- **Web Components framework**
- **Vite integration** with HMR
- **Tailwind CSS** processing
- **Essential addons** (controls, viewport, a11y, etc.)

### **Preview Config** (`.storybook/preview.ts`)
- **Global CSS** imports
- **Responsive viewports** (mobile, tablet, desktop)
- **Theme backgrounds** (light/dark)
- **Default parameters**

## 🚨 Troubleshooting

### **Hot Reload Not Working?**
1. Check that Storybook server is running (`npm run storybook`)
2. Verify file extensions (use `.ts` imports)
3. Look for TypeScript errors (`npm run check`)
4. Clear browser cache and restart Storybook

### **Component Not Updating?**
1. Ensure component is exported with `@customElement`
2. Check that story imports the component file
3. Verify template changes use Lit's `html` template
4. Check browser console for errors

### **Styles Not Applying?**
1. Build Tailwind CSS: `npm run tailwind`
2. Check that components extend `SketchTailwindElement`
3. Verify Tailwind classes are valid
4. Check for CSS conflicts in browser dev tools

## 📖 Example Development Session

1. **Start development**:
   ```bash
   npm run storybook
   ```

2. **Open MobileChat story** in browser

3. **Edit `mobile-chat.ts`**:
   ```typescript
   // Add a new property
   @property({ type: Boolean })
   showTimestamps = false;
   
   // Update render method
   render() {
     return html`
       <div class="chat-container">
         ${this.messages.map(msg => html`
           <div class="message">
             ${msg.content}
             ${this.showTimestamps ? html`
               <span class="timestamp">${msg.timestamp}</span>
             ` : ''}
           </div>
         `)}
       </div>
     `;
   }
   ```

4. **See instant update** in Storybook

5. **Update story** to test new property:
   ```typescript
   export const WithTimestamps: Story = {
     args: {
       messages: mockMessages,
       showTimestamps: true, // New prop
     },
   };
   ```

6. **Use Controls panel** to toggle `showTimestamps` interactively

## 🎯 Best Practices

- **Component-driven development**: Build components in isolation first
- **Multiple story variants**: Cover different states and edge cases  
- **Responsive testing**: Always test mobile, tablet, desktop layouts
- **Accessibility first**: Use a11y addon to catch issues early
- **Real data**: Use realistic mock data in stories
- **Interactive demos**: Show components in realistic contexts
- **Documentation**: Update stories when adding new features

With this setup, you get instant feedback when developing components, making it much faster to iterate and test different states and responsive behaviors!
