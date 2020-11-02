import React, { useState } from "react"
import styled from "styled-components"
import { Media } from "v2/Utils/Responsive"
import {
  Box,
  Carousel,
  CarouselCell,
  CarouselRail,
  ProgressDots,
  ResponsiveBox,
  Swiper,
  SwiperCell,
  SwiperRail,
} from "@artsy/palette"
import { createFragmentContainer, graphql } from "react-relay"
import { ArtworkImageBrowser_artwork } from "v2/__generated__/ArtworkImageBrowser_artwork.graphql"
import { Lightbox } from "v2/Components/Lightbox"

const Container = styled(Box)`
  user-select: none;
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

interface ArtworkBrowserProps {
  artwork: ArtworkImageBrowser_artwork
}

export const ArtworkImageBrowser = (props: ArtworkBrowserProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <Media at="xs">
        <SmallArtworkImageBrowser
          {...props}
          onChange={setActiveIndex}
          activeIndex={activeIndex}
        />
      </Media>

      <Media greaterThan="xs">
        <LargeArtworkImageBrowser
          {...props}
          onChange={setActiveIndex}
          activeIndex={activeIndex}
        />
      </Media>
    </>
  )
}

export const ArtworkImageBrowserFragmentContainer = createFragmentContainer(
  ArtworkImageBrowser,
  {
    artwork: graphql`
      fragment ArtworkImageBrowser_artwork on Artwork {
        alt: formattedMetadata
        images {
          internalID
          resized(width: 640, height: 640) {
            src
            srcSet
            width
            height
          }
          isZoomable
          # TODO: Extract into fragment on Lightbox component
          deepZoom {
            Image {
              xmlns
              Url
              Format
              TileSize
              Overlap
              Size {
                Width
                Height
              }
            }
          }
        }
      }
    `,
  }
)

interface LargeArtworkImageBrowserProps extends ArtworkBrowserProps {
  activeIndex: number
  onChange(index: number): void
}

export const LargeArtworkImageBrowser: React.FC<LargeArtworkImageBrowserProps> = ({
  artwork,
  activeIndex,
  onChange,
}) => {
  return (
    <Container>
      <Carousel
        onChange={onChange}
        Cell={React.forwardRef((props, ref) => {
          return (
            <CarouselCell
              {...props}
              ref={ref as any}
              display="inline-flex"
              width="100%"
              flexShrink={0}
              pr={0}
            />
          )
        })}
        Rail={props => {
          return <CarouselRail {...props} transition="none" display="flex" />
        }}
      >
        {artwork.images.map(image => {
          return (
            <Box
              key={image.internalID}
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
              height="60vh"
            >
              <ResponsiveBox
                position="relative"
                mx="auto"
                aspectWidth={image.resized.width}
                aspectHeight={image.resized.height}
                maxHeight={640}
                maxWidth={640}
                bg="black10"
              >
                <Lightbox deepZoom={image.deepZoom} enabled={image.isZoomable}>
                  <Image
                    src={image.resized.src}
                    srcSet={image.resized.srcSet}
                    alt={artwork.alt}
                  />
                </Lightbox>
              </ResponsiveBox>
            </Box>
          )
        })}
      </Carousel>

      {artwork.images.length > 1 && (
        <ProgressDots
          amount={artwork.images.length}
          activeIndex={activeIndex}
          mt={1}
        />
      )}
    </Container>
  )
}

interface SmallArtworkImageBrowserProps extends ArtworkBrowserProps {
  activeIndex: number
  onChange(index: number): void
}

export const SmallArtworkImageBrowser: React.FC<SmallArtworkImageBrowserProps> = ({
  artwork,
  activeIndex,
  onChange,
}) => {
  return (
    <Container>
      <Swiper
        snap="center"
        onChange={onChange}
        Cell={React.forwardRef((props, ref) => {
          return (
            <SwiperCell
              {...props}
              ref={ref as any}
              display="inline-flex"
              width="100%"
              verticalAlign="middle"
              pr={0}
            />
          )
        })}
        Rail={props => {
          return <SwiperRail {...props} display="block" />
        }}
      >
        {artwork.images.map(image => {
          return (
            <Box
              key={image.internalID}
              alignItems="center"
              justifyContent="center"
              width="100%"
              overflow="hidden"
            >
              <ResponsiveBox
                position="relative"
                mx="auto"
                aspectWidth={image.resized.width}
                aspectHeight={image.resized.height}
                maxHeight={640}
                maxWidth={640}
                bg="black10"
              >
                <Image
                  src={image.resized.src}
                  srcSet={image.resized.srcSet}
                  alt={artwork.alt}
                />
              </ResponsiveBox>
            </Box>
          )
        })}
      </Swiper>

      {artwork.images.length > 1 && (
        <ProgressDots
          amount={artwork.images.length}
          activeIndex={activeIndex}
          mt={1}
        />
      )}
    </Container>
  )
}
