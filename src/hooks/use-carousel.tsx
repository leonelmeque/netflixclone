import { MouseEvent, useRef } from "react"

export const useCarousel = (data: any[]) => {
  const positionRef = useRef<number>(0)

  const scrollToTarget = (parent: Element, slidePosition: number) => {
    const selector = `.slide-${slidePosition}`
    parent.querySelector(selector).scrollIntoView({
      behavior: "smooth",block:'nearest', inline:'start'
      
    })
  }

  const handleNextTarget = (event?: MouseEvent) => {
    const { currentTarget } = event
    const { offsetParent } = currentTarget as HTMLButtonElement

    if (positionRef.current >= data.length-1) positionRef.current = 0
    else positionRef.current++
    scrollToTarget(offsetParent, positionRef.current)
  }

  const handlePreviousTarget = (event?: MouseEvent) => {
    const { currentTarget } = event
    const { offsetParent } = currentTarget as HTMLButtonElement

    if (positionRef.current <= 0) return
    positionRef.current--
    scrollToTarget(offsetParent, positionRef.current)
  }

  return {
    handleNextTarget,
    handlePreviousTarget
  }
}
