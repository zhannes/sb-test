import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";

import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const theme = {
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "grey",
          color: "black",
          border: "solid 1px orange",
        },
      },
    },
  },
};
const defaultTheme = createTheme(theme); // or your custom theme

export const ThemeProviderComponent = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export const SharedThemeProvider = ThemeProvider;
export const sharedCreateTheme = createTheme;

export function BasicButton({ children, ...props }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" {...props}>
        {children}
      </Button>
    </Stack>
  );
}

export function Test({ children }) {
  return (
    <ThemeProviderComponent>
      <BasicButton>{children}</BasicButton>
    </ThemeProviderComponent>
  );
}
