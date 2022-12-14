import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import Checkbox from "@mui/material/Checkbox"
import { makeStyles } from "@mui/styles"
import { Theme } from "@mui/material/styles"
import { CustomCardProps } from "./Card"

const useStyles = makeStyles<Theme, CustomCardProps>((theme: Theme) => ({
  card: (props: CustomCardProps) => ({
    background: theme.palette.common.white,
    border: props.checked ? `1px solid ${theme.palette.primary.dark}` : `1px solid ${theme.palette.grey[200]}`,
    borderRadius: "10px",
    boxSizing: "border-box",
    boxShadow: props.checked ? `0px 0px 0px 2px ${theme.palette.primary.light}` : "none",
    "&:hover": {
      boxShadow: `0px 0px 0px 2px ${theme.palette.primary.light}`,
      border: props.checked ? `1px solid ${theme.palette.primary.dark}` : `none`
    }
  }),
  content: {
    display: "flex",
    alignItems: "center",
    padding: "15px 18px",
    boxSizing: "border-box",
    "&:last-child": {
      paddingBottom: "15px",
    }
  }
}))

export default function CustomCard(props: CustomCardProps) {
  const { cardWidth = 300, cardImage, checked, handleChange } = props
  const classes = useStyles(props)

  return (
    <Card sx={{ maxWidth: cardWidth }} className={classes.card}>
      <CardMedia component="img" height="100" width="229" image={cardImage.src} alt={cardImage.alt} />
      <CardContent className={classes.content}>
        <Checkbox
          color="primary"
          disableRipple
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled-checkbox" }}
          style={{ paddingRight: "10.25px" }}
        />
        <Typography component="div" variant="body2">
          {props.cardTitle}
        </Typography>
      </CardContent>
    </Card>
  )
}
