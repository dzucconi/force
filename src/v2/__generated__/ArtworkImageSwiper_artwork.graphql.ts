/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArtworkImageSwiper_artwork = {
    readonly id: string;
    readonly alt: string | null;
    readonly frames: ReadonlyArray<{
        readonly internalID: string | null;
        readonly _1x: {
            readonly url: string | null;
            readonly width: number | null;
            readonly height: number | null;
        } | null;
        readonly _2x: {
            readonly url: string | null;
        } | null;
    } | null> | null;
    readonly " $refType": "ArtworkImageSwiper_artwork";
};
export type ArtworkImageSwiper_artwork$data = ArtworkImageSwiper_artwork;
export type ArtworkImageSwiper_artwork$key = {
    readonly " $data"?: ArtworkImageSwiper_artwork$data;
    readonly " $fragmentRefs": FragmentRefs<"ArtworkImageSwiper_artwork">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Literal",
  "name": "version",
  "value": [
    "normalized",
    "large"
  ]
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "ArtworkImageSwiper_artwork",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": "alt",
      "name": "formattedMetadata",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": "frames",
      "name": "images",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "internalID",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": "_1x",
          "name": "resized",
          "storageKey": "resized(height:400,version:[\"normalized\",\"large\"],width:400)",
          "args": [
            {
              "kind": "Literal",
              "name": "height",
              "value": 400
            },
            (v0/*: any*/),
            {
              "kind": "Literal",
              "name": "width",
              "value": 400
            }
          ],
          "concreteType": "ResizedImageUrl",
          "plural": false,
          "selections": [
            (v1/*: any*/),
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "width",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "height",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": "_2x",
          "name": "resized",
          "storageKey": "resized(height:800,version:[\"normalized\",\"large\"],width:800)",
          "args": [
            {
              "kind": "Literal",
              "name": "height",
              "value": 800
            },
            (v0/*: any*/),
            {
              "kind": "Literal",
              "name": "width",
              "value": 800
            }
          ],
          "concreteType": "ResizedImageUrl",
          "plural": false,
          "selections": [
            (v1/*: any*/)
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = '61314c9c65335a8b51755b0202ddcc3f';
export default node;
