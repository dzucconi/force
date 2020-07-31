import React from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { useUpdateEffect } from "v2/Utils/Hooks/useUpdateEffect"

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
`

export interface SwiperFrameProps {
  index: number
  onEnter(index: number): void
  onLeave(index: number): void
}

export const SwiperFrame: React.FC<SwiperFrameProps> = ({
  index,
  children,
  onEnter,
  onLeave,
}) => {
  const [ref, inView] = useInView({ threshold: 0.5 })

  useUpdateEffect(() => {
    inView ? onEnter(index) : onLeave(index)
  }, [inView, onEnter, onLeave, index])

  return <Container ref={ref as any}>{children}</Container>
}
