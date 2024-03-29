/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: any; output: any; }
  uuid: { input: string; output: string; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type CreateRoomDto = {
  roomName: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Organization */
export type SchemaOrganization = {
  __typename?: 'SchemaOrganization';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type SchemaRooms = {
  __typename?: 'SchemaRooms';
  create_at: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organization: SchemaOrganization;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "messages" */
export type Messages = {
  __typename?: 'messages';
  /** 作成日時 */
  create_at: Scalars['date']['output'];
  /** メッセージID */
  id: Scalars['Int']['output'];
  /** メッセージ */
  message?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  room?: Maybe<Rooms>;
  /** ルームid */
  room_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  user?: Maybe<User>;
  /** ユーザーId */
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "messages" */
export type Messages_Aggregate = {
  __typename?: 'messages_aggregate';
  aggregate?: Maybe<Messages_Aggregate_Fields>;
  nodes: Array<Messages>;
};

export type Messages_Aggregate_Bool_Exp = {
  count?: InputMaybe<Messages_Aggregate_Bool_Exp_Count>;
};

export type Messages_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Messages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Messages_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "messages" */
export type Messages_Aggregate_Fields = {
  __typename?: 'messages_aggregate_fields';
  avg?: Maybe<Messages_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Messages_Max_Fields>;
  min?: Maybe<Messages_Min_Fields>;
  stddev?: Maybe<Messages_Stddev_Fields>;
  stddev_pop?: Maybe<Messages_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Messages_Stddev_Samp_Fields>;
  sum?: Maybe<Messages_Sum_Fields>;
  var_pop?: Maybe<Messages_Var_Pop_Fields>;
  var_samp?: Maybe<Messages_Var_Samp_Fields>;
  variance?: Maybe<Messages_Variance_Fields>;
};


/** aggregate fields of "messages" */
export type Messages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Messages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "messages" */
export type Messages_Aggregate_Order_By = {
  avg?: InputMaybe<Messages_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Messages_Max_Order_By>;
  min?: InputMaybe<Messages_Min_Order_By>;
  stddev?: InputMaybe<Messages_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Messages_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Messages_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Messages_Sum_Order_By>;
  var_pop?: InputMaybe<Messages_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Messages_Var_Samp_Order_By>;
  variance?: InputMaybe<Messages_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "messages" */
export type Messages_Arr_Rel_Insert_Input = {
  data: Array<Messages_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Messages_On_Conflict>;
};

/** aggregate avg on columns */
export type Messages_Avg_Fields = {
  __typename?: 'messages_avg_fields';
  /** メッセージID */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "messages" */
export type Messages_Avg_Order_By = {
  /** メッセージID */
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'. */
export type Messages_Bool_Exp = {
  _and?: InputMaybe<Array<Messages_Bool_Exp>>;
  _not?: InputMaybe<Messages_Bool_Exp>;
  _or?: InputMaybe<Array<Messages_Bool_Exp>>;
  create_at?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  room?: InputMaybe<Rooms_Bool_Exp>;
  room_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "messages" */
export enum Messages_Constraint {
  /** unique or primary key constraint on columns "id" */
  Pk_18325f38ae6de43878487eff986 = 'PK_18325f38ae6de43878487eff986'
}

/** input type for incrementing numeric columns in table "messages" */
export type Messages_Inc_Input = {
  /** メッセージID */
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "messages" */
export type Messages_Insert_Input = {
  /** 作成日時 */
  create_at?: InputMaybe<Scalars['date']['input']>;
  /** メッセージID */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** メッセージ */
  message?: InputMaybe<Scalars['String']['input']>;
  room?: InputMaybe<Rooms_Obj_Rel_Insert_Input>;
  /** ルームid */
  room_id?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  /** ユーザーId */
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Messages_Max_Fields = {
  __typename?: 'messages_max_fields';
  /** 作成日時 */
  create_at?: Maybe<Scalars['date']['output']>;
  /** メッセージID */
  id?: Maybe<Scalars['Int']['output']>;
  /** メッセージ */
  message?: Maybe<Scalars['String']['output']>;
  /** ルームid */
  room_id?: Maybe<Scalars['uuid']['output']>;
  /** ユーザーId */
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "messages" */
export type Messages_Max_Order_By = {
  /** 作成日時 */
  create_at?: InputMaybe<Order_By>;
  /** メッセージID */
  id?: InputMaybe<Order_By>;
  /** メッセージ */
  message?: InputMaybe<Order_By>;
  /** ルームid */
  room_id?: InputMaybe<Order_By>;
  /** ユーザーId */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Messages_Min_Fields = {
  __typename?: 'messages_min_fields';
  /** 作成日時 */
  create_at?: Maybe<Scalars['date']['output']>;
  /** メッセージID */
  id?: Maybe<Scalars['Int']['output']>;
  /** メッセージ */
  message?: Maybe<Scalars['String']['output']>;
  /** ルームid */
  room_id?: Maybe<Scalars['uuid']['output']>;
  /** ユーザーId */
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "messages" */
export type Messages_Min_Order_By = {
  /** 作成日時 */
  create_at?: InputMaybe<Order_By>;
  /** メッセージID */
  id?: InputMaybe<Order_By>;
  /** メッセージ */
  message?: InputMaybe<Order_By>;
  /** ルームid */
  room_id?: InputMaybe<Order_By>;
  /** ユーザーId */
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "messages" */
export type Messages_Mutation_Response = {
  __typename?: 'messages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Messages>;
};

/** on_conflict condition type for table "messages" */
export type Messages_On_Conflict = {
  constraint: Messages_Constraint;
  update_columns?: Array<Messages_Update_Column>;
  where?: InputMaybe<Messages_Bool_Exp>;
};

/** Ordering options when selecting data from "messages". */
export type Messages_Order_By = {
  create_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  room?: InputMaybe<Rooms_Order_By>;
  room_id?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: messages */
export type Messages_Pk_Columns_Input = {
  /** メッセージID */
  id: Scalars['Int']['input'];
};

/** select columns of table "messages" */
export enum Messages_Select_Column {
  /** column name */
  CreateAt = 'create_at',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "messages" */
export type Messages_Set_Input = {
  /** 作成日時 */
  create_at?: InputMaybe<Scalars['date']['input']>;
  /** メッセージID */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** メッセージ */
  message?: InputMaybe<Scalars['String']['input']>;
  /** ルームid */
  room_id?: InputMaybe<Scalars['uuid']['input']>;
  /** ユーザーId */
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Messages_Stddev_Fields = {
  __typename?: 'messages_stddev_fields';
  /** メッセージID */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "messages" */
export type Messages_Stddev_Order_By = {
  /** メッセージID */
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Messages_Stddev_Pop_Fields = {
  __typename?: 'messages_stddev_pop_fields';
  /** メッセージID */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "messages" */
export type Messages_Stddev_Pop_Order_By = {
  /** メッセージID */
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Messages_Stddev_Samp_Fields = {
  __typename?: 'messages_stddev_samp_fields';
  /** メッセージID */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "messages" */
export type Messages_Stddev_Samp_Order_By = {
  /** メッセージID */
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "messages" */
export type Messages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Messages_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Messages_Stream_Cursor_Value_Input = {
  /** 作成日時 */
  create_at?: InputMaybe<Scalars['date']['input']>;
  /** メッセージID */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** メッセージ */
  message?: InputMaybe<Scalars['String']['input']>;
  /** ルームid */
  room_id?: InputMaybe<Scalars['uuid']['input']>;
  /** ユーザーId */
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Messages_Sum_Fields = {
  __typename?: 'messages_sum_fields';
  /** メッセージID */
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "messages" */
export type Messages_Sum_Order_By = {
  /** メッセージID */
  id?: InputMaybe<Order_By>;
};

/** update columns of table "messages" */
export enum Messages_Update_Column {
  /** column name */
  CreateAt = 'create_at',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UserId = 'user_id'
}

export type Messages_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Messages_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Messages_Set_Input>;
  /** filter the rows which have to be updated */
  where: Messages_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Messages_Var_Pop_Fields = {
  __typename?: 'messages_var_pop_fields';
  /** メッセージID */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "messages" */
export type Messages_Var_Pop_Order_By = {
  /** メッセージID */
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Messages_Var_Samp_Fields = {
  __typename?: 'messages_var_samp_fields';
  /** メッセージID */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "messages" */
export type Messages_Var_Samp_Order_By = {
  /** メッセージID */
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Messages_Variance_Fields = {
  __typename?: 'messages_variance_fields';
  /** メッセージID */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "messages" */
export type Messages_Variance_Order_By = {
  /** メッセージID */
  id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  addRoom: SchemaRooms;
  /** delete data from the table: "messages" */
  delete_messages?: Maybe<Messages_Mutation_Response>;
  /** delete single row from the table: "messages" */
  delete_messages_by_pk?: Maybe<Messages>;
  /** delete data from the table: "organization" */
  delete_organization?: Maybe<Organization_Mutation_Response>;
  /** delete single row from the table: "organization" */
  delete_organization_by_pk?: Maybe<Organization>;
  /** delete data from the table: "rooms" */
  delete_rooms?: Maybe<Rooms_Mutation_Response>;
  /** delete single row from the table: "rooms" */
  delete_rooms_by_pk?: Maybe<Rooms>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_join_tables_rooms" */
  delete_user_join_tables_rooms?: Maybe<User_Join_Tables_Rooms_Mutation_Response>;
  /** delete single row from the table: "user_join_tables_rooms" */
  delete_user_join_tables_rooms_by_pk?: Maybe<User_Join_Tables_Rooms>;
  /** delete data from the table: "user_role" */
  delete_user_role?: Maybe<User_Role_Mutation_Response>;
  /** delete single row from the table: "user_role" */
  delete_user_role_by_pk?: Maybe<User_Role>;
  /** insert data into the table: "messages" */
  insert_messages?: Maybe<Messages_Mutation_Response>;
  /** insert a single row into the table: "messages" */
  insert_messages_one?: Maybe<Messages>;
  /** insert data into the table: "organization" */
  insert_organization?: Maybe<Organization_Mutation_Response>;
  /** insert a single row into the table: "organization" */
  insert_organization_one?: Maybe<Organization>;
  /** insert data into the table: "rooms" */
  insert_rooms?: Maybe<Rooms_Mutation_Response>;
  /** insert a single row into the table: "rooms" */
  insert_rooms_one?: Maybe<Rooms>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert data into the table: "user_join_tables_rooms" */
  insert_user_join_tables_rooms?: Maybe<User_Join_Tables_Rooms_Mutation_Response>;
  /** insert a single row into the table: "user_join_tables_rooms" */
  insert_user_join_tables_rooms_one?: Maybe<User_Join_Tables_Rooms>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "user_role" */
  insert_user_role?: Maybe<User_Role_Mutation_Response>;
  /** insert a single row into the table: "user_role" */
  insert_user_role_one?: Maybe<User_Role>;
  /** update data of the table: "messages" */
  update_messages?: Maybe<Messages_Mutation_Response>;
  /** update single row of the table: "messages" */
  update_messages_by_pk?: Maybe<Messages>;
  /** update multiples rows of table: "messages" */
  update_messages_many?: Maybe<Array<Maybe<Messages_Mutation_Response>>>;
  /** update data of the table: "organization" */
  update_organization?: Maybe<Organization_Mutation_Response>;
  /** update single row of the table: "organization" */
  update_organization_by_pk?: Maybe<Organization>;
  /** update multiples rows of table: "organization" */
  update_organization_many?: Maybe<Array<Maybe<Organization_Mutation_Response>>>;
  /** update data of the table: "rooms" */
  update_rooms?: Maybe<Rooms_Mutation_Response>;
  /** update single row of the table: "rooms" */
  update_rooms_by_pk?: Maybe<Rooms>;
  /** update multiples rows of table: "rooms" */
  update_rooms_many?: Maybe<Array<Maybe<Rooms_Mutation_Response>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "user_join_tables_rooms" */
  update_user_join_tables_rooms?: Maybe<User_Join_Tables_Rooms_Mutation_Response>;
  /** update single row of the table: "user_join_tables_rooms" */
  update_user_join_tables_rooms_by_pk?: Maybe<User_Join_Tables_Rooms>;
  /** update multiples rows of table: "user_join_tables_rooms" */
  update_user_join_tables_rooms_many?: Maybe<Array<Maybe<User_Join_Tables_Rooms_Mutation_Response>>>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
  /** update data of the table: "user_role" */
  update_user_role?: Maybe<User_Role_Mutation_Response>;
  /** update single row of the table: "user_role" */
  update_user_role_by_pk?: Maybe<User_Role>;
  /** update multiples rows of table: "user_role" */
  update_user_role_many?: Maybe<Array<Maybe<User_Role_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootAddRoomArgs = {
  CreateRoomDto: CreateRoomDto;
};


/** mutation root */
export type Mutation_RootDelete_MessagesArgs = {
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Messages_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OrganizationArgs = {
  where: Organization_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RoomsArgs = {
  where: Rooms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rooms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_Join_Tables_RoomsArgs = {
  where: User_Join_Tables_Rooms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Join_Tables_Rooms_By_PkArgs = {
  roomsId: Scalars['uuid']['input'];
  userId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_RoleArgs = {
  where: User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Role_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_MessagesArgs = {
  objects: Array<Messages_Insert_Input>;
  on_conflict?: InputMaybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Messages_OneArgs = {
  object: Messages_Insert_Input;
  on_conflict?: InputMaybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrganizationArgs = {
  objects: Array<Organization_Insert_Input>;
  on_conflict?: InputMaybe<Organization_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_OneArgs = {
  object: Organization_Insert_Input;
  on_conflict?: InputMaybe<Organization_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoomsArgs = {
  objects: Array<Rooms_Insert_Input>;
  on_conflict?: InputMaybe<Rooms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rooms_OneArgs = {
  object: Rooms_Insert_Input;
  on_conflict?: InputMaybe<Rooms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Join_Tables_RoomsArgs = {
  objects: Array<User_Join_Tables_Rooms_Insert_Input>;
  on_conflict?: InputMaybe<User_Join_Tables_Rooms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Join_Tables_Rooms_OneArgs = {
  object: User_Join_Tables_Rooms_Insert_Input;
  on_conflict?: InputMaybe<User_Join_Tables_Rooms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_RoleArgs = {
  objects: Array<User_Role_Insert_Input>;
  on_conflict?: InputMaybe<User_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Role_OneArgs = {
  object: User_Role_Insert_Input;
  on_conflict?: InputMaybe<User_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_MessagesArgs = {
  _inc?: InputMaybe<Messages_Inc_Input>;
  _set?: InputMaybe<Messages_Set_Input>;
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Messages_By_PkArgs = {
  _inc?: InputMaybe<Messages_Inc_Input>;
  _set?: InputMaybe<Messages_Set_Input>;
  pk_columns: Messages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Messages_ManyArgs = {
  updates: Array<Messages_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrganizationArgs = {
  _set?: InputMaybe<Organization_Set_Input>;
  where: Organization_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_By_PkArgs = {
  _set?: InputMaybe<Organization_Set_Input>;
  pk_columns: Organization_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_ManyArgs = {
  updates: Array<Organization_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RoomsArgs = {
  _set?: InputMaybe<Rooms_Set_Input>;
  where: Rooms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rooms_By_PkArgs = {
  _set?: InputMaybe<Rooms_Set_Input>;
  pk_columns: Rooms_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rooms_ManyArgs = {
  updates: Array<Rooms_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Join_Tables_RoomsArgs = {
  _set?: InputMaybe<User_Join_Tables_Rooms_Set_Input>;
  where: User_Join_Tables_Rooms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Join_Tables_Rooms_By_PkArgs = {
  _set?: InputMaybe<User_Join_Tables_Rooms_Set_Input>;
  pk_columns: User_Join_Tables_Rooms_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Join_Tables_Rooms_ManyArgs = {
  updates: Array<User_Join_Tables_Rooms_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_RoleArgs = {
  _inc?: InputMaybe<User_Role_Inc_Input>;
  _set?: InputMaybe<User_Role_Set_Input>;
  where: User_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Role_By_PkArgs = {
  _inc?: InputMaybe<User_Role_Inc_Input>;
  _set?: InputMaybe<User_Role_Set_Input>;
  pk_columns: User_Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Role_ManyArgs = {
  updates: Array<User_Role_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "organization" */
export type Organization = {
  __typename?: 'organization';
  /** 組織id */
  id: Scalars['uuid']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  rooms: Array<Rooms>;
  /** An aggregate relationship */
  rooms_aggregate: Rooms_Aggregate;
  /** An array relationship */
  users: Array<User>;
  /** An aggregate relationship */
  users_aggregate: User_Aggregate;
};


/** columns and relationships of "organization" */
export type OrganizationRoomsArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationRooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationUsersArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** aggregated selection of "organization" */
export type Organization_Aggregate = {
  __typename?: 'organization_aggregate';
  aggregate?: Maybe<Organization_Aggregate_Fields>;
  nodes: Array<Organization>;
};

/** aggregate fields of "organization" */
export type Organization_Aggregate_Fields = {
  __typename?: 'organization_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Max_Fields>;
  min?: Maybe<Organization_Min_Fields>;
};


/** aggregate fields of "organization" */
export type Organization_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "organization". All fields are combined with a logical 'AND'. */
export type Organization_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Bool_Exp>>;
  _not?: InputMaybe<Organization_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  rooms?: InputMaybe<Rooms_Bool_Exp>;
  rooms_aggregate?: InputMaybe<Rooms_Aggregate_Bool_Exp>;
  users?: InputMaybe<User_Bool_Exp>;
  users_aggregate?: InputMaybe<User_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "organization" */
export enum Organization_Constraint {
  /** unique or primary key constraint on columns "id" */
  Pk_472c1f99a32def1b0abb219cd67 = 'PK_472c1f99a32def1b0abb219cd67'
}

/** input type for inserting data into table "organization" */
export type Organization_Insert_Input = {
  /** 組織id */
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rooms?: InputMaybe<Rooms_Arr_Rel_Insert_Input>;
  users?: InputMaybe<User_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Organization_Max_Fields = {
  __typename?: 'organization_max_fields';
  /** 組織id */
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Organization_Min_Fields = {
  __typename?: 'organization_min_fields';
  /** 組織id */
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "organization" */
export type Organization_Mutation_Response = {
  __typename?: 'organization_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization>;
};

/** input type for inserting object relation for remote table "organization" */
export type Organization_Obj_Rel_Insert_Input = {
  data: Organization_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_On_Conflict>;
};

/** on_conflict condition type for table "organization" */
export type Organization_On_Conflict = {
  constraint: Organization_Constraint;
  update_columns?: Array<Organization_Update_Column>;
  where?: InputMaybe<Organization_Bool_Exp>;
};

/** Ordering options when selecting data from "organization". */
export type Organization_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  rooms_aggregate?: InputMaybe<Rooms_Aggregate_Order_By>;
  users_aggregate?: InputMaybe<User_Aggregate_Order_By>;
};

/** primary key columns input for table: organization */
export type Organization_Pk_Columns_Input = {
  /** 組織id */
  id: Scalars['uuid']['input'];
};

/** select columns of table "organization" */
export enum Organization_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "organization" */
export type Organization_Set_Input = {
  /** 組織id */
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "organization" */
export type Organization_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Stream_Cursor_Value_Input = {
  /** 組織id */
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "organization" */
export enum Organization_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Organization_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
  room?: Maybe<SchemaRooms>;
  /** An array relationship */
  rooms: Array<Rooms>;
  /** An aggregate relationship */
  rooms_aggregate: Rooms_Aggregate;
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** An array relationship */
  user_join_tables_rooms: Array<User_Join_Tables_Rooms>;
  /** An aggregate relationship */
  user_join_tables_rooms_aggregate: User_Join_Tables_Rooms_Aggregate;
  /** fetch data from the table: "user_join_tables_rooms" using primary key columns */
  user_join_tables_rooms_by_pk?: Maybe<User_Join_Tables_Rooms>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<User_Role>;
};


export type Query_RootMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrganizationArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Query_RootOrganization_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Query_RootOrganization_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRoomsArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Query_RootRooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Query_RootRooms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUser_Join_Tables_RoomsArgs = {
  distinct_on?: InputMaybe<Array<User_Join_Tables_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Join_Tables_Rooms_Order_By>>;
  where?: InputMaybe<User_Join_Tables_Rooms_Bool_Exp>;
};


export type Query_RootUser_Join_Tables_Rooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Join_Tables_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Join_Tables_Rooms_Order_By>>;
  where?: InputMaybe<User_Join_Tables_Rooms_Bool_Exp>;
};


export type Query_RootUser_Join_Tables_Rooms_By_PkArgs = {
  roomsId: Scalars['uuid']['input'];
  userId: Scalars['uuid']['input'];
};


export type Query_RootUser_RoleArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Query_RootUser_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Query_RootUser_Role_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** columns and relationships of "rooms" */
export type Rooms = {
  __typename?: 'rooms';
  /** 作成日時 */
  create_at: Scalars['date']['output'];
  /** ルームid */
  id: Scalars['uuid']['output'];
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  /** ルーム名 */
  name?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  organization?: Maybe<Organization>;
  /** 組織id */
  organization_id?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  user_join_tables_rooms: Array<User_Join_Tables_Rooms>;
  /** An aggregate relationship */
  user_join_tables_rooms_aggregate: User_Join_Tables_Rooms_Aggregate;
};


/** columns and relationships of "rooms" */
export type RoomsMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


/** columns and relationships of "rooms" */
export type RoomsMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


/** columns and relationships of "rooms" */
export type RoomsUser_Join_Tables_RoomsArgs = {
  distinct_on?: InputMaybe<Array<User_Join_Tables_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Join_Tables_Rooms_Order_By>>;
  where?: InputMaybe<User_Join_Tables_Rooms_Bool_Exp>;
};


/** columns and relationships of "rooms" */
export type RoomsUser_Join_Tables_Rooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Join_Tables_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Join_Tables_Rooms_Order_By>>;
  where?: InputMaybe<User_Join_Tables_Rooms_Bool_Exp>;
};

/** aggregated selection of "rooms" */
export type Rooms_Aggregate = {
  __typename?: 'rooms_aggregate';
  aggregate?: Maybe<Rooms_Aggregate_Fields>;
  nodes: Array<Rooms>;
};

export type Rooms_Aggregate_Bool_Exp = {
  count?: InputMaybe<Rooms_Aggregate_Bool_Exp_Count>;
};

export type Rooms_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Rooms_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Rooms_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "rooms" */
export type Rooms_Aggregate_Fields = {
  __typename?: 'rooms_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Rooms_Max_Fields>;
  min?: Maybe<Rooms_Min_Fields>;
};


/** aggregate fields of "rooms" */
export type Rooms_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rooms_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "rooms" */
export type Rooms_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rooms_Max_Order_By>;
  min?: InputMaybe<Rooms_Min_Order_By>;
};

/** input type for inserting array relation for remote table "rooms" */
export type Rooms_Arr_Rel_Insert_Input = {
  data: Array<Rooms_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rooms_On_Conflict>;
};

/** Boolean expression to filter rows from the table "rooms". All fields are combined with a logical 'AND'. */
export type Rooms_Bool_Exp = {
  _and?: InputMaybe<Array<Rooms_Bool_Exp>>;
  _not?: InputMaybe<Rooms_Bool_Exp>;
  _or?: InputMaybe<Array<Rooms_Bool_Exp>>;
  create_at?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  messages?: InputMaybe<Messages_Bool_Exp>;
  messages_aggregate?: InputMaybe<Messages_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organization?: InputMaybe<Organization_Bool_Exp>;
  organization_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_join_tables_rooms?: InputMaybe<User_Join_Tables_Rooms_Bool_Exp>;
  user_join_tables_rooms_aggregate?: InputMaybe<User_Join_Tables_Rooms_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "rooms" */
export enum Rooms_Constraint {
  /** unique or primary key constraint on columns "id" */
  Pk_0368a2d7c215f2d0458a54933f2 = 'PK_0368a2d7c215f2d0458a54933f2'
}

/** input type for inserting data into table "rooms" */
export type Rooms_Insert_Input = {
  /** 作成日時 */
  create_at?: InputMaybe<Scalars['date']['input']>;
  /** ルームid */
  id?: InputMaybe<Scalars['uuid']['input']>;
  messages?: InputMaybe<Messages_Arr_Rel_Insert_Input>;
  /** ルーム名 */
  name?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  /** 組織id */
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  user_join_tables_rooms?: InputMaybe<User_Join_Tables_Rooms_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Rooms_Max_Fields = {
  __typename?: 'rooms_max_fields';
  /** 作成日時 */
  create_at?: Maybe<Scalars['date']['output']>;
  /** ルームid */
  id?: Maybe<Scalars['uuid']['output']>;
  /** ルーム名 */
  name?: Maybe<Scalars['String']['output']>;
  /** 組織id */
  organization_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "rooms" */
export type Rooms_Max_Order_By = {
  /** 作成日時 */
  create_at?: InputMaybe<Order_By>;
  /** ルームid */
  id?: InputMaybe<Order_By>;
  /** ルーム名 */
  name?: InputMaybe<Order_By>;
  /** 組織id */
  organization_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rooms_Min_Fields = {
  __typename?: 'rooms_min_fields';
  /** 作成日時 */
  create_at?: Maybe<Scalars['date']['output']>;
  /** ルームid */
  id?: Maybe<Scalars['uuid']['output']>;
  /** ルーム名 */
  name?: Maybe<Scalars['String']['output']>;
  /** 組織id */
  organization_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "rooms" */
export type Rooms_Min_Order_By = {
  /** 作成日時 */
  create_at?: InputMaybe<Order_By>;
  /** ルームid */
  id?: InputMaybe<Order_By>;
  /** ルーム名 */
  name?: InputMaybe<Order_By>;
  /** 組織id */
  organization_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rooms" */
export type Rooms_Mutation_Response = {
  __typename?: 'rooms_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rooms>;
};

/** input type for inserting object relation for remote table "rooms" */
export type Rooms_Obj_Rel_Insert_Input = {
  data: Rooms_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Rooms_On_Conflict>;
};

/** on_conflict condition type for table "rooms" */
export type Rooms_On_Conflict = {
  constraint: Rooms_Constraint;
  update_columns?: Array<Rooms_Update_Column>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};

/** Ordering options when selecting data from "rooms". */
export type Rooms_Order_By = {
  create_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  messages_aggregate?: InputMaybe<Messages_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organization_Order_By>;
  organization_id?: InputMaybe<Order_By>;
  user_join_tables_rooms_aggregate?: InputMaybe<User_Join_Tables_Rooms_Aggregate_Order_By>;
};

/** primary key columns input for table: rooms */
export type Rooms_Pk_Columns_Input = {
  /** ルームid */
  id: Scalars['uuid']['input'];
};

/** select columns of table "rooms" */
export enum Rooms_Select_Column {
  /** column name */
  CreateAt = 'create_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organization_id'
}

/** input type for updating data in table "rooms" */
export type Rooms_Set_Input = {
  /** 作成日時 */
  create_at?: InputMaybe<Scalars['date']['input']>;
  /** ルームid */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** ルーム名 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 組織id */
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "rooms" */
export type Rooms_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rooms_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rooms_Stream_Cursor_Value_Input = {
  /** 作成日時 */
  create_at?: InputMaybe<Scalars['date']['input']>;
  /** ルームid */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** ルーム名 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 組織id */
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "rooms" */
export enum Rooms_Update_Column {
  /** column name */
  CreateAt = 'create_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organization_id'
}

export type Rooms_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rooms_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rooms_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table in a streaming manner: "messages" */
  messages_stream: Array<Messages>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table in a streaming manner: "organization" */
  organization_stream: Array<Organization>;
  /** An array relationship */
  rooms: Array<Rooms>;
  /** An aggregate relationship */
  rooms_aggregate: Rooms_Aggregate;
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>;
  /** fetch data from the table in a streaming manner: "rooms" */
  rooms_stream: Array<Rooms>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** An array relationship */
  user_join_tables_rooms: Array<User_Join_Tables_Rooms>;
  /** An aggregate relationship */
  user_join_tables_rooms_aggregate: User_Join_Tables_Rooms_Aggregate;
  /** fetch data from the table: "user_join_tables_rooms" using primary key columns */
  user_join_tables_rooms_by_pk?: Maybe<User_Join_Tables_Rooms>;
  /** fetch data from the table in a streaming manner: "user_join_tables_rooms" */
  user_join_tables_rooms_stream: Array<User_Join_Tables_Rooms>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<User_Role>;
  /** fetch data from the table in a streaming manner: "user_role" */
  user_role_stream: Array<User_Role>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
};


export type Subscription_RootMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootMessages_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Messages_Stream_Cursor_Input>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootOrganizationArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootOrganization_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootOrganization_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrganization_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootRoomsArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Subscription_RootRooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Subscription_RootRooms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRooms_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rooms_Stream_Cursor_Input>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Join_Tables_RoomsArgs = {
  distinct_on?: InputMaybe<Array<User_Join_Tables_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Join_Tables_Rooms_Order_By>>;
  where?: InputMaybe<User_Join_Tables_Rooms_Bool_Exp>;
};


export type Subscription_RootUser_Join_Tables_Rooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Join_Tables_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Join_Tables_Rooms_Order_By>>;
  where?: InputMaybe<User_Join_Tables_Rooms_Bool_Exp>;
};


export type Subscription_RootUser_Join_Tables_Rooms_By_PkArgs = {
  roomsId: Scalars['uuid']['input'];
  userId: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Join_Tables_Rooms_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Join_Tables_Rooms_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Join_Tables_Rooms_Bool_Exp>;
};


export type Subscription_RootUser_RoleArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUser_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUser_Role_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootUser_Role_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Role_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  /** ユーザーId */
  id: Scalars['uuid']['output'];
  /** 参加日時 */
  join_at: Scalars['date']['output'];
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  /** An object relationship */
  organization?: Maybe<Organization>;
  /** 組織id */
  organization_id?: Maybe<Scalars['uuid']['output']>;
  /** プッシュ通知 */
  push_flag: Scalars['Boolean']['output'];
  /** ロールid */
  role_id?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  user_join_tables_rooms: Array<User_Join_Tables_Rooms>;
  /** An aggregate relationship */
  user_join_tables_rooms_aggregate: User_Join_Tables_Rooms_Aggregate;
  /** ユーザー名 */
  user_name: Scalars['String']['output'];
  /** An object relationship */
  user_role?: Maybe<User_Role>;
};


/** columns and relationships of "user" */
export type UserMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Join_Tables_RoomsArgs = {
  distinct_on?: InputMaybe<Array<User_Join_Tables_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Join_Tables_Rooms_Order_By>>;
  where?: InputMaybe<User_Join_Tables_Rooms_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Join_Tables_Rooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Join_Tables_Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Join_Tables_Rooms_Order_By>>;
  where?: InputMaybe<User_Join_Tables_Rooms_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

export type User_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<User_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<User_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<User_Aggregate_Bool_Exp_Count>;
};

export type User_Aggregate_Bool_Exp_Bool_And = {
  arguments: User_Select_Column_User_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_Aggregate_Bool_Exp_Bool_Or = {
  arguments: User_Select_Column_User_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  avg?: InputMaybe<User_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Max_Order_By>;
  min?: InputMaybe<User_Min_Order_By>;
  stddev?: InputMaybe<User_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Sum_Order_By>;
  var_pop?: InputMaybe<User_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  /** ロールid */
  role_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user" */
export type User_Avg_Order_By = {
  /** ロールid */
  role_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  join_at?: InputMaybe<Date_Comparison_Exp>;
  messages?: InputMaybe<Messages_Bool_Exp>;
  messages_aggregate?: InputMaybe<Messages_Aggregate_Bool_Exp>;
  organization?: InputMaybe<Organization_Bool_Exp>;
  organization_id?: InputMaybe<Uuid_Comparison_Exp>;
  push_flag?: InputMaybe<Boolean_Comparison_Exp>;
  role_id?: InputMaybe<Int_Comparison_Exp>;
  user_join_tables_rooms?: InputMaybe<User_Join_Tables_Rooms_Bool_Exp>;
  user_join_tables_rooms_aggregate?: InputMaybe<User_Join_Tables_Rooms_Aggregate_Bool_Exp>;
  user_name?: InputMaybe<String_Comparison_Exp>;
  user_role?: InputMaybe<User_Role_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "id" */
  PkCace4a159ff9f2512dd42373760 = 'PK_cace4a159ff9f2512dd42373760'
}

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  /** ロールid */
  role_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  /** ユーザーId */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 参加日時 */
  join_at?: InputMaybe<Scalars['date']['input']>;
  messages?: InputMaybe<Messages_Arr_Rel_Insert_Input>;
  organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  /** 組織id */
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  /** プッシュ通知 */
  push_flag?: InputMaybe<Scalars['Boolean']['input']>;
  /** ロールid */
  role_id?: InputMaybe<Scalars['Int']['input']>;
  user_join_tables_rooms?: InputMaybe<User_Join_Tables_Rooms_Arr_Rel_Insert_Input>;
  /** ユーザー名 */
  user_name?: InputMaybe<Scalars['String']['input']>;
  user_role?: InputMaybe<User_Role_Obj_Rel_Insert_Input>;
};

/** columns and relationships of "user_join_tables_rooms" */
export type User_Join_Tables_Rooms = {
  __typename?: 'user_join_tables_rooms';
  /** An object relationship */
  room: Rooms;
  roomsId: Scalars['uuid']['output'];
  /** An object relationship */
  user: User;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "user_join_tables_rooms" */
export type User_Join_Tables_Rooms_Aggregate = {
  __typename?: 'user_join_tables_rooms_aggregate';
  aggregate?: Maybe<User_Join_Tables_Rooms_Aggregate_Fields>;
  nodes: Array<User_Join_Tables_Rooms>;
};

export type User_Join_Tables_Rooms_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Join_Tables_Rooms_Aggregate_Bool_Exp_Count>;
};

export type User_Join_Tables_Rooms_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Join_Tables_Rooms_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Join_Tables_Rooms_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_join_tables_rooms" */
export type User_Join_Tables_Rooms_Aggregate_Fields = {
  __typename?: 'user_join_tables_rooms_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<User_Join_Tables_Rooms_Max_Fields>;
  min?: Maybe<User_Join_Tables_Rooms_Min_Fields>;
};


/** aggregate fields of "user_join_tables_rooms" */
export type User_Join_Tables_Rooms_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Join_Tables_Rooms_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_join_tables_rooms" */
export type User_Join_Tables_Rooms_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Join_Tables_Rooms_Max_Order_By>;
  min?: InputMaybe<User_Join_Tables_Rooms_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_join_tables_rooms" */
export type User_Join_Tables_Rooms_Arr_Rel_Insert_Input = {
  data: Array<User_Join_Tables_Rooms_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Join_Tables_Rooms_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_join_tables_rooms". All fields are combined with a logical 'AND'. */
export type User_Join_Tables_Rooms_Bool_Exp = {
  _and?: InputMaybe<Array<User_Join_Tables_Rooms_Bool_Exp>>;
  _not?: InputMaybe<User_Join_Tables_Rooms_Bool_Exp>;
  _or?: InputMaybe<Array<User_Join_Tables_Rooms_Bool_Exp>>;
  room?: InputMaybe<Rooms_Bool_Exp>;
  roomsId?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_join_tables_rooms" */
export enum User_Join_Tables_Rooms_Constraint {
  /** unique or primary key constraint on columns "userId", "roomsId" */
  Pk_277622d8fccf7c6445449593eea = 'PK_277622d8fccf7c6445449593eea'
}

/** input type for inserting data into table "user_join_tables_rooms" */
export type User_Join_Tables_Rooms_Insert_Input = {
  room?: InputMaybe<Rooms_Obj_Rel_Insert_Input>;
  roomsId?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type User_Join_Tables_Rooms_Max_Fields = {
  __typename?: 'user_join_tables_rooms_max_fields';
  roomsId?: Maybe<Scalars['uuid']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "user_join_tables_rooms" */
export type User_Join_Tables_Rooms_Max_Order_By = {
  roomsId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Join_Tables_Rooms_Min_Fields = {
  __typename?: 'user_join_tables_rooms_min_fields';
  roomsId?: Maybe<Scalars['uuid']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "user_join_tables_rooms" */
export type User_Join_Tables_Rooms_Min_Order_By = {
  roomsId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_join_tables_rooms" */
export type User_Join_Tables_Rooms_Mutation_Response = {
  __typename?: 'user_join_tables_rooms_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Join_Tables_Rooms>;
};

/** on_conflict condition type for table "user_join_tables_rooms" */
export type User_Join_Tables_Rooms_On_Conflict = {
  constraint: User_Join_Tables_Rooms_Constraint;
  update_columns?: Array<User_Join_Tables_Rooms_Update_Column>;
  where?: InputMaybe<User_Join_Tables_Rooms_Bool_Exp>;
};

/** Ordering options when selecting data from "user_join_tables_rooms". */
export type User_Join_Tables_Rooms_Order_By = {
  room?: InputMaybe<Rooms_Order_By>;
  roomsId?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_join_tables_rooms */
export type User_Join_Tables_Rooms_Pk_Columns_Input = {
  roomsId: Scalars['uuid']['input'];
  userId: Scalars['uuid']['input'];
};

/** select columns of table "user_join_tables_rooms" */
export enum User_Join_Tables_Rooms_Select_Column {
  /** column name */
  RoomsId = 'roomsId',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "user_join_tables_rooms" */
export type User_Join_Tables_Rooms_Set_Input = {
  roomsId?: InputMaybe<Scalars['uuid']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "user_join_tables_rooms" */
export type User_Join_Tables_Rooms_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Join_Tables_Rooms_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Join_Tables_Rooms_Stream_Cursor_Value_Input = {
  roomsId?: InputMaybe<Scalars['uuid']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "user_join_tables_rooms" */
export enum User_Join_Tables_Rooms_Update_Column {
  /** column name */
  RoomsId = 'roomsId',
  /** column name */
  UserId = 'userId'
}

export type User_Join_Tables_Rooms_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Join_Tables_Rooms_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Join_Tables_Rooms_Bool_Exp;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  /** ユーザーId */
  id?: Maybe<Scalars['uuid']['output']>;
  /** 参加日時 */
  join_at?: Maybe<Scalars['date']['output']>;
  /** 組織id */
  organization_id?: Maybe<Scalars['uuid']['output']>;
  /** ロールid */
  role_id?: Maybe<Scalars['Int']['output']>;
  /** ユーザー名 */
  user_name?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  /** ユーザーId */
  id?: InputMaybe<Order_By>;
  /** 参加日時 */
  join_at?: InputMaybe<Order_By>;
  /** 組織id */
  organization_id?: InputMaybe<Order_By>;
  /** ロールid */
  role_id?: InputMaybe<Order_By>;
  /** ユーザー名 */
  user_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  /** ユーザーId */
  id?: Maybe<Scalars['uuid']['output']>;
  /** 参加日時 */
  join_at?: Maybe<Scalars['date']['output']>;
  /** 組織id */
  organization_id?: Maybe<Scalars['uuid']['output']>;
  /** ロールid */
  role_id?: Maybe<Scalars['Int']['output']>;
  /** ユーザー名 */
  user_name?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  /** ユーザーId */
  id?: InputMaybe<Order_By>;
  /** 参加日時 */
  join_at?: InputMaybe<Order_By>;
  /** 組織id */
  organization_id?: InputMaybe<Order_By>;
  /** ロールid */
  role_id?: InputMaybe<Order_By>;
  /** ユーザー名 */
  user_name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  id?: InputMaybe<Order_By>;
  join_at?: InputMaybe<Order_By>;
  messages_aggregate?: InputMaybe<Messages_Aggregate_Order_By>;
  organization?: InputMaybe<Organization_Order_By>;
  organization_id?: InputMaybe<Order_By>;
  push_flag?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  user_join_tables_rooms_aggregate?: InputMaybe<User_Join_Tables_Rooms_Aggregate_Order_By>;
  user_name?: InputMaybe<Order_By>;
  user_role?: InputMaybe<User_Role_Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  /** ユーザーId */
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "user_role" */
export type User_Role = {
  __typename?: 'user_role';
  /** ロールid */
  id: Scalars['Int']['output'];
  /** ロール名 */
  name: Scalars['String']['output'];
  /** An array relationship */
  users: Array<User>;
  /** An aggregate relationship */
  users_aggregate: User_Aggregate;
};


/** columns and relationships of "user_role" */
export type User_RoleUsersArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


/** columns and relationships of "user_role" */
export type User_RoleUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** aggregated selection of "user_role" */
export type User_Role_Aggregate = {
  __typename?: 'user_role_aggregate';
  aggregate?: Maybe<User_Role_Aggregate_Fields>;
  nodes: Array<User_Role>;
};

/** aggregate fields of "user_role" */
export type User_Role_Aggregate_Fields = {
  __typename?: 'user_role_aggregate_fields';
  avg?: Maybe<User_Role_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Role_Max_Fields>;
  min?: Maybe<User_Role_Min_Fields>;
  stddev?: Maybe<User_Role_Stddev_Fields>;
  stddev_pop?: Maybe<User_Role_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Role_Stddev_Samp_Fields>;
  sum?: Maybe<User_Role_Sum_Fields>;
  var_pop?: Maybe<User_Role_Var_Pop_Fields>;
  var_samp?: Maybe<User_Role_Var_Samp_Fields>;
  variance?: Maybe<User_Role_Variance_Fields>;
};


/** aggregate fields of "user_role" */
export type User_Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type User_Role_Avg_Fields = {
  __typename?: 'user_role_avg_fields';
  /** ロールid */
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "user_role". All fields are combined with a logical 'AND'. */
export type User_Role_Bool_Exp = {
  _and?: InputMaybe<Array<User_Role_Bool_Exp>>;
  _not?: InputMaybe<User_Role_Bool_Exp>;
  _or?: InputMaybe<Array<User_Role_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  users?: InputMaybe<User_Bool_Exp>;
  users_aggregate?: InputMaybe<User_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "user_role" */
export enum User_Role_Constraint {
  /** unique or primary key constraint on columns "id" */
  PkFb2e442d14add3cefbdf33c4561 = 'PK_fb2e442d14add3cefbdf33c4561'
}

/** input type for incrementing numeric columns in table "user_role" */
export type User_Role_Inc_Input = {
  /** ロールid */
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "user_role" */
export type User_Role_Insert_Input = {
  /** ロールid */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** ロール名 */
  name?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<User_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Role_Max_Fields = {
  __typename?: 'user_role_max_fields';
  /** ロールid */
  id?: Maybe<Scalars['Int']['output']>;
  /** ロール名 */
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type User_Role_Min_Fields = {
  __typename?: 'user_role_min_fields';
  /** ロールid */
  id?: Maybe<Scalars['Int']['output']>;
  /** ロール名 */
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user_role" */
export type User_Role_Mutation_Response = {
  __typename?: 'user_role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Role>;
};

/** input type for inserting object relation for remote table "user_role" */
export type User_Role_Obj_Rel_Insert_Input = {
  data: User_Role_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Role_On_Conflict>;
};

/** on_conflict condition type for table "user_role" */
export type User_Role_On_Conflict = {
  constraint: User_Role_Constraint;
  update_columns?: Array<User_Role_Update_Column>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

/** Ordering options when selecting data from "user_role". */
export type User_Role_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<User_Aggregate_Order_By>;
};

/** primary key columns input for table: user_role */
export type User_Role_Pk_Columns_Input = {
  /** ロールid */
  id: Scalars['Int']['input'];
};

/** select columns of table "user_role" */
export enum User_Role_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "user_role" */
export type User_Role_Set_Input = {
  /** ロールid */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** ロール名 */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type User_Role_Stddev_Fields = {
  __typename?: 'user_role_stddev_fields';
  /** ロールid */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type User_Role_Stddev_Pop_Fields = {
  __typename?: 'user_role_stddev_pop_fields';
  /** ロールid */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type User_Role_Stddev_Samp_Fields = {
  __typename?: 'user_role_stddev_samp_fields';
  /** ロールid */
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "user_role" */
export type User_Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Role_Stream_Cursor_Value_Input = {
  /** ロールid */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** ロール名 */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type User_Role_Sum_Fields = {
  __typename?: 'user_role_sum_fields';
  /** ロールid */
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "user_role" */
export enum User_Role_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type User_Role_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Role_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Role_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Role_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Role_Var_Pop_Fields = {
  __typename?: 'user_role_var_pop_fields';
  /** ロールid */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type User_Role_Var_Samp_Fields = {
  __typename?: 'user_role_var_samp_fields';
  /** ロールid */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type User_Role_Variance_Fields = {
  __typename?: 'user_role_variance_fields';
  /** ロールid */
  id?: Maybe<Scalars['Float']['output']>;
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  JoinAt = 'join_at',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  PushFlag = 'push_flag',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UserName = 'user_name'
}

/** select "user_aggregate_bool_exp_bool_and_arguments_columns" columns of table "user" */
export enum User_Select_Column_User_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  PushFlag = 'push_flag'
}

/** select "user_aggregate_bool_exp_bool_or_arguments_columns" columns of table "user" */
export enum User_Select_Column_User_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  PushFlag = 'push_flag'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  /** ユーザーId */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 参加日時 */
  join_at?: InputMaybe<Scalars['date']['input']>;
  /** 組織id */
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  /** プッシュ通知 */
  push_flag?: InputMaybe<Scalars['Boolean']['input']>;
  /** ロールid */
  role_id?: InputMaybe<Scalars['Int']['input']>;
  /** ユーザー名 */
  user_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  /** ロールid */
  role_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user" */
export type User_Stddev_Order_By = {
  /** ロールid */
  role_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  /** ロールid */
  role_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user" */
export type User_Stddev_Pop_Order_By = {
  /** ロールid */
  role_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  /** ロールid */
  role_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user" */
export type User_Stddev_Samp_Order_By = {
  /** ロールid */
  role_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  /** ユーザーId */
  id?: InputMaybe<Scalars['uuid']['input']>;
  /** 参加日時 */
  join_at?: InputMaybe<Scalars['date']['input']>;
  /** 組織id */
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  /** プッシュ通知 */
  push_flag?: InputMaybe<Scalars['Boolean']['input']>;
  /** ロールid */
  role_id?: InputMaybe<Scalars['Int']['input']>;
  /** ユーザー名 */
  user_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  /** ロールid */
  role_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "user" */
export type User_Sum_Order_By = {
  /** ロールid */
  role_id?: InputMaybe<Order_By>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  JoinAt = 'join_at',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  PushFlag = 'push_flag',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UserName = 'user_name'
}

export type User_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  /** ロールid */
  role_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user" */
export type User_Var_Pop_Order_By = {
  /** ロールid */
  role_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  /** ロールid */
  role_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user" */
export type User_Var_Samp_Order_By = {
  /** ロールid */
  role_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  /** ロールid */
  role_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user" */
export type User_Variance_Order_By = {
  /** ロールid */
  role_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type GetRoomDetailInfoQueryVariables = Exact<{
  roomId: Scalars['uuid']['input'];
}>;


export type GetRoomDetailInfoQuery = { __typename?: 'query_root', rooms_by_pk?: { __typename?: 'rooms', create_at: any, id: string, name?: string | null } | null, user_join_tables_rooms: Array<{ __typename?: 'user_join_tables_rooms', user: { __typename?: 'user', user_name: string, id: string } }>, user_join_tables_rooms_aggregate: { __typename?: 'user_join_tables_rooms_aggregate', aggregate?: { __typename?: 'user_join_tables_rooms_aggregate_fields', count: number } | null } };

export type GetRoomsByUserIdQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type GetRoomsByUserIdQuery = { __typename?: 'query_root', user_join_tables_rooms: Array<{ __typename?: 'user_join_tables_rooms', room: { __typename?: 'rooms', name?: string | null, id: string } }> };

export type AddRoomMutationMutationVariables = Exact<{
  Input: CreateRoomDto;
}>;


export type AddRoomMutationMutation = { __typename?: 'mutation_root', addRoom: { __typename?: 'SchemaRooms', create_at: string, id: string, name: string } };


export const GetRoomDetailInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRoomDetailInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roomId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rooms_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roomId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"create_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_join_tables_rooms"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"roomsId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roomId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_join_tables_rooms_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"roomsId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roomId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<GetRoomDetailInfoQuery, GetRoomDetailInfoQueryVariables>;
export const GetRoomsByUserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRoomsByUserId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_join_tables_rooms"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"room"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetRoomsByUserIdQuery, GetRoomsByUserIdQueryVariables>;
export const AddRoomMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addRoomMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"Input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateRoomDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addRoom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"CreateRoomDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"Input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"create_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AddRoomMutationMutation, AddRoomMutationMutationVariables>;