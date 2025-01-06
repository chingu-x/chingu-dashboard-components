import type { Meta, StoryObj } from "@storybook/react";
import Banner from "./Banner";

const meta = {
  title: "Components/Miscellaneous/Banner",
  component: Banner,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

const BaseTemplate: Story = {
  decorators: [
    (Story) => (
      <div className="py-10 bg-base-content">
        <Story />
      </div>
    ),
  ],
  args: {
    height: "h-[200px]",
    width: "w-[276px]",
    imageLight: (
      <img
        src="https://chingu-dashboard.vercel.app/_next/image?url=%2Fimg%2Fdirectory_banner_light.png&w=3840&q=75"
        alt="banner-light-mode"
      />
    ),
    imageDark: (
      <img
        src="https://chingu-dashboard.vercel.app/_next/image?url=%2Fimg%2Fdirectory_banner_dark.png&w=3840&q=75"
        alt="banner-light-mode"
      />
    ),
  },
  render: ({ ...args }) => <Banner {...args} />,
};

export const Default: Story = {
  ...BaseTemplate,
};
