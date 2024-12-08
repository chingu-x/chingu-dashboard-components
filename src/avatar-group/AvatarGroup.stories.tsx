import type { Meta, StoryObj } from "@storybook/react";
import AvatarGroup from "./AvatarGroup";
import { Avatar } from "../avatar";

const placeholder =
  "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg";

const avatarUrl =
  "https://gravatar.com/avatar/3bfaef00e02a22f99e17c66e7a9fdd31?s=400&d=identicon&r=x";

const meta: Meta<typeof AvatarGroup> = {
  title: "Components/Data display/Avatar Group",
  component: AvatarGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "500px", height: "80px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

export const AFewMembers: Story = {
  args: {
    children: [
      <Avatar key={1} withBorder>
        <img width={24} height={24} alt="avatar" src={avatarUrl} />
      </Avatar>,
      <Avatar key={2} withBorder>
        <img width={24} height={24} alt="avatar" src={avatarUrl} />
      </Avatar>,
      <Avatar key={3} withBorder>
        <img width={24} height={24} alt="avatar" src={avatarUrl} />
      </Avatar>,
    ],
  },
};

export const SingleMember: Story = {
  args: {
    children: [
      <Avatar key={1} withBorder>
        <img width={24} height={24} alt="avatar" src={avatarUrl} />
      </Avatar>,
    ],
  },
};

export const ManyMembers: Story = {
  args: {
    children: [
      <Avatar key={1} withBorder>
        <img width={24} height={24} alt="avatar" src={avatarUrl} />
      </Avatar>,
      <Avatar key={1} withBorder>
        <img width={24} height={24} alt="avatar" src={avatarUrl} />
      </Avatar>,
      <Avatar key={1} withBorder>
        <img width={24} height={24} alt="avatar" src={avatarUrl} />
      </Avatar>,
      <Avatar key={1} withBorder>
        <img width={24} height={24} alt="avatar" src={avatarUrl} />
      </Avatar>,
      <Avatar key={1} withBorder>
        <img width={24} height={24} alt="avatar" src={avatarUrl} />
      </Avatar>,
      <Avatar key={1} withBorder>
        <img width={24} height={24} alt="avatar" src={avatarUrl} />
      </Avatar>,
      <Avatar key={1} withBorder>
        <img width={24} height={24} alt="avatar" src={avatarUrl} />
      </Avatar>,
    ],
  },
};

export const Placeholder: Story = {
  args: {
    children: [
      <Avatar key={1} withBorder>
        <img width={24} height={24} alt="avatar" src={placeholder} />
      </Avatar>,
    ],
  },
};

export const MixedImages: Story = {
  args: {
    children: [
      <Avatar key={1} withBorder>
        <img width={24} height={24} alt="avatar" src={avatarUrl} />
      </Avatar>,
      <Avatar key={1} withBorder>
        <img width={24} height={24} alt="avatar" src={placeholder} />
      </Avatar>,
      <Avatar key={1} withBorder>
        <img width={24} height={24} alt="avatar" src={avatarUrl} />
      </Avatar>,
    ],
  },
};
