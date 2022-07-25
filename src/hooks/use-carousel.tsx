import { MouseEvent, useRef } from "react"


export const useCarousel = ({ data }: { data: [] }) => {
  const positionRef = useRef<number>(0)

  const scrollToTarget = (position: number) => {
    const selector = `.slide:nth-child(${position + 1})`
    const slide = document.querySelector(selector)

    slide.scrollIntoView({
      behavior: "smooth",
      inline: "end",
      block: "nearest",
    })
  }

  const handleNextTarget = (event: MouseEvent) => {
    if (positionRef.current > data.length) return
    positionRef.current++
    scrollToTarget(positionRef.current)
  }

  const handlePreviousTarget = (event: MouseEvent) => {
    if (positionRef.current < 0) return
    positionRef.current--
    scrollToTarget(positionRef.current)
  }

  return {
    handleNextTarget,
    handlePreviousTarget,
    data
  }

}