import type { Meta, StoryObj } from "@storybook/react";
import BaseFormPage from "./BaseFormPage";
import { Button } from "../../button";
import FormInputContainer from "../form-input-container/FormInputContainer";
import { Textarea, Label } from "../../inputs";

const meta = {
  title: "Components/Form/BaseFormPage",
  component: BaseFormPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BaseFormPage>;

export default meta;
type Story = StoryObj<typeof meta>;

const BaseTemplate: Story = {
  decorators: [
    (Story) => (
      <div className="bg-base-content py-10">
        <Story />
      </div>
    ),
  ],
  args: {
    title: "Title",
    description: "Description",
    children: (
      <form onSubmit={() => {}}>
        <FormInputContainer isTextField>
          <Label className="font-semibold normal-case">
            Please provide any extra other comments, concerns, lessons learned,
            team achievements, or any additional information you would like to
            let us know here.
          </Label>
          <Textarea id={"unique-id"} placeholder={"Your answer"} rows={2} />
        </FormInputContainer>
        <Button type="submit" title="submit" size="lg" variant="primary">
          Submit
        </Button>
      </form>
    ),
  },
  render: ({ ...args }) => <BaseFormPage {...args} />,
};

export const Default: Story = {
  ...BaseTemplate,
};
