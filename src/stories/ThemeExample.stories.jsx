import React from "react";

import { BasicButton as ThemeExample } from "../index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ThemeExample",
  component: ThemeExample,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: "select" },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ThemeExample {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "test",
  variant: "outlined",
};
export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};
