# chingu-dashboard-components

Components shared across the Chingu Dashboard and related apps

subject to change (just writing stuff now so I don't forget, will make proper documentation later)

All components will go under components folder. Each component should be in it's own subfolder and be exposed though index.ts file
Look at the examples to see exact code needed. It's important to follow it exactly the same

requires node version > 16

Package is setup with semenatic-release for automatic versioning management: https://github.com/semantic-release/semantic-release

TLDR:

Commit messages are important

"fix: your message" <- to trigger patch verion bump

"feat: your message" <- to trigger minor version bump

"BREAKING CHANGE: your message" <- to trigger major version bump (im not sure if it actually needs to be in all caps. Will find out later)

Tailwind is required to run this package properly. Make sure the initial setup is configured properly in the consumer application.

As of now, the following versions of peer dependencies are supported (meaning the version of the dependency in the consumer app)

```
React: v18 (any minor and patch version)
Tailwind v3 (any minor and patch version)
```

In tailwind.config file, add this code. Exact structure of the config might be different. Adjust as needed

```
import customTheme from "@chingu-x/components/tailwind-config";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [customTheme], <- add this line
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

In the app entry file, add this line

```
import "@chingu-x/components/styles";
```
