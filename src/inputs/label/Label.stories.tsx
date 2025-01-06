import type { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";
import LabelContent from "../label-content/LabelContent";

const meta = {
  title: "Components/Inputs/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

const BaseTemplate: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 500 }}>
        <Story />
      </div>
    ),
  ],
  render: ({ ...args }) => <Label {...args}>Label</Label>,
};

export const Default: Story = {
  ...BaseTemplate,
};

export const WithBooleanLabelContent: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 500 }}>
        <Story />
      </div>
    ),
  ],
  render: ({ ...args }) => (
    <Label {...args}>
      <LabelContent
        text={
          "{{Yes,No}} Did your Scrum Master provide any Scrum training or coaching, either during events or through Discord?"
        }
      />
    </Label>
  ),
};

export const WithIconLabelContent: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 500 }}>
        <Story />
      </div>
    ),
  ],
  render: ({ ...args }) => (
    <Label {...args}>
      <LabelContent
        withIcon={true}
        text={"{{greenRocket}} We have had a good start!"}
      />
    </Label>
  ),
};
