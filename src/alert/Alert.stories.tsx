import type { Meta, StoryObj } from "@storybook/react";
import Alert from "./Alert";

const meta = {
  title: "Components/Miscellaneous/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

const BaseTemplate: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 500 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    context: "success",
    message: "Success message",
  },
  render: ({ ...args }) => <Alert {...args} />,
};

export const Default: Story = {
  ...BaseTemplate,
};

export const Neutral: Story = {
  ...BaseTemplate,
  args: {
    context: "neutral",
    message: "Neutral message",
  },
};

export const Info: Story = {
  ...BaseTemplate,
  args: {
    context: "info",
    message: "Info message",
  },
};

export const Error: Story = {
  ...BaseTemplate,
  args: {
    context: "error",
    message: "Error message",
  },
};

export const Warning: Story = {
  ...BaseTemplate,
  args: {
    context: "warning",
    message: "Warning message",
  },
};
