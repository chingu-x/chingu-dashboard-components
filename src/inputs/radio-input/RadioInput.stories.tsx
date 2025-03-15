import type { Meta, StoryObj } from "@storybook/react";
import RadioInput from "./RadioInput";
import TextInput from "../text-input/TextInput";
import { useState } from "react";

const meta = {
  title: "Components/Inputs/Radio",
  component: RadioInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioInput>;

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
  args: {
    id: "radio-1",
    label: "Radio 1",
  },
  render: ({ ...args }) => <RadioInput {...args} />,
};

export const Default: Story = {
  ...BaseTemplate,
};

export const DefaultVericalLayout: Story = {
  ...BaseTemplate,
};

export const HorizontalLayout: Story = {
  ...BaseTemplate,
  args: {
    ...BaseTemplate.args,
    id: "radio-2",
    label: "Radio 2",
    groupLayout: "horizontal",
  },
};

export const RatingLayout: Story = {
  ...BaseTemplate,
  args: {
    ...BaseTemplate.args,
    id: "radio-3",
    label: "Radio 3",
    groupLayout: "rating",
  },
};

export const WithBorderLayout: Story = {
  ...BaseTemplate,
  args: {
    ...BaseTemplate.args,
    id: "radio-4",
    label: "Radio 4",
    groupLayout: "withBorder",
  },
};

export const WithBorderLayoutDisabled: Story = {
  ...BaseTemplate,
  args: {
    ...BaseTemplate.args,
    id: "radio-4",
    label: "Radio 4",
    groupLayout: "withBorder",
    disabled: true,
  },
};

export const WithBorderLayoutCheckedDisabled: Story = {
  ...BaseTemplate,
  args: {
    ...BaseTemplate.args,
    id: "radio-4",
    label: "Radio 4",
    groupLayout: "withBorder",
    disabled: true,
    checked: true,
  },
};

export const WithBorderLayoutAndAdditionalContent: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 500 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    id: "radio-5",
    label: "Radio 5",
    groupLayout: "withBorder",
    additionalContent: <TextInput id="textInput" placeholder="Some Text" />,
  },
  render: ({ ...args }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
      <RadioInput
        {...args}
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
    );
  },
};
