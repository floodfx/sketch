import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './mobile-chat.js';
import { AgentMessage, CodingAgentMessageType } from '../types.js';

type MobileChatElement = {
  messages: AgentMessage[];
  isThinking: boolean;
};

// Mock messages for stories
const mockMessages: AgentMessage[] = [
  {
    type: 'user' as CodingAgentMessageType,
    end_of_turn: true,
    content: 'Hello! Can you help me with my React component?',
    timestamp: '2024-01-15T10:00:00Z',
    conversation_id: 'test-conv-1',
    idx: 0,
  },
  {
    type: 'assistant' as CodingAgentMessageType,
    end_of_turn: true,
    content: 'Of course! I\'d be happy to help you with your React component. What specific issue are you facing?\n\nHere are some common things I can help with:\n\n- **Component structure** and best practices\n- **State management** with hooks\n- **Props and TypeScript** integration\n- **Styling** with CSS modules or styled-components\n- **Testing** your components\n\nCould you share your component code or describe the problem you\'re encountering?',
    timestamp: '2024-01-15T10:00:30Z',
    conversation_id: 'test-conv-1',
    idx: 1,
  },
  {
    type: 'user' as CodingAgentMessageType,
    end_of_turn: true,
    content: 'I\'m having trouble with state updates not triggering re-renders. Here\'s my code:\n\n```javascript\nconst [count, setCount] = useState(0);\n\nconst handleClick = () => {\n  count = count + 1; // This is wrong!\n};\n```',
    timestamp: '2024-01-15T10:02:00Z',
    conversation_id: 'test-conv-1',
    idx: 2,
  },
  {
    type: 'assistant' as CodingAgentMessageType,
    end_of_turn: true,
    content: 'I see the issue! You\'re directly mutating the `count` variable instead of using the `setCount` function. In React, you must use the state setter function to trigger re-renders.\n\nHere\'s the corrected code:\n\n```javascript\nconst [count, setCount] = useState(0);\n\nconst handleClick = () => {\n  setCount(count + 1); // ✅ Correct way\n  // Or using functional update:\n  setCount(prevCount => prevCount + 1);\n};\n```\n\n**Why this happens:**\n- React uses Object.is() comparison to determine if state has changed\n- Direct mutation doesn\'t change the reference, so React doesn\'t re-render\n- State setters trigger React\'s reconciliation process\n\n**Best practices:**\n1. Always use state setters\n2. Treat state as immutable\n3. Use functional updates for complex state logic\n\nTry this fix and let me know if you have any other questions!',
    timestamp: '2024-01-15T10:03:00Z',
    conversation_id: 'test-conv-1',
    idx: 3,
  },
];

const longConversationMessages: AgentMessage[] = [
  ...mockMessages,
  {
    type: 'user' as CodingAgentMessageType,
    end_of_turn: true,
    content: 'Thanks! That makes sense. One more question - how do I handle multiple state variables efficiently?',
    timestamp: '2024-01-15T10:05:00Z',
    conversation_id: 'test-conv-1',
    idx: 4,
  },
  {
    type: 'assistant' as CodingAgentMessageType,
    end_of_turn: true,
    content: 'Great question! There are several strategies for managing multiple state variables:\n\n## 1. Multiple useState calls\n```javascript\nconst [name, setName] = useState("");\nconst [email, setEmail] = useState("");\nconst [age, setAge] = useState(0);\n```\n\n## 2. Single state object with useReducer\n```javascript\nconst initialState = { name: "", email: "", age: 0 };\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case "SET_NAME":\n      return { ...state, name: action.payload };\n    case "SET_EMAIL":\n      return { ...state, email: action.payload };\n    default:\n      return state;\n  }\n}\n\nconst [state, dispatch] = useReducer(reducer, initialState);\n```\n\n## 3. Custom hook\n```javascript\nfunction useFormData() {\n  const [formData, setFormData] = useState({\n    name: "", email: "", age: 0\n  });\n\n  const updateField = (field, value) => {\n    setFormData(prev => ({ ...prev, [field]: value }));\n  };\n\n  return [formData, updateField];\n}\n```\n\n**When to use each:**\n- **Multiple useState**: Simple, independent values\n- **useReducer**: Complex state logic, related values\n- **Custom hooks**: Reusable state logic\n\nWhat type of state management fits your use case best?',
    timestamp: '2024-01-15T10:06:30Z',
    conversation_id: 'test-conv-1',
    idx: 5,
  },
];

const meta: Meta<MobileChatElement> = {
  title: 'Mobile/MobileChat',
  component: 'mobile-chat',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  argTypes: {
    isThinking: {
      control: 'boolean',
      description: 'Whether the assistant is thinking/processing',
    },
    messages: {
      control: 'object',
      description: 'Array of chat messages',
    },
  },
};

export default meta;
type Story = StoryObj<MobileChatElement>;

export const Default: Story = {
  args: {
    messages: mockMessages,
    isThinking: false,
  },
  render: (args) => html`
    <div class="bg-white h-screen flex flex-col">
      <div class="bg-blue-500 text-white p-4">
        <h1 class="text-lg font-semibold">Chat with Assistant</h1>
      </div>
      <div class="flex-1 overflow-hidden">
        <mobile-chat 
          .messages=${args.messages}
          .isThinking=${args.isThinking}
        ></mobile-chat>
      </div>
    </div>
  `,
};

export const Empty: Story = {
  args: {
    messages: [],
    isThinking: false,
  },
  render: (args) => html`
    <div class="bg-white h-screen flex flex-col">
      <div class="bg-blue-500 text-white p-4">
        <h1 class="text-lg font-semibold">New Conversation</h1>
      </div>
      <div class="flex-1 overflow-hidden">
        <mobile-chat 
          .messages=${args.messages}
          .isThinking=${args.isThinking}
        ></mobile-chat>
      </div>
    </div>
  `,
};

export const Thinking: Story = {
  args: {
    messages: mockMessages,
    isThinking: true,
  },
  render: (args) => html`
    <div class="bg-white h-screen flex flex-col">
      <div class="bg-blue-500 text-white p-4 flex items-center justify-between">
        <h1 class="text-lg font-semibold">Chat with Assistant</h1>
        <div class="text-sm opacity-75">Thinking...</div>
      </div>
      <div class="flex-1 overflow-hidden">
        <mobile-chat 
          .messages=${args.messages}
          .isThinking=${args.isThinking}
        ></mobile-chat>
      </div>
    </div>
  `,
};

export const LongConversation: Story = {
  args: {
    messages: longConversationMessages,
    isThinking: false,
  },
  render: (args) => html`
    <div class="bg-white h-screen flex flex-col">
      <div class="bg-blue-500 text-white p-4">
        <h1 class="text-lg font-semibold">Long Conversation</h1>
      </div>
      <div class="flex-1 overflow-hidden">
        <mobile-chat 
          .messages=${args.messages}
          .isThinking=${args.isThinking}
        ></mobile-chat>
      </div>
    </div>
  `,
};

export const DarkMode: Story = {
  args: {
    messages: mockMessages,
    isThinking: false,
  },
  render: (args) => html`
    <div class="bg-gray-900 text-white h-screen flex flex-col dark">
      <div class="bg-blue-600 text-white p-4">
        <h1 class="text-lg font-semibold">Dark Mode Chat</h1>
      </div>
      <div class="flex-1 overflow-hidden">
        <mobile-chat 
          .messages=${args.messages}
          .isThinking=${args.isThinking}
        ></mobile-chat>
      </div>
    </div>
  `,
};
