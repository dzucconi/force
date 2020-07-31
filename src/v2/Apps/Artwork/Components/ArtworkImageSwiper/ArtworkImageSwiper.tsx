import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { ArtworkImageSwiper_artwork } from "v2/__generated__/ArtworkImageSwiper_artwork.graphql"
import { Swiper } from "v2/Components/Swiper"
import styled from "styled-components"
import { ResponsiveBox } from "@artsy/palette"

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

interface ArtworkImageSwiperProps {
  artwork: ArtworkImageSwiper_artwork
}

export const ArtworkImageSwiper: React.FC<ArtworkImageSwiperProps> = ({
  artwork,
}) => {
  return (
    <Swiper>
      {artwork.frames.map(({ internalID, _1x, _2x }) => (
        <ResponsiveBox
          key={internalID}
          position="relative"
          aspectWidth={_1x.width}
          aspectHeight={_1x.height}
          maxWidth={_1x.width}
          maxHeight={_1x.height}
          bg="black10"
        >
          <Image
            src={_1x.url}
            srcSet={`${_1x.url} 1x, ${_2x.url} 2x`}
            alt={artwork.alt}
          />
        </ResponsiveBox>
      ))}
    </Swiper>
  )
}

export const ArtworkImageSwiperFragmentContainer = createFragmentContainer<
  ArtworkImageSwiperProps
>(ArtworkImageSwiper, {
  artwork: graphql`
    fragment ArtworkImageSwiper_artwork on Artwork {
      id
      alt: formattedMetadata
      frames: images {
        internalID
        _1x: resized(
          width: 400
          height: 400
          version: ["normalized", "large"]
        ) {
          url
          width
          height
        }
        _2x: resized(
          width: 800
          height: 800
          version: ["normalized", "large"]
        ) {
          url
        }
      }
    }
  `,
})
