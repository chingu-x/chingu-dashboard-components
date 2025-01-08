import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";
import { Button } from "../button";
import { AvatarGroup } from "../avatar-group";
import { Avatar } from "../avatar";

const avatarUrl =
  "https://gravatar.com/avatar/3bfaef00e02a22f99e17c66e7a9fdd31?s=400&d=identicon&r=x";

const meta = {
  title: "Components/Overlays/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    content: {
      description: "Content inside the tooltip",
      control: "text",
    },
    supportText: {
      description: "Informational description of content",
      control: "text",
    },
    position: {
      description: "Where to place the tooltip",
      options: ["top", "bottom", "left", "right"],
      control: { type: "radio" },
    },
    tooltipWidth: {
      description: "Width of tooltip",
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    children: {
      description: "What is the tooltip referring to",
      control: "text",
    },
    isDisplay: {
      description: "When to show the tooltip",
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

const BaseTemplate: Story = {
  args: {
    content: "This is a tooltip",
    position: "right",
    tooltipWidth: "small",
    children: "Hover here",
    isDisplay: true,
    hovered: true,
  },
};

export const Default: Story = {
  ...BaseTemplate,
};

export const ButtonTooltip: Story = {
  args: {
    content: "This is a tooltip",
    position: "right",
    tooltipWidth: "small",
    children: "Hover here",
    isDisplay: true,
    hovered: true,
  },
  render: ({ ...args }) => (
    <Tooltip {...args}>
      <Button type="button" size="lg" variant="neutral">
        Button
      </Button>
    </Tooltip>
  ),
};

export const AvatarGroupTooltip: Story = {
  args: {
    content: "This is a tooltip",
    customClassName: "text-xs font-medium w-fit",
    position: "bottom",
    tooltipWidth: "small",
    children: "Hover here",
    isDisplay: true,
    hovered: false,
  },
  render: ({ ...args }) => (
    <AvatarGroup>
      <Tooltip {...args} content="tooltip 1" hovered={true}>
        <Avatar>
          <img width={24} height={24} alt="avatar" src={avatarUrl} />
        </Avatar>
      </Tooltip>
      <Tooltip {...args} content="tooltip 2">
        <Avatar>
          <img width={24} height={24} alt="avatar" src={avatarUrl} />
        </Avatar>
      </Tooltip>
      <Tooltip {...args} content="tooltip 3">
        <Avatar>
          <img width={24} height={24} alt="avatar" src={avatarUrl} />
        </Avatar>
      </Tooltip>
    </AvatarGroup>
  ),
};
