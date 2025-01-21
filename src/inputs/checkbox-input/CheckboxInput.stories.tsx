import type { Meta, StoryObj } from "@storybook/react";
import CheckboxInput from "./CheckboxInput";

const meta = {
  title: "Components/Inputs/Checkbox",
  component: CheckboxInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CheckboxInput>;

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
    id: "checkbox-1",
    label: "Checkbox 1",
  },
  render: ({ ...args }) => <CheckboxInput {...args} />,
};

export const Default: Story = {
  ...BaseTemplate,
};
