/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RequestConditionReportQueriesUnauthenticatedQueryVariables = {
    artworkID: string;
};
export type RequestConditionReportQueriesUnauthenticatedQueryResponse = {
    readonly me: {
        readonly " $fragmentRefs": FragmentRefs<"RequestConditionReport_me">;
    } | null;
    readonly artwork: {
        readonly " $fragmentRefs": FragmentRefs<"RequestConditionReport_artwork">;
    } | null;
};
export type RequestConditionReportQueriesUnauthenticatedQuery = {
    readonly response: RequestConditionReportQueriesUnauthenticatedQueryResponse;
    readonly variables: RequestConditionReportQueriesUnauthenticatedQueryVariables;
};



/*
query RequestConditionReportQueriesUnauthenticatedQuery(
  $artworkID: String!
) {
  me {
    ...RequestConditionReport_me
    id
  }
  artwork(id: $artworkID) {
    ...RequestConditionReport_artwork
    id
  }
}

fragment RequestConditionReport_artwork on Artwork {
  internalID
  slug
  saleArtwork {
    internalID
    id
  }
}

fragment RequestConditionReport_me on Me {
  email
  internalID
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "artworkID",
    "type": "String!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artworkID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RequestConditionReportQueriesUnauthenticatedQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RequestConditionReport_me"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RequestConditionReport_artwork"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RequestConditionReportQueriesUnauthenticatedQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "slug",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "SaleArtwork",
            "kind": "LinkedField",
            "name": "saleArtwork",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "RequestConditionReportQueriesUnauthenticatedQuery",
    "operationKind": "query",
    "text": "query RequestConditionReportQueriesUnauthenticatedQuery(\n  $artworkID: String!\n) {\n  me {\n    ...RequestConditionReport_me\n    id\n  }\n  artwork(id: $artworkID) {\n    ...RequestConditionReport_artwork\n    id\n  }\n}\n\nfragment RequestConditionReport_artwork on Artwork {\n  internalID\n  slug\n  saleArtwork {\n    internalID\n    id\n  }\n}\n\nfragment RequestConditionReport_me on Me {\n  email\n  internalID\n}\n"
  }
};
})();
(node as any).hash = '0b17b864ad2765e066a13bacb332af98';
export default node;
