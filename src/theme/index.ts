import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  typography: {
    fontFamily: "Plus Jakarta Sans",
    body2: {
      color: "#1B1B1B",
      letterSpacing: "0.17px",
      fontSize: "14px",
      fontWeight: 400
    }
  },
  palette: {
    primary: {
      light: "#65e9d9",
      main: "#21B6A8",
      dark: "#3D8479"
    },
    error: {
      main: "#e53e3e"
    },
    grey: {
      200: "#EFEFEF"
    }
  }
})
