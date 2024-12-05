import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

const avatarUrl =
  "https://gravatar.com/avatar/3bfaef00e02a22f99e17c66e7a9fdd31?s=400&d=identicon&r=x";

const meta = {
  title: "Components/Data display/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const BaseTemplate: Story = {
  args: {
    children: <img alt="avatar" src={avatarUrl} />,
  },
  render: ({ ...args }) => <Avatar {...args} />,
};

export const Default = {
  ...BaseTemplate,
};
