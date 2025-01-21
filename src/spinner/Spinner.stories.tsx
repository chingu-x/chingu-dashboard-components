import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "./Spinner";

const meta = {
  title: "Components/Feedback/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

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
  render: ({ ...args }) => <Spinner {...args} />,
};

export const Default: Story = {
  ...BaseTemplate,
};

export const PrimarySpinner: Story = {
  ...BaseTemplate,
  args: {
    color: "text-primary",
  },
};

export const Custom: Story = {
  ...BaseTemplate,
  args: {
    color: "text-info",
    extraClasses: "w-10 h-10 animate-pulse",
  },
};
