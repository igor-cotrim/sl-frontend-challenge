/**
 * @generated SignedSource<<ffd5a7e1462f9d4865bb21b84a8c4e51>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type userQuery$variables = {};
export type userQuery$data = {
  readonly users: ReadonlyArray<{
    readonly avatar: string;
    readonly email: string;
    readonly id: string | null;
    readonly name: string;
    readonly password: string;
    readonly phone: string;
  }>;
};
export type userQuery = {
  response: userQuery$data;
  variables: userQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "phone",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "password",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "avatar",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "userQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "userQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "bd63f9c9d053f38b6dfdab2844f2b044",
    "id": null,
    "metadata": {},
    "name": "userQuery",
    "operationKind": "query",
    "text": "query userQuery {\n  users {\n    id\n    name\n    email\n    phone\n    password\n    avatar\n  }\n}\n"
  }
};
})();

(node as any).hash = "7be1ff8128a551f8b58c77f89ffbab37";

export default node;
