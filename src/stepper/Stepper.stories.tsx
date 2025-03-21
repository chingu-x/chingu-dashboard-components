import type { Meta, StoryObj } from "@storybook/react";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import Stepper, { type SteppersItem } from "./Stepper";

const steppers: SteppersItem[] = [
  {
    icon: <EnvelopeIcon className="h-[1.125rem]" />,
    name: "Sprint 1",
    status: "completed",
    onClickEvent: () => console.log("1"),
    isActive: false,
  },
  {
    icon: <EnvelopeIcon className="h-[1.125rem]" />,
    name: "Sprint 2",
    status: "completed",
    onClickEvent: () => console.log("2"),
    isActive: true,
  },
  {
    icon: <EnvelopeIcon className="h-[1.125rem]" />,
    name: "Sprint 3",
    status: "current",
    onClickEvent: () => console.log("3"),
    isActive: false,
  },
  {
    icon: <EnvelopeIcon className="h-[1.125rem]" />,
    name: "Sprint 4",
    status: "remaining",
    onClickEvent: () => console.log("4"),
    isActive: false,
  },
  {
    icon: <EnvelopeIcon className="h-[1.125rem]" />,
    name: "Sprint 5",
    status: "remaining",
    onClickEvent: () => console.log("5"),
    isActive: false,
  },
  {
    icon: <EnvelopeIcon className="h-[1.125rem]" />,
    name: "Sprint 6",
    status: "remaining",
    onClickEvent: () => console.log("6"),
    isActive: false,
  },
];

const meta = {
  title: "Components/Navigation/Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    styleType: {
      description: "What style is the Stepper",
      options: ["chips", "icons"],
      control: { type: "radio" },
    },
    stepperWidth: {
      description: "Set the width of stepper using tailwind utility class",
      control: "text",
    },
    steppers: {
      description: "Object of stepper items",
    },
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

const BaseTemplate: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "900px" }}>
        <div className="px-5">
          <Story />
        </div>
      </div>
    ),
  ],
  args: {
    steppers: steppers,
    styleType: "icons",
  },
};

export const Default: Story = {
  ...BaseTemplate,
};
