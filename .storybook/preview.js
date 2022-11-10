import { CssBaseline, ThemeProvider } from "@mui/material"
import { theme } from "../src/theme"
// import("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans&display=swap")

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
)

export const decorators = [withMuiTheme]
