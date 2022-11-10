import React from "react"
import { Story } from "@storybook/react"
import CustomCard from "../components/Card"

const cardImage = { src: "/assets/CardMedia.png", alt: "card-media" }

export default {
  title: "Components/Basic/CustomCard",
  component: CustomCard,
  argTypes: {
    cardWidth: { control: "number" },
    cardImage: { control: 'object' },
    cardTitle: { control: "text" },
    checked: { control: "boolean" }
  }
}

const UnSelectedTemplate: Story = (_args) => {
  const [checked, setChecked] = React.useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }
  return <CustomCard cardWidth={229} cardImage={cardImage} cardTitle="Flood zone 3" checked={checked} handleChange={handleChange}/>
}

export const UnSelected = UnSelectedTemplate.bind({})

UnSelectedTemplate.args = { checked: false }

const SelectedTemplate: Story = (_args) => {
  const [checked, setChecked] = React.useState(true)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }
  return <CustomCard cardWidth={229} cardImage={cardImage} cardTitle="Flood zone 3" checked={checked} handleChange={handleChange} />
}
export const Selected = SelectedTemplate.bind({})

Selected.args = { checked: true }
