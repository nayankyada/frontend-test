import React from "react"
import "./App.css"
import CustomCard from "./components/Card"
import { theme } from "./theme"
import { ThemeProvider } from "@mui/material/styles"

function App() {
  const cardImage = { src: "/assets/CardMedia.png", alt: "card-media" }
  const [checked, setChecked] = React.useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <CustomCard cardWidth={229} cardImage={cardImage} cardTitle="Flood zone 3" handleChange={handleChange} checked={checked} />
      </div>
    </ThemeProvider>
  )
}

export default App
