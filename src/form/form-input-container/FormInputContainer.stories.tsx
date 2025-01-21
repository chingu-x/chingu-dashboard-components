import type { Meta, StoryObj } from "@storybook/react";
import FormInputContainer from "./FormInputContainer";
import { Label, Textarea } from "../../inputs/";

const meta = {
  title: "Components/Form/FormInputContainer",
  component: FormInputContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormInputContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

const BaseTemplate: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 800 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    children: (
      <div>
        <p>Inner Content</p>
      </div>
    ),
  },
  render: ({ ...args }) => <FormInputContainer {...args} />,
};

export const Default: Story = {
  ...BaseTemplate,
};

export const WithTextInput: Story = {
  ...BaseTemplate,
  args: {
    ...BaseTemplate.args,
    isTextField: true,
    children: (
      <>
        <Label className="font-semibold normal-case">
          Please provide any extra other comments, concerns, lessons learned,
          team achievements, or any additional information you would like to let
          us know here.
        </Label>
        <Textarea id={"unique-id"} placeholder={"Your answer"} rows={2} />
      </>
    ),
  },
};

export const WithError: Story = {
  ...BaseTemplate,
  args: {
    ...BaseTemplate.args,
    isTextField: true,
    isError: true,
    children: (
      <>
        <Label className="font-semibold normal-case">
          Please provide any extra other comments, concerns, lessons learned,
          team achievements, or any additional information you would like to let
          us know here.
        </Label>
        <Textarea
          id={"unique-id"}
          placeholder={"Your answer"}
          rows={2}
          errorMessage="Required"
        />
      </>
    ),
  },
};
