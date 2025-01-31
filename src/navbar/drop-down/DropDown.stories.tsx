import type { Meta, StoryObj } from "@storybook/react";
import DropDown from "./DropDown";
import { Button } from "../../button";

const meta: Meta<typeof DropDown> = {
  title: "Components/Layout/DropDown",
  component: DropDown,
  decorators: [(Story) => <Story />],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  args: {
    openState: false,
  },
};

export const OpenWithVoyage: Story = {
  args: {
    children: (
      <>
        <div className="rounded-lg bg-secondary-content p-2 text-xs [&>*]:m-1">
          <p className="text-[10px] font-medium text-neutral-focus">
            My Voyage:
          </p>
          <p className="border border-transparent text-base font-medium text-base-300">
            Team - Tier 1 V49
          </p>
        </div>
        <Button
          type="button"
          variant="link"
          size="lg"
          className="m-0 flex w-full justify-start p-2 hover:bg-base-100 hover:text-base-300"
        >
          Settings
        </Button>
        <Button
          type="button"
          variant="link"
          size="lg"
          className="m-0 flex w-full justify-start p-2 hover:bg-base-100 hover:text-base-300"
        >
          Sign Out
        </Button>
      </>
    ),
    openState: true,
  },
  decorators: [
    (Story) => (
      <div style={{ height: 300 }}>
        <Story />
      </div>
    ),
  ],
};
