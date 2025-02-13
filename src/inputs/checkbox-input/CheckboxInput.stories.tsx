import type { Meta, StoryObj } from "@storybook/react";
import CheckboxInput from "./CheckboxInput";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

const meta = {
  title: "Components/Inputs/Checkbox",
  component: CheckboxInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CheckboxInput>;

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
    id: "checkbox-1",
    label: "Checkbox 1",
  },
  render: ({ ...args }) => <CheckboxInput {...args} />,
};

export const Default: Story = {
  ...BaseTemplate,
};

export const DefaultDisabled: Story = {
  ...BaseTemplate,
  args: {
    ...BaseTemplate.args,
    disabled: true,
  },
};

export const DefaultCheckedDisabled: Story = {
  ...BaseTemplate,
  args: {
    ...BaseTemplate.args,
    disabled: true,
    checked: true,
  },
};

export const WithBorder: Story = {
  ...BaseTemplate,
  args: {
    id: "checkbox-2",
    label: "Checkbox 2",
    withBorder: true,
  },
};

export const WithBorderDisabled: Story = {
  ...BaseTemplate,
  args: {
    ...BaseTemplate.args,
    withBorder: true,
    disabled: true,
  },
};

export const WithBorderCheckedDisabled: Story = {
  ...BaseTemplate,
  args: {
    ...BaseTemplate.args,
    withBorder: true,
    disabled: true,
    checked: true,
  },
};

export const WithBorderWithCustomLabel: Story = {
  ...BaseTemplate,
  args: {
    id: "checkbox-3",
    label: (
      <div className="flex items-center gap-2">
        <RocketLaunchIcon className="h-7 w-7 text-base-300" />
        <div className="flex flex-col gap-1 text-sm font-medium">
          <span className="font-bold">Option Title</span>
          <span>An optional description can be provided here.</span>
        </div>
      </div>
    ),
    withBorder: true,
  },
};
