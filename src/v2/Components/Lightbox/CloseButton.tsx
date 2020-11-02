import { Clickable, ClickableProps, color, space } from "@artsy/palette"
import React from "react"
import styled from "styled-components"

const Icon = styled.svg`
  width: ${space(6)}px;
  height: ${space(6)}px;
  padding: ${space(3) / 2}px;
  stroke: ${color("white100")};
  stroke-width: 3px;
  overflow: visible;
`

export interface CloseButtonProps extends ClickableProps {}

export const CloseButton: React.FC<CloseButtonProps> = props => (
  <Clickable {...props}>
    <Icon>
      <line x1="0%" y1="0%" x2="100%" y2="100%" />
      <line x1="0%" y1="100%" x2="100%" y2="0%" />
    </Icon>
  </Clickable>
)
