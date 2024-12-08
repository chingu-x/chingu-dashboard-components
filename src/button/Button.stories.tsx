import type { Meta, StoryObj } from "@storybook/react";
import { EnvelopeIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Buttons/Text Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "What background color to use?",
      defaultValue: { summary: "primary" },
      control: "select",
      options: [
        "primary",
        "secondary",
        "accent",
        "neutral",
        "error",
        "link",
        "outline",
      ],
    },
    size: {
      description: "How large should the button be?",
      defaultValue: { summary: "md" },
      control: "select",
      options: ["sm", "md", "lg", "xl", "xxl"],
    },
    disabled: {
      description: "Is it disabled?",
      defaultValue: { summary: false },
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const BaseTemplate: Story = {
  render: ({ ...args }) => (
    <Button {...args}>
      <EnvelopeIcon className="h-[18px] w-[18px]" />
      Button
      <ArrowRightIcon className="h-[18px] w-[18px]" />
    </Button>
  ),
};

export const Default: Story = {
  ...BaseTemplate,
};

export const Primary: Story = {
  ...BaseTemplate,
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  ...BaseTemplate,
  args: {
    variant: "secondary",
  },
};

export const Accent: Story = {
  ...BaseTemplate,
  args: {
    variant: "accent",
  },
};

export const Neutral: Story = {
  ...BaseTemplate,
  args: {
    variant: "neutral",
  },
};

export const Error: Story = {
  ...BaseTemplate,
  args: {
    variant: "error",
  },
};

export const Link: Story = {
  ...BaseTemplate,
  args: {
    variant: "link",
  },
};

export const Outline: Story = {
  ...BaseTemplate,
  args: {
    variant: "outline",
  },
};
