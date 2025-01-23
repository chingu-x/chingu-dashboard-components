import type { Meta, StoryObj } from "@storybook/react";

import Textarea from "./TextArea";

const meta = {
  title: "Components/Inputs/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      description: "The textarea id.",
      control: "text",
    },
    label: {
      description: "The textarea label (optional).",
      control: "text",
    },
    placeholder: {
      description: "The textarea placeholder.",
      control: "text",
    },
    defaultValue: {
      description:
        "The textarea default value. Should pass a string in  **curly** braces if you want `\\n` become a new line:\n`defaultValue={'Line\\nNew Line\\nNewLine'}` (optional)",
      control: "text",
    },
    suggestion: {
      description: "Add a short suggestion (optional).",
      control: "text",
    },
    maxLength: {
      description: "Add maximum length(optional).",
    },
    errorMessage: {
      description: "Error message (optional).",
      control: "text",
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

const BaseTemplate: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    id: "textarea",
    placeholder: "Placeholder",
  },
  render: ({ ...args }) => <Textarea {...args} />,
};

export const Default: Story = {
  ...BaseTemplate,
};

export const WithLabel: Story = {
  ...BaseTemplate,
  args: {
    ...BaseTemplate.args,
    label: "label",
  },
};

export const WithSuggestion: Story = {
  ...BaseTemplate,
  args: {
    ...BaseTemplate.args,
    suggestion: "Tip: keep it short and sweet",
  },
};

export const WithMaxLength: Story = {
  ...BaseTemplate,
  args: {
    ...BaseTemplate.args,
    maxLength: 10,
  },
};

export const WithErrorMessage: Story = {
  ...BaseTemplate,
  args: {
    ...BaseTemplate.args,
    errorMessage: "Required",
  },
};
