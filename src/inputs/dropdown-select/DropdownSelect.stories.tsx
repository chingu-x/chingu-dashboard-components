import type { Meta, StoryObj } from "@storybook/react";

import DropdownSelect from "./DropdownSelect";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const meta: Meta<typeof DropdownSelect> = {
  title: "Components/Inputs/Dropdowm Select",
  component: DropdownSelect,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: 350,
          height: 350,
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    id: {
      description: "The input id.",
      control: "text",
    },
    label: {
      description: "The input label.",
      control: "text",
    },
    placeholder: {
      description: "The input placeholder.",
      control: "text",
    },
  },
} satisfies Meta<typeof DropdownSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const BaseTemplate: Story = {
  args: {
    id: "select",
    label: "label",
    placeholder: "Placeholder",
    options: options,
  },
  render: function Render(args) {
    return <DropdownSelect {...args} />;
  },
};

export const Default: Story = {
  ...BaseTemplate,
};
