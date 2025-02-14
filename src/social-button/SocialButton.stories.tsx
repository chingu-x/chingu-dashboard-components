import type { Meta, StoryObj } from "@storybook/react";
import SocialButton from "./SocialButton";

const meta: Meta<typeof SocialButton> = {
  title: "Components/Buttons/Social Button",
  component: SocialButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

const BaseTemplate: Story = {
  args: {
    variant: "discord",
  },
  render: ({ ...args }) => <SocialButton {...args} />,
};

export const Default: Story = {
  ...BaseTemplate,
};

export const Discord: Story = {
  ...BaseTemplate,
};

export const Linkedin: Story = {
  ...BaseTemplate,
  args: {
    variant: "linkedin",
  },
};

export const Github: Story = {
  ...BaseTemplate,
  args: {
    variant: "github",
  },
};
