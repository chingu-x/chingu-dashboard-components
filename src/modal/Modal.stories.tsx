import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import { useState } from "react";
import { Button } from "../button";

const meta = {
  title: "Components/Overlays/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      description: "Open or close a modal?",
      control: "boolean",
    },
    onClose: {
      description: "onClose function",
    },
    title: {
      description: "A modal's title.",
      control: "text",
    },
    children: {
      description: "A modal's content.",
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const BaseTemplate: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: 400, position: "relative" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    isOpen: true,
    title: "title",
    onClose: () => {},
    children: <div>This is a modal.</div>,
  },
  render: ({ ...args }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        {isOpen ? null : (
          <div className="flex items-center justify-center w-full h-[400px]">
            <Button onClick={() => setIsOpen(true)}>Open modal</Button>
          </div>
        )}
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  },
};

export const Default: Story = {
  ...BaseTemplate,
};
