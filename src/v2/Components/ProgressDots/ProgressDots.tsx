import { Box, BoxProps, Clickable, color, space } from "@artsy/palette"
import React from "react"
import styled, { css } from "styled-components"

const Dot = styled.div<{ active: boolean }>`
  width: ${space(0.5)}px;
  height: ${space(0.5)}px;
  border-radius: 50%;
  background-color: ${color("black10")};
  transition: background-color 250ms;

  ${({ active }) =>
    active &&
    css`
      background-color: ${color("black100")};
    `}
`

const HitArea = styled(Clickable)`
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
  border: 1px solid transparent;

  &:hover > ${Dot} {
    background-color: ${color("black100")};
  }

  &:focus {
    border-color: ${color("purple100")};
  }
`

export type ProgressDotsProps = {
  index: number
  length: number
  onClick(nextIndex: number): void
} & BoxProps

export const ProgressDots: React.FC<ProgressDotsProps> = ({
  index,
  length,
  onClick,
  ...rest
}) => {
  return (
    <Box {...rest}>
      {[...new Array(length)].map((_, i) => (
        <HitArea
          key={i}
          p={0.5}
          onClick={() => onClick(i)}
          aria-label={`Navigate to ${i + 1}`}
        >
          <Dot active={i === index} />
        </HitArea>
      ))}
    </Box>
  )
}
