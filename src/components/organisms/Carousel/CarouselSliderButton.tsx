import { ComponentProps } from "react"

interface Props extends ComponentProps<'button'> {
  actionName: string
}

const CarouselSliderButton = ({ actionName, ...rest }: Props) => {
  return <button type="button" style={{ color: 'white' }} {...rest}>{actionName}</button>
}

CarouselSliderButton.displayName = "SliderButton"

export { CarouselSliderButton as SliderButton }
