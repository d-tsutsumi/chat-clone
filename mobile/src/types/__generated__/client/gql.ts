/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query getRoomDetailInfo($roomId: uuid!) {\n  rooms_by_pk(id: $roomId) {\n    create_at\n    id\n    name\n  }\n  user_join_tables_rooms(where: {roomsId: {_eq: $roomId}}) {\n    user {\n      user_name\n      id\n    }\n  }\n  user_join_tables_rooms_aggregate(where: {roomsId: {_eq: $roomId}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.GetRoomDetailInfoDocument,
    "query getRoomsByUserId($userId: uuid!) {\n  user_join_tables_rooms(where: {userId: {_eq: $userId}}) {\n    room {\n      name\n      id\n    }\n  }\n}": types.GetRoomsByUserIdDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getRoomDetailInfo($roomId: uuid!) {\n  rooms_by_pk(id: $roomId) {\n    create_at\n    id\n    name\n  }\n  user_join_tables_rooms(where: {roomsId: {_eq: $roomId}}) {\n    user {\n      user_name\n      id\n    }\n  }\n  user_join_tables_rooms_aggregate(where: {roomsId: {_eq: $roomId}}) {\n    aggregate {\n      count\n    }\n  }\n}"): (typeof documents)["query getRoomDetailInfo($roomId: uuid!) {\n  rooms_by_pk(id: $roomId) {\n    create_at\n    id\n    name\n  }\n  user_join_tables_rooms(where: {roomsId: {_eq: $roomId}}) {\n    user {\n      user_name\n      id\n    }\n  }\n  user_join_tables_rooms_aggregate(where: {roomsId: {_eq: $roomId}}) {\n    aggregate {\n      count\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getRoomsByUserId($userId: uuid!) {\n  user_join_tables_rooms(where: {userId: {_eq: $userId}}) {\n    room {\n      name\n      id\n    }\n  }\n}"): (typeof documents)["query getRoomsByUserId($userId: uuid!) {\n  user_join_tables_rooms(where: {userId: {_eq: $userId}}) {\n    room {\n      name\n      id\n    }\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;