import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

const avatarUrl =
  "https://gravatar.com/avatar/3bfaef00e02a22f99e17c66e7a9fdd31?s=400&d=identicon&r=x";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <img
        width={24}
        height={24}
        alt="avatar"
        src={avatarUrl}
      />
    ),
  },
  render: ({ ...args }) => <Avatar {...args} />,
};

export const SM: Story = {
  args: {
    children: (
      <img
        width={16}
        height={16}
        alt="avatar"
        src={avatarUrl}
      />
    ),
  },
  render: ({ ...args }) => <Avatar {...args} />,
};

export const XXL: Story = {
  args: {
    children: (
      <img
        width={48}
        height={48}
        alt="avatar"
        src={avatarUrl}
      />
    ),
  },
  render: ({ ...args }) => <Avatar {...args} />,
};
