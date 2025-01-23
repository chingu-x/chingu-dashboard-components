import type { Meta, StoryObj } from "@storybook/react";
import ModeToggleButton from "./ModeToggleButton";
import { useState } from "storybook/internal/preview-api";

const meta: Meta<typeof ModeToggleButton> = {
  title: "Components/Buttons/Mode Toggle Button",
  component: ModeToggleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

const BaseTemplate: Story = {
  args: {
    onChange: () => {},
    theme: "light",
  },
  render: ({ ...args }) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    return (
      <ModeToggleButton
        {...args}
        theme={theme}
        onChange={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      />
    );
  },
};

export const Default: Story = {
  ...BaseTemplate,
};
