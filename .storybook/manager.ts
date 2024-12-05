import { addons } from "@storybook/manager-api";
import { create, themes } from "@storybook/theming";

addons.setConfig({
  theme: create({
    ...themes.light,
    brandTitle: "Chingu Storybook",
    brandUrl: "https://chingu-dashboard.vercel.app/",
    brandImage: "/chingu_logo_light.png",
    brandTarget: "_self",
  }),
});
