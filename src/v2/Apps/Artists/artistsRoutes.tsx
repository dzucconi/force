import loadable from "@loadable/component"
import { graphql } from "react-relay"
import { RouteConfig } from "found"

const ArtistsApp = loadable(() => import("./ArtistsApp"), {
  resolveComponent: component => component.ArtistsApp,
})

const ArtistsIndexRoute = loadable(() => import("./Routes/ArtistsIndex"), {
  resolveComponent: component => component.ArtistsIndexFragmentContainer,
})

const ArtistsByLetterRoute = loadable(
  () => import("./Routes/ArtistsByLetter"),
  {
    resolveComponent: component => component.ArtistsByLetterFragmentContainer,
  }
)

export const artistsRoutes: RouteConfig[] = [
  {
    children: [
      {
        getComponent: () => ArtistsIndexRoute,
        path: "",
        prepare: () => {
          return ArtistsIndexRoute.preload()
        },
        query: graphql`
          query artistsRoutes_ArtistsQuery {
            featuredArtists: orderedSets(key: "homepage:featured-artists") {
              ...ArtistsIndex_featuredArtists
            }
            featuredGenes: orderedSets(key: "artists:featured-genes") {
              ...ArtistsIndex_featuredGenes
            }
          }
        `,
      },

      {
        getComponent: () => ArtistsByLetterRoute,
        path: "artists-starting-with-:letter",
        prepare: () => {
          return ArtistsByLetterRoute.preload()
        },
        prepareVariables: (params, props) => {
          return {
            ...params,
            ...props,
            first: 100,
          }
        },
        query: graphql`
          query artistsRoutes_ArtistsByLetterQuery(
            $letter: String!
            $first: Int
            $after: String
          ) {
            viewer {
              ...ArtistsByLetter_viewer
                @arguments(letter: $letter, first: $first, after: $after)
            }
          }
        `,
      },
    ],
    getComponent: () => ArtistsApp,
    path: "/artists2",
    prepare: () => {
      return ArtistsApp.preload()
    },
  },
]
