// module.exports = {
//   stories: ["../src/**/*.stories.mdx", "../src/**/*/.stories.@(js|jsx|ts|tsx)"],
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-interactions",
//     "@storybook/preset-create-react-app",
//   ],
//   framework: "@storybook/react",
//   core: {
//     builder: "webpack5",
//   },
// };

// .storybook/main.js

const path = require("path");
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
  //  stories: ["../src.stories.mdx", "../src.stories.@(js|jsx|ts|tsx)"],
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.jsx"],
  //"../src/**/*/.stories.@(js|jsx|ts|tsx)"

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },

  webpackFinal: async (config) => {
    // console.log(">>", config.resolve.alias);
    // delete config.resolve.alias["core-js"];
    // return config;
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    };
  },
};