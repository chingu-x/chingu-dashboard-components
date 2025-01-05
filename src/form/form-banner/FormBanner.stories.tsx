import type { Meta, StoryObj } from "@storybook/react";
import FormBanner from "./FormBanner";

const meta = {
  title: "Components/Form/FormBanner",
  component: FormBanner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

const BaseTemplate: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 800 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    title: "Title",
    description: "Description",
  },
  render: ({ ...args }) => <FormBanner {...args} />,
};

export const Default: Story = {
  ...BaseTemplate,
};
