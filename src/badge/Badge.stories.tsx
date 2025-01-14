import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";
import { Avatar } from "../avatar";

const avatarUrl =
  "https://gravatar.com/avatar/3bfaef00e02a22f99e17c66e7a9fdd31?s=400&d=identicon&r=x";

const meta = {
  title: "Components/Data display/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "What background color to use?",
      defaultValue: { summary: "primary" },
      control: "select",
      options: ["primary", "error", "warning", "success"],
    },
    size: {
      description: "How large should the badge be?",
      defaultValue: { summary: "md" },
      control: "select",
      options: ["sm", "md", "lg"],
    },
    children: {
      description:
        "Need to pass Avatar with the corresponding image to show the badge with an avatar",
      control: "object",
      defaultValue: <></>,
    },
  },
  args: {
    title: "Badge",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

const BaseTemplate: Story = {
  render: ({ ...args }) => <Badge {...args} />,
};

export const Default: Story = {
  ...BaseTemplate,
};

export const SM: Story = {
  ...BaseTemplate,
  args: {
    size: "sm",
  },
};

export const LG: Story = {
  ...BaseTemplate,
  args: {
    size: "lg",
  },
};

export const Primary: Story = {
  ...BaseTemplate,
  args: {
    variant: "primary",
  },
};

export const Error: Story = {
  ...BaseTemplate,
  args: {
    variant: "error",
  },
};

export const Warning: Story = {
  ...BaseTemplate,
  args: {
    variant: "warning",
  },
};

export const Success: Story = {
  ...BaseTemplate,
  args: {
    variant: "success",
  },
};

export const AvatarBadgeSM: Story = {
  ...BaseTemplate,
  args: {
    variant: "primary",
    size: "sm",
    children: (
      <Avatar>
        <img width={14} height={14} alt="avatar" src={avatarUrl} />
      </Avatar>
    ),
  },
};

export const AvatarBadgeMD: Story = {
  ...BaseTemplate,
  args: {
    variant: "primary",
    children: (
      <Avatar>
        <img width={16} height={16} alt="avatar" src={avatarUrl} />
      </Avatar>
    ),
  },
};

export const AvatarBadgeLG: Story = {
  ...BaseTemplate,
  args: {
    variant: "primary",
    size: "lg",
    children: (
      <Avatar>
        <img width={18} height={18} alt="avatar" src={avatarUrl} />
      </Avatar>
    ),
  },
};
