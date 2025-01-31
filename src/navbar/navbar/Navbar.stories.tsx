import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";
import { ModeToggleButton } from "../../mode-toggle-button";
import { Button } from "../../button";
import { Avatar } from "../../avatar";
import Bell from "../bell/Bell";
import DropDown from "../drop-down/DropDown";
import { useState } from "react";

const avatarUrl =
  "https://gravatar.com/avatar/3bfaef00e02a22f99e17c66e7a9fdd31?s=400&d=identicon&r=x";

const meta = {
  title: "Components/Layout/Navbar",
  component: Navbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof Navbar>;

function ModeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const handleChange = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return <ModeToggleButton theme={theme} onChange={handleChange} />;
}

export const LoggedOut: Story = {
  args: {
    logo: (
      <a
        href={"/"}
        className="flex cursor-pointer flex-col flex-wrap items-center gap-2 sm:flex-row"
      >
        <img
          src={"/chingu_logo.png"}
          width={50}
          height={50}
          alt="Chingu Logo"
        />
        <h2 className="hidden text-xs font-semibold text-base-300 sm:flex sm:text-lg">
          Chingu
        </h2>
      </a>
    ),
  },
  render: ({ ...args }) => {
    return (
      <div className="flex flex-col gap-4">
        <Navbar {...args}>
          <ModeToggle />
          <Button key="Button" title="Login" type="button">
            Log In
          </Button>
        </Navbar>
      </div>
    );
  },
};

export const LoggedIn: Story = {
  args: {
    logo: (
      <a
        href={"/"}
        className="flex cursor-pointer flex-col flex-wrap items-center gap-2 sm:flex-row"
      >
        <img
          src={"/chingu_logo.png"}
          width={50}
          height={50}
          alt="Chingu Logo"
        />
        <h2 className="hidden text-xs font-semibold text-base-300 sm:flex sm:text-lg">
          Chingu
        </h2>
      </a>
    ),
  },
  render: ({ ...args }) => {
    return (
      <div className="flex flex-col gap-4">
        <Navbar {...args}>
          <ModeToggle />
          <Bell notificationCount={4} />
          <Avatar>
            <img width={24} height={24} alt="avatar" src={avatarUrl} />
          </Avatar>
          <DropDown openState={true}>
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
          </DropDown>
        </Navbar>
      </div>
    );
  },
  decorators: [
    (Story) => (
      <div style={{ height: 300 }}>
        <Story />
      </div>
    ),
  ],
};
