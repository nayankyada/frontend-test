export interface CustomCardProps {
  cardWidth: number
  cardImage: { src: string; alt: string }
  cardTitle: string
  checked?: boolean
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
