import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";

const imageUrl =
  "https://gravatar.com/avatar/c8cf6521c193fc743c7fadcd8be04e983724764efa65b3c3913b6d22f086a11f?s=200&r=g&d=robohash";

describe("Avatar Component", () => {
  it("renders image correctly", () => {
    render(
      <Avatar>
        <img alt="avatar" src={imageUrl} width={40} height={40} />
      </Avatar>,
    );

    const image = screen.getByRole("img", { name: /avatar/i });

    expect(image).toBeInTheDocument();
  });

  it("handles transparent avatars", () => {
    render(
      <Avatar>
        <img alt="avatar" src={imageUrl} width={40} height={40} />
      </Avatar>,
    );

    const image: HTMLImageElement = screen.getByRole("img", {
      name: /avatar/i,
    });

    const avatarElement = image.parentElement;

    expect(avatarElement).toHaveClass("bg-base-200");
  });
});
