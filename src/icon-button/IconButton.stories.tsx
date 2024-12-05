import type { Meta, StoryObj } from "@storybook/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import IconButton from "./IconButton";

const meta = {
  title: "Components/Buttons/Icon Button",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const BaseTemplate: Story = {
  args: {
    ariaLabel: "aria-label",
    children: <EllipsisVerticalIcon />,
  },
  render: ({ ...args }) => <IconButton {...args} />,
};

export const Default = {
  ...BaseTemplate,
};
