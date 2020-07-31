import { Box, BoxProps, ChevronIcon } from "@artsy/palette"
import React, { Children, useEffect } from "react"
import { useCursor } from "use-cursor"
import { SnapperArrow } from "./SnapperArrow"
import { ProgressDots } from "v2/Components/ProgressDots"

export interface SnapperProps extends BoxProps {
  children: JSX.Element | JSX.Element[]
}

export const Snapper: React.FC<SnapperProps> = ({ children, ...rest }) => {
  const frames = Children.toArray(children)

  const { index, handlePrev, handleNext, setCursor } = useCursor({
    max: frames.length,
  })

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          handlePrev()
          break
        case "ArrowRight":
          handleNext()
          break
        default:
          break
      }
    }

    // TODO: Trap keyboard focus
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleNext, handlePrev])

  return (
    <Box {...rest}>
      <Box display="flex" flexDirection="row">
        <SnapperArrow onClick={handlePrev} aria-label="Previous" left={0}>
          <ChevronIcon
            direction="left"
            width={30}
            height={30}
            aria-hidden="true"
          />
        </SnapperArrow>

        <Box
          mx="auto"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {frames[index]}
        </Box>

        <SnapperArrow onClick={handleNext} aria-label="Next" right={0}>
          <ChevronIcon
            direction="right"
            width={30}
            height={30}
            aria-hidden="true"
          />
        </SnapperArrow>
      </Box>

      <ProgressDots
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={1}
        index={index}
        length={frames.length}
        onClick={setCursor}
      />
    </Box>
  )
}
