import type { Meta, StoryObj } from "@storybook/react";
import TextInputButton from "./TextInputButton";

const meta = {
  title: "Components/Inputs/Text Input Button",
  component: TextInputButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextInputButton>;

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
    placeholder: "add hours",
    handleClick: () => {},
  },
  render: ({ ...args }) => <TextInputButton {...args} />,
};

export const Default: Story = {
  ...BaseTemplate,
};
