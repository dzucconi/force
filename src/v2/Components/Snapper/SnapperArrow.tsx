import styled from "styled-components"
import { Clickable, color } from "@artsy/palette"

export const SnapperArrow = styled(Clickable).attrs({
  px: 1,
  py: 4,
})`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  > svg {
    fill: ${color("black10")};
    transition: fill 250ms;
  }

  &:hover,
  &:focus {
    > svg {
      fill: ${color("black100")};
    }
  }

  &:focus {
    z-index: 1;
  }
`
