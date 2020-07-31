import React, { createRef, isValidElement, useRef, useState } from "react"
import styled from "styled-components"
import { SwiperFrame } from "./SwiperFrame"
import { ProgressDots } from "../ProgressDots"
import { Box, BoxProps } from "@artsy/palette"

const Container = styled(Box)`
  position: relative;
  width: 100%;
`

const Rail = styled.div`
  height: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: none;
  /* Disable scrollbar */
  /* IE 10+ */
  -ms-overflow-style: none;
  /* Firefox */
  scrollbar-width: none;
  /* Safari and Chrome */
  &::-webkit-scrollbar {
    display: none;
  }
`

export interface SwiperProps
  extends BoxProps,
    React.HTMLAttributes<HTMLDivElement> {
  onEnter?(index: number): void
  onLeave?(index: number): void
}

export const Swiper: React.FC<SwiperProps> = ({
  children,
  onEnter,
  onLeave,
  ...rest
}) => {
  const frames = React.Children.toArray(children)
    .filter(isValidElement)
    .map(child => ({ child, ref: createRef<HTMLSpanElement>() }))

  const [index, setIndex] = useState(0)

  const railRef = useRef<HTMLDivElement | null>(null)

  const handleEnter = (index: number) => {
    setIndex(index)
    onEnter && onEnter(index)
  }

  const handleLeave = (index: number) => {
    onLeave && onLeave(index)
  }

  const handleClick = (step: number) => {
    if (!railRef.current) return

    const offsetLeft = frames.slice(0, step).reduce((acc, { ref }) => {
      return acc + ref.current.parentElement.offsetWidth
    }, 0)

    railRef.current.scrollLeft = offsetLeft
  }

  return (
    <Container {...rest}>
      <Rail ref={railRef as any}>
        {frames.map((frame, i) => (
          <SwiperFrame
            key={i}
            index={i}
            onEnter={handleEnter}
            onLeave={handleLeave}
          >
            <span ref={frame.ref} />

            {frame.child}
          </SwiperFrame>
        ))}
      </Rail>

      <ProgressDots
        p={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        length={frames.length}
        index={index}
        onClick={handleClick}
      />
    </Container>
  )
}
