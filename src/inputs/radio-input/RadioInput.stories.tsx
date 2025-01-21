import type { Meta, StoryObj } from "@storybook/react";
import RadioInput from "./RadioInput";

const meta = {
  title: "Components/Inputs/Radio",
  component: RadioInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioInput>;

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
    id: "radio-1",
    label: "Radio 1",
  },
  render: ({ ...args }) => <RadioInput {...args} />,
};

export const Default: Story = {
  ...BaseTemplate,
};
