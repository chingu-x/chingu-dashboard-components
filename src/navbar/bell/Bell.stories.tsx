import type { Meta, StoryObj } from "@storybook/react";
import Bell from "./Bell";

const meta = {
  title: "Components/Layout/Bell",
  component: Bell,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    notificationCount: {
      description: "Number of notifications if any.",
      defaultValue: { summary: undefined },
      control: "select",
      options: [undefined, 4, 44, 444],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "20px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Bell>;

export default meta;
type Story = StoryObj<typeof Bell>;

const BaseTemplate: Story = {
  render: ({ ...args }) => <Bell {...args} />,
};

export const NoNotifications: Story = {
  ...BaseTemplate,
  args: {
    notificationCount: undefined,
  },
};
export const FewNotifications: Story = {
  ...BaseTemplate,
  args: {
    notificationCount: 4,
  },
};

export const ManyNotifications: Story = {
  ...BaseTemplate,
  args: {
    notificationCount: 444,
  },
};
