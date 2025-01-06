import type { Meta, StoryObj } from "@storybook/react";
import BannerContainer from "./BannerContainer";
import Banner from "../banner/Banner";

const meta = {
  title: "Components/Miscellaneous/BannerContainer",
  component: BannerContainer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BannerContainer>;

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
    title: "Directory",
    description:
      "Behold, your mighty band of teammates! If you want them to plan with precision and prowess, make sure your deets are up to date, or else prepare for some serious spreadsheet confusion!",
    children: (
      <Banner
        height="h-[200px]"
        width="w-[276px]"
        imageDark={
          <img
            src="https://chingu-dashboard.vercel.app/_next/image?url=%2Fimg%2Fdirectory_banner_dark.png&w=3840&q=75"
            alt="banner-light-mode"
          />
        }
        imageLight={
          <img
            src="https://chingu-dashboard.vercel.app/_next/image?url=%2Fimg%2Fdirectory_banner_light.png&w=3840&q=75"
            alt="banner-light-mode"
          />
        }
      />
    ),
  },
  render: ({ ...args }) => <BannerContainer {...args} />,
};

export const Default: Story = {
  ...BaseTemplate,
};
