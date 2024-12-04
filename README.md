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
