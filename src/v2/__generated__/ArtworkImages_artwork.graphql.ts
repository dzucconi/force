/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArtworkImages_artwork = {
    readonly id: string;
    readonly alt: string | null;
    readonly images: ReadonlyArray<{
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
    readonly " $refType": "ArtworkImages_artwork";
};
export type ArtworkImages_artwork$data = ArtworkImages_artwork;
export type ArtworkImages_artwork$key = {
    readonly " $data"?: ArtworkImages_artwork$data;
    readonly " $fragmentRefs": FragmentRefs<"ArtworkImages_artwork">;
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
  "name": "ArtworkImages_artwork",
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
      "alias": null,
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
          "storageKey": "resized(height:700,version:[\"normalized\",\"large\"],width:700)",
          "args": [
            {
              "kind": "Literal",
              "name": "height",
              "value": 700
            },
            (v0/*: any*/),
            {
              "kind": "Literal",
              "name": "width",
              "value": 700
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
          "storageKey": "resized(height:1400,version:[\"normalized\",\"large\"],width:1400)",
          "args": [
            {
              "kind": "Literal",
              "name": "height",
              "value": 1400
            },
            (v0/*: any*/),
            {
              "kind": "Literal",
              "name": "width",
              "value": 1400
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
(node as any).hash = '58f2f9a730bb4c13d416346198acf85f';
export default node;
