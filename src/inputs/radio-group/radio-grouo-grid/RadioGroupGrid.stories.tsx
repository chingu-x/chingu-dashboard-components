import type { Meta, StoryObj } from "@storybook/react";

import RadioGroupGrid from "./RadioGroupGrid";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import TextInput from "../../text-input/TextInput";

const options1 = [
  {
    id: "option_1",
    value: "option_1",
    label: "Option 1",
  },
  {
    id: "option_2",
    value: "option_2",
    label: "Option 2",
  },
  {
    id: "option_3",
    value: "option_3",
    label: "Option 3",
  },
  {
    id: "option_4",
    value: "option_4",
    label: "Option 4",
  },
];

const options2 = [
  {
    id: "option_5",
    value: "option_5",
    label: (
      <div className="flex items-center gap-2">
        <RocketLaunchIcon className="h-7 w-7 text-base-300" />
        <div className="flex flex-col gap-1 text-sm font-medium">
          <span className="font-bold">Option Title</span>
          <span>An optional description can be provided here.</span>
        </div>
      </div>
    ),
  },
  {
    id: "option_6",
    value: "option_6",
    label: (
      <div className="flex items-center gap-2">
        <RocketLaunchIcon className="h-7 w-7 text-base-300" />
        <div className="flex flex-col gap-1 text-sm font-medium">
          <span className="font-bold">Option Title</span>
          <span>An optional description can be provided here.</span>
        </div>
      </div>
    ),
  },
  {
    id: "option_7",
    value: "option_7",
    label: (
      <div className="flex items-center gap-2">
        <RocketLaunchIcon className="h-7 w-7 text-base-300" />
        <div className="flex flex-col gap-1 text-sm font-medium">
          <span className="font-bold">Option Title</span>
          <span>An optional description can be provided here.</span>
        </div>
      </div>
    ),
  },
  {
    id: "option_8",
    value: "option_8",
    label: (
      <div className="flex items-center gap-2">
        <RocketLaunchIcon className="h-7 w-7 text-base-300" />
        <div className="flex flex-col gap-1 text-sm font-medium">
          <span className="font-bold">Option Title</span>
          <span>An optional description can be provided here.</span>
        </div>
      </div>
    ),
  },
];

const options3 = [
  {
    id: "option_9",
    value: "option_9",
    label: "dev.to",
  },
  {
    id: "option_10",
    value: "option_10",
    label: "FreeCodeCamp Forum",
  },
  {
    id: "option_11",
    value: "option_11",
    label: "The Job Hackers",
  },
  {
    id: "option_12",
    value: "option_12",
    label: "Google Search",
  },
  {
    id: "option_13",
    value: "option_13",
    label: "Other",
  },
];

const options4 = [
  {
    id: "option_14",
    value: "option_14",
    label: "dev.to",
  },
  {
    id: "option_15",
    value: "option_15",
    label: "FreeCodeCamp Forum",
  },
  {
    id: "option_16",
    value: "option_16",
    label: "The Job Hackers",
  },
  {
    id: "option_17",
    value: "option_17",
    label: "Google Search",
  },
  {
    id: "option_18",
    value: "option_18",
    label: "Other",
    additionalContent: <TextInput id="textInput" placeholder="Some Text" />,
  },
];

const meta: Meta<typeof RadioGroupGrid> = {
  title: "Components/Inputs/Radio Groups/Grid Radio Group",
  component: RadioGroupGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      description:
        "Options - an array of objects which must have `id`, `label` and `value`",
      control: { type: "object" },
    },
  },
} satisfies Meta<typeof RadioGroupGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const BaseTemplate: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "100%" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    options: options1,
  },
  render: ({ ...args }) => <RadioGroupGrid {...args} name="options" />,
};

export const Default: Story = {
  ...BaseTemplate,
  args: {
    ...BaseTemplate.args,
  },
};

export const WithCustomLabel: Story = {
  ...BaseTemplate,
  args: {
    ...BaseTemplate.args,
    options: options2,
  },
};

export const ExampleWithUnevenNumberOfOptions: Story = {
  ...BaseTemplate,
  args: {
    ...BaseTemplate.args,
    options: options3,
  },
};

export const ExampleWithInput: Story = {
  ...BaseTemplate,
  args: {
    ...BaseTemplate.args,
    options: options4,
  },
};
