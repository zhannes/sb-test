import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

//import ThemeExample from "./stories/ThemeExample";
var theme = {
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "white",
          color: "red",
          border: "solid 1px orange"
        }
      }
    }
  }
};
var defaultTheme = createTheme(theme); // or your custom theme

var ThemeProviderComponent = function ThemeProviderComponent(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: defaultTheme
  }, children);
};
function BasicButton(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement(Stack, {
    spacing: 2,
    direction: "row"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outlined"
  }, children));
}
function Test(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/React.createElement(ThemeProviderComponent, null, /*#__PURE__*/React.createElement(BasicButton, null, children));
}

export { BasicButton, Test, ThemeProviderComponent, theme };
