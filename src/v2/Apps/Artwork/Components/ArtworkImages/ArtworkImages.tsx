import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { ArtworkImages_artwork } from "v2/__generated__/ArtworkImages_artwork.graphql"
import { Snapper } from "v2/Components/Snapper"
import { Box, ResponsiveBox } from "@artsy/palette"
import styled from "styled-components"

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export interface ArtworkImagesProps {
  artwork: ArtworkImages_artwork
}

export const ArtworkImages: React.FC<ArtworkImagesProps> = ({ artwork }) => {
  const maxHeight = Math.max(...artwork.images.map(({ _1x }) => _1x.height))

  return (
    <Snapper>
      {artwork.images.map(({ internalID, _1x, _2x }) => (
        <Box
          key={internalID}
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          height={maxHeight}
        >
          <ResponsiveBox
            position="relative"
            aspectWidth={_1x.width}
            aspectHeight={_1x.height}
            maxWidth={_1x.width}
            maxHeight={maxHeight}
            bg="black10"
          >
            <Image
              src={_1x.url}
              srcSet={`${_1x.url} 1x, ${_2x.url} 2x`}
              alt={artwork.alt}
            />
          </ResponsiveBox>
        </Box>
      ))}
    </Snapper>
  )
}

export const ArtworkImagesFragmentContainer = createFragmentContainer<
  ArtworkImagesProps
>(ArtworkImages, {
  artwork: graphql`
    fragment ArtworkImages_artwork on Artwork {
      id
      alt: formattedMetadata
      images {
        internalID
        _1x: resized(
          width: 700
          height: 700
          version: ["normalized", "large"]
        ) {
          url
          width
          height
        }
        _2x: resized(
          width: 1400
          height: 1400
          version: ["normalized", "large"]
        ) {
          url
        }
      }
    }
  `,
})
