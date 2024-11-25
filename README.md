# chingu-dashboard-components

Components shared across the Chingu Dashboard and related apps

subject to change (just writing stuff now so I don't forget, will make proper documentation later)

All components will go under components folder. Each component should be in it's own subfolder and be exposed though index.ts file
Look at the examples to see exact code needed. It's important to follow it exactly the same

Once that's setup, run this command (requires node version > 16) Make sure to do it at the root level of the project

```
node generate-exports.js
```

This will generate the updated exports object which is important as this will allow the consumer application to use the component
