import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: any; output: any; }
  uuid: { input: any; output: any; }
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  CreateRoomDto: CreateRoomDto;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Int_comparison_exp: Int_Comparison_Exp;
  SchemaOrganization: ResolverTypeWrapper<SchemaOrganization>;
  SchemaRooms: ResolverTypeWrapper<SchemaRooms>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  String_comparison_exp: String_Comparison_Exp;
  cursor_ordering: Cursor_Ordering;
  date: ResolverTypeWrapper<Scalars['date']['output']>;
  date_comparison_exp: Date_Comparison_Exp;
  messages: ResolverTypeWrapper<Messages>;
  messages_aggregate: ResolverTypeWrapper<Messages_Aggregate>;
  messages_aggregate_bool_exp: Messages_Aggregate_Bool_Exp;
  messages_aggregate_bool_exp_count: Messages_Aggregate_Bool_Exp_Count;
  messages_aggregate_fields: ResolverTypeWrapper<Messages_Aggregate_Fields>;
  messages_aggregate_order_by: Messages_Aggregate_Order_By;
  messages_arr_rel_insert_input: Messages_Arr_Rel_Insert_Input;
  messages_avg_fields: ResolverTypeWrapper<Messages_Avg_Fields>;
  messages_avg_order_by: Messages_Avg_Order_By;
  messages_bool_exp: Messages_Bool_Exp;
  messages_constraint: Messages_Constraint;
  messages_inc_input: Messages_Inc_Input;
  messages_insert_input: Messages_Insert_Input;
  messages_max_fields: ResolverTypeWrapper<Messages_Max_Fields>;
  messages_max_order_by: Messages_Max_Order_By;
  messages_min_fields: ResolverTypeWrapper<Messages_Min_Fields>;
  messages_min_order_by: Messages_Min_Order_By;
  messages_mutation_response: ResolverTypeWrapper<Messages_Mutation_Response>;
  messages_on_conflict: Messages_On_Conflict;
  messages_order_by: Messages_Order_By;
  messages_pk_columns_input: Messages_Pk_Columns_Input;
  messages_select_column: Messages_Select_Column;
  messages_set_input: Messages_Set_Input;
  messages_stddev_fields: ResolverTypeWrapper<Messages_Stddev_Fields>;
  messages_stddev_order_by: Messages_Stddev_Order_By;
  messages_stddev_pop_fields: ResolverTypeWrapper<Messages_Stddev_Pop_Fields>;
  messages_stddev_pop_order_by: Messages_Stddev_Pop_Order_By;
  messages_stddev_samp_fields: ResolverTypeWrapper<Messages_Stddev_Samp_Fields>;
  messages_stddev_samp_order_by: Messages_Stddev_Samp_Order_By;
  messages_stream_cursor_input: Messages_Stream_Cursor_Input;
  messages_stream_cursor_value_input: Messages_Stream_Cursor_Value_Input;
  messages_sum_fields: ResolverTypeWrapper<Messages_Sum_Fields>;
  messages_sum_order_by: Messages_Sum_Order_By;
  messages_update_column: Messages_Update_Column;
  messages_updates: Messages_Updates;
  messages_var_pop_fields: ResolverTypeWrapper<Messages_Var_Pop_Fields>;
  messages_var_pop_order_by: Messages_Var_Pop_Order_By;
  messages_var_samp_fields: ResolverTypeWrapper<Messages_Var_Samp_Fields>;
  messages_var_samp_order_by: Messages_Var_Samp_Order_By;
  messages_variance_fields: ResolverTypeWrapper<Messages_Variance_Fields>;
  messages_variance_order_by: Messages_Variance_Order_By;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  organization: ResolverTypeWrapper<Organization>;
  organization_aggregate: ResolverTypeWrapper<Organization_Aggregate>;
  organization_aggregate_fields: ResolverTypeWrapper<Organization_Aggregate_Fields>;
  organization_bool_exp: Organization_Bool_Exp;
  organization_constraint: Organization_Constraint;
  organization_insert_input: Organization_Insert_Input;
  organization_max_fields: ResolverTypeWrapper<Organization_Max_Fields>;
  organization_min_fields: ResolverTypeWrapper<Organization_Min_Fields>;
  organization_mutation_response: ResolverTypeWrapper<Organization_Mutation_Response>;
  organization_obj_rel_insert_input: Organization_Obj_Rel_Insert_Input;
  organization_on_conflict: Organization_On_Conflict;
  organization_order_by: Organization_Order_By;
  organization_pk_columns_input: Organization_Pk_Columns_Input;
  organization_select_column: Organization_Select_Column;
  organization_set_input: Organization_Set_Input;
  organization_stream_cursor_input: Organization_Stream_Cursor_Input;
  organization_stream_cursor_value_input: Organization_Stream_Cursor_Value_Input;
  organization_update_column: Organization_Update_Column;
  organization_updates: Organization_Updates;
  query_root: ResolverTypeWrapper<{}>;
  rooms: ResolverTypeWrapper<Rooms>;
  rooms_aggregate: ResolverTypeWrapper<Rooms_Aggregate>;
  rooms_aggregate_bool_exp: Rooms_Aggregate_Bool_Exp;
  rooms_aggregate_bool_exp_count: Rooms_Aggregate_Bool_Exp_Count;
  rooms_aggregate_fields: ResolverTypeWrapper<Rooms_Aggregate_Fields>;
  rooms_aggregate_order_by: Rooms_Aggregate_Order_By;
  rooms_arr_rel_insert_input: Rooms_Arr_Rel_Insert_Input;
  rooms_bool_exp: Rooms_Bool_Exp;
  rooms_constraint: Rooms_Constraint;
  rooms_insert_input: Rooms_Insert_Input;
  rooms_max_fields: ResolverTypeWrapper<Rooms_Max_Fields>;
  rooms_max_order_by: Rooms_Max_Order_By;
  rooms_min_fields: ResolverTypeWrapper<Rooms_Min_Fields>;
  rooms_min_order_by: Rooms_Min_Order_By;
  rooms_mutation_response: ResolverTypeWrapper<Rooms_Mutation_Response>;
  rooms_obj_rel_insert_input: Rooms_Obj_Rel_Insert_Input;
  rooms_on_conflict: Rooms_On_Conflict;
  rooms_order_by: Rooms_Order_By;
  rooms_pk_columns_input: Rooms_Pk_Columns_Input;
  rooms_select_column: Rooms_Select_Column;
  rooms_set_input: Rooms_Set_Input;
  rooms_stream_cursor_input: Rooms_Stream_Cursor_Input;
  rooms_stream_cursor_value_input: Rooms_Stream_Cursor_Value_Input;
  rooms_update_column: Rooms_Update_Column;
  rooms_updates: Rooms_Updates;
  subscription_root: ResolverTypeWrapper<{}>;
  user: ResolverTypeWrapper<User>;
  user_aggregate: ResolverTypeWrapper<User_Aggregate>;
  user_aggregate_bool_exp: User_Aggregate_Bool_Exp;
  user_aggregate_bool_exp_bool_and: User_Aggregate_Bool_Exp_Bool_And;
  user_aggregate_bool_exp_bool_or: User_Aggregate_Bool_Exp_Bool_Or;
  user_aggregate_bool_exp_count: User_Aggregate_Bool_Exp_Count;
  user_aggregate_fields: ResolverTypeWrapper<User_Aggregate_Fields>;
  user_aggregate_order_by: User_Aggregate_Order_By;
  user_arr_rel_insert_input: User_Arr_Rel_Insert_Input;
  user_avg_fields: ResolverTypeWrapper<User_Avg_Fields>;
  user_avg_order_by: User_Avg_Order_By;
  user_bool_exp: User_Bool_Exp;
  user_constraint: User_Constraint;
  user_inc_input: User_Inc_Input;
  user_insert_input: User_Insert_Input;
  user_join_tables_rooms: ResolverTypeWrapper<User_Join_Tables_Rooms>;
  user_join_tables_rooms_aggregate: ResolverTypeWrapper<User_Join_Tables_Rooms_Aggregate>;
  user_join_tables_rooms_aggregate_bool_exp: User_Join_Tables_Rooms_Aggregate_Bool_Exp;
  user_join_tables_rooms_aggregate_bool_exp_count: User_Join_Tables_Rooms_Aggregate_Bool_Exp_Count;
  user_join_tables_rooms_aggregate_fields: ResolverTypeWrapper<User_Join_Tables_Rooms_Aggregate_Fields>;
  user_join_tables_rooms_aggregate_order_by: User_Join_Tables_Rooms_Aggregate_Order_By;
  user_join_tables_rooms_arr_rel_insert_input: User_Join_Tables_Rooms_Arr_Rel_Insert_Input;
  user_join_tables_rooms_bool_exp: User_Join_Tables_Rooms_Bool_Exp;
  user_join_tables_rooms_constraint: User_Join_Tables_Rooms_Constraint;
  user_join_tables_rooms_insert_input: User_Join_Tables_Rooms_Insert_Input;
  user_join_tables_rooms_max_fields: ResolverTypeWrapper<User_Join_Tables_Rooms_Max_Fields>;
  user_join_tables_rooms_max_order_by: User_Join_Tables_Rooms_Max_Order_By;
  user_join_tables_rooms_min_fields: ResolverTypeWrapper<User_Join_Tables_Rooms_Min_Fields>;
  user_join_tables_rooms_min_order_by: User_Join_Tables_Rooms_Min_Order_By;
  user_join_tables_rooms_mutation_response: ResolverTypeWrapper<User_Join_Tables_Rooms_Mutation_Response>;
  user_join_tables_rooms_on_conflict: User_Join_Tables_Rooms_On_Conflict;
  user_join_tables_rooms_order_by: User_Join_Tables_Rooms_Order_By;
  user_join_tables_rooms_pk_columns_input: User_Join_Tables_Rooms_Pk_Columns_Input;
  user_join_tables_rooms_select_column: User_Join_Tables_Rooms_Select_Column;
  user_join_tables_rooms_set_input: User_Join_Tables_Rooms_Set_Input;
  user_join_tables_rooms_stream_cursor_input: User_Join_Tables_Rooms_Stream_Cursor_Input;
  user_join_tables_rooms_stream_cursor_value_input: User_Join_Tables_Rooms_Stream_Cursor_Value_Input;
  user_join_tables_rooms_update_column: User_Join_Tables_Rooms_Update_Column;
  user_join_tables_rooms_updates: User_Join_Tables_Rooms_Updates;
  user_max_fields: ResolverTypeWrapper<User_Max_Fields>;
  user_max_order_by: User_Max_Order_By;
  user_min_fields: ResolverTypeWrapper<User_Min_Fields>;
  user_min_order_by: User_Min_Order_By;
  user_mutation_response: ResolverTypeWrapper<User_Mutation_Response>;
  user_obj_rel_insert_input: User_Obj_Rel_Insert_Input;
  user_on_conflict: User_On_Conflict;
  user_order_by: User_Order_By;
  user_pk_columns_input: User_Pk_Columns_Input;
  user_role: ResolverTypeWrapper<User_Role>;
  user_role_aggregate: ResolverTypeWrapper<User_Role_Aggregate>;
  user_role_aggregate_fields: ResolverTypeWrapper<User_Role_Aggregate_Fields>;
  user_role_avg_fields: ResolverTypeWrapper<User_Role_Avg_Fields>;
  user_role_bool_exp: User_Role_Bool_Exp;
  user_role_constraint: User_Role_Constraint;
  user_role_inc_input: User_Role_Inc_Input;
  user_role_insert_input: User_Role_Insert_Input;
  user_role_max_fields: ResolverTypeWrapper<User_Role_Max_Fields>;
  user_role_min_fields: ResolverTypeWrapper<User_Role_Min_Fields>;
  user_role_mutation_response: ResolverTypeWrapper<User_Role_Mutation_Response>;
  user_role_obj_rel_insert_input: User_Role_Obj_Rel_Insert_Input;
  user_role_on_conflict: User_Role_On_Conflict;
  user_role_order_by: User_Role_Order_By;
  user_role_pk_columns_input: User_Role_Pk_Columns_Input;
  user_role_select_column: User_Role_Select_Column;
  user_role_set_input: User_Role_Set_Input;
  user_role_stddev_fields: ResolverTypeWrapper<User_Role_Stddev_Fields>;
  user_role_stddev_pop_fields: ResolverTypeWrapper<User_Role_Stddev_Pop_Fields>;
  user_role_stddev_samp_fields: ResolverTypeWrapper<User_Role_Stddev_Samp_Fields>;
  user_role_stream_cursor_input: User_Role_Stream_Cursor_Input;
  user_role_stream_cursor_value_input: User_Role_Stream_Cursor_Value_Input;
  user_role_sum_fields: ResolverTypeWrapper<User_Role_Sum_Fields>;
  user_role_update_column: User_Role_Update_Column;
  user_role_updates: User_Role_Updates;
  user_role_var_pop_fields: ResolverTypeWrapper<User_Role_Var_Pop_Fields>;
  user_role_var_samp_fields: ResolverTypeWrapper<User_Role_Var_Samp_Fields>;
  user_role_variance_fields: ResolverTypeWrapper<User_Role_Variance_Fields>;
  user_select_column: User_Select_Column;
  user_select_column_user_aggregate_bool_exp_bool_and_arguments_columns: User_Select_Column_User_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  user_select_column_user_aggregate_bool_exp_bool_or_arguments_columns: User_Select_Column_User_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  user_set_input: User_Set_Input;
  user_stddev_fields: ResolverTypeWrapper<User_Stddev_Fields>;
  user_stddev_order_by: User_Stddev_Order_By;
  user_stddev_pop_fields: ResolverTypeWrapper<User_Stddev_Pop_Fields>;
  user_stddev_pop_order_by: User_Stddev_Pop_Order_By;
  user_stddev_samp_fields: ResolverTypeWrapper<User_Stddev_Samp_Fields>;
  user_stddev_samp_order_by: User_Stddev_Samp_Order_By;
  user_stream_cursor_input: User_Stream_Cursor_Input;
  user_stream_cursor_value_input: User_Stream_Cursor_Value_Input;
  user_sum_fields: ResolverTypeWrapper<User_Sum_Fields>;
  user_sum_order_by: User_Sum_Order_By;
  user_update_column: User_Update_Column;
  user_updates: User_Updates;
  user_var_pop_fields: ResolverTypeWrapper<User_Var_Pop_Fields>;
  user_var_pop_order_by: User_Var_Pop_Order_By;
  user_var_samp_fields: ResolverTypeWrapper<User_Var_Samp_Fields>;
  user_var_samp_order_by: User_Var_Samp_Order_By;
  user_variance_fields: ResolverTypeWrapper<User_Variance_Fields>;
  user_variance_order_by: User_Variance_Order_By;
  uuid: ResolverTypeWrapper<Scalars['uuid']['output']>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  CreateRoomDto: CreateRoomDto;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Int_comparison_exp: Int_Comparison_Exp;
  SchemaOrganization: SchemaOrganization;
  SchemaRooms: SchemaRooms;
  String: Scalars['String']['output'];
  String_comparison_exp: String_Comparison_Exp;
  date: Scalars['date']['output'];
  date_comparison_exp: Date_Comparison_Exp;
  messages: Messages;
  messages_aggregate: Messages_Aggregate;
  messages_aggregate_bool_exp: Messages_Aggregate_Bool_Exp;
  messages_aggregate_bool_exp_count: Messages_Aggregate_Bool_Exp_Count;
  messages_aggregate_fields: Messages_Aggregate_Fields;
  messages_aggregate_order_by: Messages_Aggregate_Order_By;
  messages_arr_rel_insert_input: Messages_Arr_Rel_Insert_Input;
  messages_avg_fields: Messages_Avg_Fields;
  messages_avg_order_by: Messages_Avg_Order_By;
  messages_bool_exp: Messages_Bool_Exp;
  messages_inc_input: Messages_Inc_Input;
  messages_insert_input: Messages_Insert_Input;
  messages_max_fields: Messages_Max_Fields;
  messages_max_order_by: Messages_Max_Order_By;
  messages_min_fields: Messages_Min_Fields;
  messages_min_order_by: Messages_Min_Order_By;
  messages_mutation_response: Messages_Mutation_Response;
  messages_on_conflict: Messages_On_Conflict;
  messages_order_by: Messages_Order_By;
  messages_pk_columns_input: Messages_Pk_Columns_Input;
  messages_set_input: Messages_Set_Input;
  messages_stddev_fields: Messages_Stddev_Fields;
  messages_stddev_order_by: Messages_Stddev_Order_By;
  messages_stddev_pop_fields: Messages_Stddev_Pop_Fields;
  messages_stddev_pop_order_by: Messages_Stddev_Pop_Order_By;
  messages_stddev_samp_fields: Messages_Stddev_Samp_Fields;
  messages_stddev_samp_order_by: Messages_Stddev_Samp_Order_By;
  messages_stream_cursor_input: Messages_Stream_Cursor_Input;
  messages_stream_cursor_value_input: Messages_Stream_Cursor_Value_Input;
  messages_sum_fields: Messages_Sum_Fields;
  messages_sum_order_by: Messages_Sum_Order_By;
  messages_updates: Messages_Updates;
  messages_var_pop_fields: Messages_Var_Pop_Fields;
  messages_var_pop_order_by: Messages_Var_Pop_Order_By;
  messages_var_samp_fields: Messages_Var_Samp_Fields;
  messages_var_samp_order_by: Messages_Var_Samp_Order_By;
  messages_variance_fields: Messages_Variance_Fields;
  messages_variance_order_by: Messages_Variance_Order_By;
  mutation_root: {};
  organization: Organization;
  organization_aggregate: Organization_Aggregate;
  organization_aggregate_fields: Organization_Aggregate_Fields;
  organization_bool_exp: Organization_Bool_Exp;
  organization_insert_input: Organization_Insert_Input;
  organization_max_fields: Organization_Max_Fields;
  organization_min_fields: Organization_Min_Fields;
  organization_mutation_response: Organization_Mutation_Response;
  organization_obj_rel_insert_input: Organization_Obj_Rel_Insert_Input;
  organization_on_conflict: Organization_On_Conflict;
  organization_order_by: Organization_Order_By;
  organization_pk_columns_input: Organization_Pk_Columns_Input;
  organization_set_input: Organization_Set_Input;
  organization_stream_cursor_input: Organization_Stream_Cursor_Input;
  organization_stream_cursor_value_input: Organization_Stream_Cursor_Value_Input;
  organization_updates: Organization_Updates;
  query_root: {};
  rooms: Rooms;
  rooms_aggregate: Rooms_Aggregate;
  rooms_aggregate_bool_exp: Rooms_Aggregate_Bool_Exp;
  rooms_aggregate_bool_exp_count: Rooms_Aggregate_Bool_Exp_Count;
  rooms_aggregate_fields: Rooms_Aggregate_Fields;
  rooms_aggregate_order_by: Rooms_Aggregate_Order_By;
  rooms_arr_rel_insert_input: Rooms_Arr_Rel_Insert_Input;
  rooms_bool_exp: Rooms_Bool_Exp;
  rooms_insert_input: Rooms_Insert_Input;
  rooms_max_fields: Rooms_Max_Fields;
  rooms_max_order_by: Rooms_Max_Order_By;
  rooms_min_fields: Rooms_Min_Fields;
  rooms_min_order_by: Rooms_Min_Order_By;
  rooms_mutation_response: Rooms_Mutation_Response;
  rooms_obj_rel_insert_input: Rooms_Obj_Rel_Insert_Input;
  rooms_on_conflict: Rooms_On_Conflict;
  rooms_order_by: Rooms_Order_By;
  rooms_pk_columns_input: Rooms_Pk_Columns_Input;
  rooms_set_input: Rooms_Set_Input;
  rooms_stream_cursor_input: Rooms_Stream_Cursor_Input;
  rooms_stream_cursor_value_input: Rooms_Stream_Cursor_Value_Input;
  rooms_updates: Rooms_Updates;
  subscription_root: {};
  user: User;
  user_aggregate: User_Aggregate;
  user_aggregate_bool_exp: User_Aggregate_Bool_Exp;
  user_aggregate_bool_exp_bool_and: User_Aggregate_Bool_Exp_Bool_And;
  user_aggregate_bool_exp_bool_or: User_Aggregate_Bool_Exp_Bool_Or;
  user_aggregate_bool_exp_count: User_Aggregate_Bool_Exp_Count;
  user_aggregate_fields: User_Aggregate_Fields;
  user_aggregate_order_by: User_Aggregate_Order_By;
  user_arr_rel_insert_input: User_Arr_Rel_Insert_Input;
  user_avg_fields: User_Avg_Fields;
  user_avg_order_by: User_Avg_Order_By;
  user_bool_exp: User_Bool_Exp;
  user_inc_input: User_Inc_Input;
  user_insert_input: User_Insert_Input;
  user_join_tables_rooms: User_Join_Tables_Rooms;
  user_join_tables_rooms_aggregate: User_Join_Tables_Rooms_Aggregate;
  user_join_tables_rooms_aggregate_bool_exp: User_Join_Tables_Rooms_Aggregate_Bool_Exp;
  user_join_tables_rooms_aggregate_bool_exp_count: User_Join_Tables_Rooms_Aggregate_Bool_Exp_Count;
  user_join_tables_rooms_aggregate_fields: User_Join_Tables_Rooms_Aggregate_Fields;
  user_join_tables_rooms_aggregate_order_by: User_Join_Tables_Rooms_Aggregate_Order_By;
  user_join_tables_rooms_arr_rel_insert_input: User_Join_Tables_Rooms_Arr_Rel_Insert_Input;
  user_join_tables_rooms_bool_exp: User_Join_Tables_Rooms_Bool_Exp;
  user_join_tables_rooms_insert_input: User_Join_Tables_Rooms_Insert_Input;
  user_join_tables_rooms_max_fields: User_Join_Tables_Rooms_Max_Fields;
  user_join_tables_rooms_max_order_by: User_Join_Tables_Rooms_Max_Order_By;
  user_join_tables_rooms_min_fields: User_Join_Tables_Rooms_Min_Fields;
  user_join_tables_rooms_min_order_by: User_Join_Tables_Rooms_Min_Order_By;
  user_join_tables_rooms_mutation_response: User_Join_Tables_Rooms_Mutation_Response;
  user_join_tables_rooms_on_conflict: User_Join_Tables_Rooms_On_Conflict;
  user_join_tables_rooms_order_by: User_Join_Tables_Rooms_Order_By;
  user_join_tables_rooms_pk_columns_input: User_Join_Tables_Rooms_Pk_Columns_Input;
  user_join_tables_rooms_set_input: User_Join_Tables_Rooms_Set_Input;
  user_join_tables_rooms_stream_cursor_input: User_Join_Tables_Rooms_Stream_Cursor_Input;
  user_join_tables_rooms_stream_cursor_value_input: User_Join_Tables_Rooms_Stream_Cursor_Value_Input;
  user_join_tables_rooms_updates: User_Join_Tables_Rooms_Updates;
  user_max_fields: User_Max_Fields;
  user_max_order_by: User_Max_Order_By;
  user_min_fields: User_Min_Fields;
  user_min_order_by: User_Min_Order_By;
  user_mutation_response: User_Mutation_Response;
  user_obj_rel_insert_input: User_Obj_Rel_Insert_Input;
  user_on_conflict: User_On_Conflict;
  user_order_by: User_Order_By;
  user_pk_columns_input: User_Pk_Columns_Input;
  user_role: User_Role;
  user_role_aggregate: User_Role_Aggregate;
  user_role_aggregate_fields: User_Role_Aggregate_Fields;
  user_role_avg_fields: User_Role_Avg_Fields;
  user_role_bool_exp: User_Role_Bool_Exp;
  user_role_inc_input: User_Role_Inc_Input;
  user_role_insert_input: User_Role_Insert_Input;
  user_role_max_fields: User_Role_Max_Fields;
  user_role_min_fields: User_Role_Min_Fields;
  user_role_mutation_response: User_Role_Mutation_Response;
  user_role_obj_rel_insert_input: User_Role_Obj_Rel_Insert_Input;
  user_role_on_conflict: User_Role_On_Conflict;
  user_role_order_by: User_Role_Order_By;
  user_role_pk_columns_input: User_Role_Pk_Columns_Input;
  user_role_set_input: User_Role_Set_Input;
  user_role_stddev_fields: User_Role_Stddev_Fields;
  user_role_stddev_pop_fields: User_Role_Stddev_Pop_Fields;
  user_role_stddev_samp_fields: User_Role_Stddev_Samp_Fields;
  user_role_stream_cursor_input: User_Role_Stream_Cursor_Input;
  user_role_stream_cursor_value_input: User_Role_Stream_Cursor_Value_Input;
  user_role_sum_fields: User_Role_Sum_Fields;
  user_role_updates: User_Role_Updates;
  user_role_var_pop_fields: User_Role_Var_Pop_Fields;
  user_role_var_samp_fields: User_Role_Var_Samp_Fields;
  user_role_variance_fields: User_Role_Variance_Fields;
  user_set_input: User_Set_Input;
  user_stddev_fields: User_Stddev_Fields;
  user_stddev_order_by: User_Stddev_Order_By;
  user_stddev_pop_fields: User_Stddev_Pop_Fields;
  user_stddev_pop_order_by: User_Stddev_Pop_Order_By;
  user_stddev_samp_fields: User_Stddev_Samp_Fields;
  user_stddev_samp_order_by: User_Stddev_Samp_Order_By;
  user_stream_cursor_input: User_Stream_Cursor_Input;
  user_stream_cursor_value_input: User_Stream_Cursor_Value_Input;
  user_sum_fields: User_Sum_Fields;
  user_sum_order_by: User_Sum_Order_By;
  user_updates: User_Updates;
  user_var_pop_fields: User_Var_Pop_Fields;
  user_var_pop_order_by: User_Var_Pop_Order_By;
  user_var_samp_fields: User_Var_Samp_Fields;
  user_var_samp_order_by: User_Var_Samp_Order_By;
  user_variance_fields: User_Variance_Fields;
  user_variance_order_by: User_Variance_Order_By;
  uuid: Scalars['uuid']['output'];
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

export type CachedDirectiveArgs = {
  refresh?: Scalars['Boolean']['input'];
  ttl?: Scalars['Int']['input'];
};

export type CachedDirectiveResolver<Result, Parent, ContextType = any, Args = CachedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type SchemaOrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaOrganization'] = ResolversParentTypes['SchemaOrganization']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SchemaRoomsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SchemaRooms'] = ResolversParentTypes['SchemaRooms']> = {
  create_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['SchemaOrganization'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['date'], any> {
  name: 'date';
}

export type MessagesResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages'] = ResolversParentTypes['messages']> = {
  create_at?: Resolver<ResolversTypes['date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  room?: Resolver<Maybe<ResolversTypes['rooms']>, ParentType, ContextType>;
  room_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Messages_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_aggregate'] = ResolversParentTypes['messages_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['messages_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['messages']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Messages_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_aggregate_fields'] = ResolversParentTypes['messages_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['messages_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Messages_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['messages_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['messages_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['messages_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['messages_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['messages_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['messages_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['messages_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['messages_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['messages_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Messages_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_avg_fields'] = ResolversParentTypes['messages_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Messages_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_max_fields'] = ResolversParentTypes['messages_max_fields']> = {
  create_at?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  room_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Messages_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_min_fields'] = ResolversParentTypes['messages_min_fields']> = {
  create_at?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  room_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Messages_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_mutation_response'] = ResolversParentTypes['messages_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['messages']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Messages_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_stddev_fields'] = ResolversParentTypes['messages_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Messages_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_stddev_pop_fields'] = ResolversParentTypes['messages_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Messages_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_stddev_samp_fields'] = ResolversParentTypes['messages_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Messages_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_sum_fields'] = ResolversParentTypes['messages_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Messages_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_var_pop_fields'] = ResolversParentTypes['messages_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Messages_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_var_samp_fields'] = ResolversParentTypes['messages_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Messages_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_variance_fields'] = ResolversParentTypes['messages_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  addRoom?: Resolver<ResolversTypes['SchemaRooms'], ParentType, ContextType, RequireFields<Mutation_RootAddRoomArgs, 'CreateRoomDto'>>;
  delete_messages?: Resolver<Maybe<ResolversTypes['messages_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_MessagesArgs, 'where'>>;
  delete_messages_by_pk?: Resolver<Maybe<ResolversTypes['messages']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Messages_By_PkArgs, 'id'>>;
  delete_organization?: Resolver<Maybe<ResolversTypes['organization_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_OrganizationArgs, 'where'>>;
  delete_organization_by_pk?: Resolver<Maybe<ResolversTypes['organization']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Organization_By_PkArgs, 'id'>>;
  delete_rooms?: Resolver<Maybe<ResolversTypes['rooms_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_RoomsArgs, 'where'>>;
  delete_rooms_by_pk?: Resolver<Maybe<ResolversTypes['rooms']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Rooms_By_PkArgs, 'id'>>;
  delete_user?: Resolver<Maybe<ResolversTypes['user_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_UserArgs, 'where'>>;
  delete_user_by_pk?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_User_By_PkArgs, 'id'>>;
  delete_user_join_tables_rooms?: Resolver<Maybe<ResolversTypes['user_join_tables_rooms_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_User_Join_Tables_RoomsArgs, 'where'>>;
  delete_user_join_tables_rooms_by_pk?: Resolver<Maybe<ResolversTypes['user_join_tables_rooms']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_User_Join_Tables_Rooms_By_PkArgs, 'roomsId' | 'userId'>>;
  delete_user_role?: Resolver<Maybe<ResolversTypes['user_role_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_User_RoleArgs, 'where'>>;
  delete_user_role_by_pk?: Resolver<Maybe<ResolversTypes['user_role']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_User_Role_By_PkArgs, 'id'>>;
  insert_messages?: Resolver<Maybe<ResolversTypes['messages_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_MessagesArgs, 'objects'>>;
  insert_messages_one?: Resolver<Maybe<ResolversTypes['messages']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Messages_OneArgs, 'object'>>;
  insert_organization?: Resolver<Maybe<ResolversTypes['organization_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_OrganizationArgs, 'objects'>>;
  insert_organization_one?: Resolver<Maybe<ResolversTypes['organization']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Organization_OneArgs, 'object'>>;
  insert_rooms?: Resolver<Maybe<ResolversTypes['rooms_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_RoomsArgs, 'objects'>>;
  insert_rooms_one?: Resolver<Maybe<ResolversTypes['rooms']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Rooms_OneArgs, 'object'>>;
  insert_user?: Resolver<Maybe<ResolversTypes['user_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_UserArgs, 'objects'>>;
  insert_user_join_tables_rooms?: Resolver<Maybe<ResolversTypes['user_join_tables_rooms_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_User_Join_Tables_RoomsArgs, 'objects'>>;
  insert_user_join_tables_rooms_one?: Resolver<Maybe<ResolversTypes['user_join_tables_rooms']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_User_Join_Tables_Rooms_OneArgs, 'object'>>;
  insert_user_one?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_User_OneArgs, 'object'>>;
  insert_user_role?: Resolver<Maybe<ResolversTypes['user_role_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_User_RoleArgs, 'objects'>>;
  insert_user_role_one?: Resolver<Maybe<ResolversTypes['user_role']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_User_Role_OneArgs, 'object'>>;
  update_messages?: Resolver<Maybe<ResolversTypes['messages_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_MessagesArgs, 'where'>>;
  update_messages_by_pk?: Resolver<Maybe<ResolversTypes['messages']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Messages_By_PkArgs, 'pk_columns'>>;
  update_messages_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['messages_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Messages_ManyArgs, 'updates'>>;
  update_organization?: Resolver<Maybe<ResolversTypes['organization_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_OrganizationArgs, 'where'>>;
  update_organization_by_pk?: Resolver<Maybe<ResolversTypes['organization']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Organization_By_PkArgs, 'pk_columns'>>;
  update_organization_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['organization_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Organization_ManyArgs, 'updates'>>;
  update_rooms?: Resolver<Maybe<ResolversTypes['rooms_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_RoomsArgs, 'where'>>;
  update_rooms_by_pk?: Resolver<Maybe<ResolversTypes['rooms']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Rooms_By_PkArgs, 'pk_columns'>>;
  update_rooms_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['rooms_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Rooms_ManyArgs, 'updates'>>;
  update_user?: Resolver<Maybe<ResolversTypes['user_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_UserArgs, 'where'>>;
  update_user_by_pk?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_By_PkArgs, 'pk_columns'>>;
  update_user_join_tables_rooms?: Resolver<Maybe<ResolversTypes['user_join_tables_rooms_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_Join_Tables_RoomsArgs, 'where'>>;
  update_user_join_tables_rooms_by_pk?: Resolver<Maybe<ResolversTypes['user_join_tables_rooms']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_Join_Tables_Rooms_By_PkArgs, 'pk_columns'>>;
  update_user_join_tables_rooms_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['user_join_tables_rooms_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_Join_Tables_Rooms_ManyArgs, 'updates'>>;
  update_user_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['user_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_ManyArgs, 'updates'>>;
  update_user_role?: Resolver<Maybe<ResolversTypes['user_role_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_RoleArgs, 'where'>>;
  update_user_role_by_pk?: Resolver<Maybe<ResolversTypes['user_role']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_Role_By_PkArgs, 'pk_columns'>>;
  update_user_role_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['user_role_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_Role_ManyArgs, 'updates'>>;
};

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['organization'] = ResolversParentTypes['organization']> = {
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rooms?: Resolver<Array<ResolversTypes['rooms']>, ParentType, ContextType, Partial<OrganizationRoomsArgs>>;
  rooms_aggregate?: Resolver<ResolversTypes['rooms_aggregate'], ParentType, ContextType, Partial<OrganizationRooms_AggregateArgs>>;
  users?: Resolver<Array<ResolversTypes['user']>, ParentType, ContextType, Partial<OrganizationUsersArgs>>;
  users_aggregate?: Resolver<ResolversTypes['user_aggregate'], ParentType, ContextType, Partial<OrganizationUsers_AggregateArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Organization_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['organization_aggregate'] = ResolversParentTypes['organization_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['organization_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['organization']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Organization_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['organization_aggregate_fields'] = ResolversParentTypes['organization_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Organization_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['organization_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['organization_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Organization_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['organization_max_fields'] = ResolversParentTypes['organization_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Organization_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['organization_min_fields'] = ResolversParentTypes['organization_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Organization_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['organization_mutation_response'] = ResolversParentTypes['organization_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['organization']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  messages?: Resolver<Array<ResolversTypes['messages']>, ParentType, ContextType, Partial<Query_RootMessagesArgs>>;
  messages_aggregate?: Resolver<ResolversTypes['messages_aggregate'], ParentType, ContextType, Partial<Query_RootMessages_AggregateArgs>>;
  messages_by_pk?: Resolver<Maybe<ResolversTypes['messages']>, ParentType, ContextType, RequireFields<Query_RootMessages_By_PkArgs, 'id'>>;
  organization?: Resolver<Array<ResolversTypes['organization']>, ParentType, ContextType, Partial<Query_RootOrganizationArgs>>;
  organization_aggregate?: Resolver<ResolversTypes['organization_aggregate'], ParentType, ContextType, Partial<Query_RootOrganization_AggregateArgs>>;
  organization_by_pk?: Resolver<Maybe<ResolversTypes['organization']>, ParentType, ContextType, RequireFields<Query_RootOrganization_By_PkArgs, 'id'>>;
  room?: Resolver<Maybe<ResolversTypes['SchemaRooms']>, ParentType, ContextType>;
  rooms?: Resolver<Array<ResolversTypes['rooms']>, ParentType, ContextType, Partial<Query_RootRoomsArgs>>;
  rooms_aggregate?: Resolver<ResolversTypes['rooms_aggregate'], ParentType, ContextType, Partial<Query_RootRooms_AggregateArgs>>;
  rooms_by_pk?: Resolver<Maybe<ResolversTypes['rooms']>, ParentType, ContextType, RequireFields<Query_RootRooms_By_PkArgs, 'id'>>;
  user?: Resolver<Array<ResolversTypes['user']>, ParentType, ContextType, Partial<Query_RootUserArgs>>;
  user_aggregate?: Resolver<ResolversTypes['user_aggregate'], ParentType, ContextType, Partial<Query_RootUser_AggregateArgs>>;
  user_by_pk?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType, RequireFields<Query_RootUser_By_PkArgs, 'id'>>;
  user_join_tables_rooms?: Resolver<Array<ResolversTypes['user_join_tables_rooms']>, ParentType, ContextType, Partial<Query_RootUser_Join_Tables_RoomsArgs>>;
  user_join_tables_rooms_aggregate?: Resolver<ResolversTypes['user_join_tables_rooms_aggregate'], ParentType, ContextType, Partial<Query_RootUser_Join_Tables_Rooms_AggregateArgs>>;
  user_join_tables_rooms_by_pk?: Resolver<Maybe<ResolversTypes['user_join_tables_rooms']>, ParentType, ContextType, RequireFields<Query_RootUser_Join_Tables_Rooms_By_PkArgs, 'roomsId' | 'userId'>>;
  user_role?: Resolver<Array<ResolversTypes['user_role']>, ParentType, ContextType, Partial<Query_RootUser_RoleArgs>>;
  user_role_aggregate?: Resolver<ResolversTypes['user_role_aggregate'], ParentType, ContextType, Partial<Query_RootUser_Role_AggregateArgs>>;
  user_role_by_pk?: Resolver<Maybe<ResolversTypes['user_role']>, ParentType, ContextType, RequireFields<Query_RootUser_Role_By_PkArgs, 'id'>>;
};

export type RoomsResolvers<ContextType = any, ParentType extends ResolversParentTypes['rooms'] = ResolversParentTypes['rooms']> = {
  create_at?: Resolver<ResolversTypes['date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  messages?: Resolver<Array<ResolversTypes['messages']>, ParentType, ContextType, Partial<RoomsMessagesArgs>>;
  messages_aggregate?: Resolver<ResolversTypes['messages_aggregate'], ParentType, ContextType, Partial<RoomsMessages_AggregateArgs>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['organization']>, ParentType, ContextType>;
  organization_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  user_join_tables_rooms?: Resolver<Array<ResolversTypes['user_join_tables_rooms']>, ParentType, ContextType, Partial<RoomsUser_Join_Tables_RoomsArgs>>;
  user_join_tables_rooms_aggregate?: Resolver<ResolversTypes['user_join_tables_rooms_aggregate'], ParentType, ContextType, Partial<RoomsUser_Join_Tables_Rooms_AggregateArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Rooms_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['rooms_aggregate'] = ResolversParentTypes['rooms_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['rooms_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['rooms']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Rooms_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['rooms_aggregate_fields'] = ResolversParentTypes['rooms_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Rooms_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['rooms_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['rooms_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Rooms_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['rooms_max_fields'] = ResolversParentTypes['rooms_max_fields']> = {
  create_at?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Rooms_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['rooms_min_fields'] = ResolversParentTypes['rooms_min_fields']> = {
  create_at?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Rooms_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['rooms_mutation_response'] = ResolversParentTypes['rooms_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['rooms']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  messages?: SubscriptionResolver<Array<ResolversTypes['messages']>, "messages", ParentType, ContextType, Partial<Subscription_RootMessagesArgs>>;
  messages_aggregate?: SubscriptionResolver<ResolversTypes['messages_aggregate'], "messages_aggregate", ParentType, ContextType, Partial<Subscription_RootMessages_AggregateArgs>>;
  messages_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['messages']>, "messages_by_pk", ParentType, ContextType, RequireFields<Subscription_RootMessages_By_PkArgs, 'id'>>;
  messages_stream?: SubscriptionResolver<Array<ResolversTypes['messages']>, "messages_stream", ParentType, ContextType, RequireFields<Subscription_RootMessages_StreamArgs, 'batch_size' | 'cursor'>>;
  organization?: SubscriptionResolver<Array<ResolversTypes['organization']>, "organization", ParentType, ContextType, Partial<Subscription_RootOrganizationArgs>>;
  organization_aggregate?: SubscriptionResolver<ResolversTypes['organization_aggregate'], "organization_aggregate", ParentType, ContextType, Partial<Subscription_RootOrganization_AggregateArgs>>;
  organization_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['organization']>, "organization_by_pk", ParentType, ContextType, RequireFields<Subscription_RootOrganization_By_PkArgs, 'id'>>;
  organization_stream?: SubscriptionResolver<Array<ResolversTypes['organization']>, "organization_stream", ParentType, ContextType, RequireFields<Subscription_RootOrganization_StreamArgs, 'batch_size' | 'cursor'>>;
  rooms?: SubscriptionResolver<Array<ResolversTypes['rooms']>, "rooms", ParentType, ContextType, Partial<Subscription_RootRoomsArgs>>;
  rooms_aggregate?: SubscriptionResolver<ResolversTypes['rooms_aggregate'], "rooms_aggregate", ParentType, ContextType, Partial<Subscription_RootRooms_AggregateArgs>>;
  rooms_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['rooms']>, "rooms_by_pk", ParentType, ContextType, RequireFields<Subscription_RootRooms_By_PkArgs, 'id'>>;
  rooms_stream?: SubscriptionResolver<Array<ResolversTypes['rooms']>, "rooms_stream", ParentType, ContextType, RequireFields<Subscription_RootRooms_StreamArgs, 'batch_size' | 'cursor'>>;
  user?: SubscriptionResolver<Array<ResolversTypes['user']>, "user", ParentType, ContextType, Partial<Subscription_RootUserArgs>>;
  user_aggregate?: SubscriptionResolver<ResolversTypes['user_aggregate'], "user_aggregate", ParentType, ContextType, Partial<Subscription_RootUser_AggregateArgs>>;
  user_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['user']>, "user_by_pk", ParentType, ContextType, RequireFields<Subscription_RootUser_By_PkArgs, 'id'>>;
  user_join_tables_rooms?: SubscriptionResolver<Array<ResolversTypes['user_join_tables_rooms']>, "user_join_tables_rooms", ParentType, ContextType, Partial<Subscription_RootUser_Join_Tables_RoomsArgs>>;
  user_join_tables_rooms_aggregate?: SubscriptionResolver<ResolversTypes['user_join_tables_rooms_aggregate'], "user_join_tables_rooms_aggregate", ParentType, ContextType, Partial<Subscription_RootUser_Join_Tables_Rooms_AggregateArgs>>;
  user_join_tables_rooms_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['user_join_tables_rooms']>, "user_join_tables_rooms_by_pk", ParentType, ContextType, RequireFields<Subscription_RootUser_Join_Tables_Rooms_By_PkArgs, 'roomsId' | 'userId'>>;
  user_join_tables_rooms_stream?: SubscriptionResolver<Array<ResolversTypes['user_join_tables_rooms']>, "user_join_tables_rooms_stream", ParentType, ContextType, RequireFields<Subscription_RootUser_Join_Tables_Rooms_StreamArgs, 'batch_size' | 'cursor'>>;
  user_role?: SubscriptionResolver<Array<ResolversTypes['user_role']>, "user_role", ParentType, ContextType, Partial<Subscription_RootUser_RoleArgs>>;
  user_role_aggregate?: SubscriptionResolver<ResolversTypes['user_role_aggregate'], "user_role_aggregate", ParentType, ContextType, Partial<Subscription_RootUser_Role_AggregateArgs>>;
  user_role_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['user_role']>, "user_role_by_pk", ParentType, ContextType, RequireFields<Subscription_RootUser_Role_By_PkArgs, 'id'>>;
  user_role_stream?: SubscriptionResolver<Array<ResolversTypes['user_role']>, "user_role_stream", ParentType, ContextType, RequireFields<Subscription_RootUser_Role_StreamArgs, 'batch_size' | 'cursor'>>;
  user_stream?: SubscriptionResolver<Array<ResolversTypes['user']>, "user_stream", ParentType, ContextType, RequireFields<Subscription_RootUser_StreamArgs, 'batch_size' | 'cursor'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['user'] = ResolversParentTypes['user']> = {
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  join_at?: Resolver<ResolversTypes['date'], ParentType, ContextType>;
  messages?: Resolver<Array<ResolversTypes['messages']>, ParentType, ContextType, Partial<UserMessagesArgs>>;
  messages_aggregate?: Resolver<ResolversTypes['messages_aggregate'], ParentType, ContextType, Partial<UserMessages_AggregateArgs>>;
  organization?: Resolver<Maybe<ResolversTypes['organization']>, ParentType, ContextType>;
  organization_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  push_flag?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  role_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user_join_tables_rooms?: Resolver<Array<ResolversTypes['user_join_tables_rooms']>, ParentType, ContextType, Partial<UserUser_Join_Tables_RoomsArgs>>;
  user_join_tables_rooms_aggregate?: Resolver<ResolversTypes['user_join_tables_rooms_aggregate'], ParentType, ContextType, Partial<UserUser_Join_Tables_Rooms_AggregateArgs>>;
  user_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user_role?: Resolver<Maybe<ResolversTypes['user_role']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_aggregate'] = ResolversParentTypes['user_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['user_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['user']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_aggregate_fields'] = ResolversParentTypes['user_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['user_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<User_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['user_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['user_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['user_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['user_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['user_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['user_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['user_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['user_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['user_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_avg_fields'] = ResolversParentTypes['user_avg_fields']> = {
  role_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Join_Tables_RoomsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_join_tables_rooms'] = ResolversParentTypes['user_join_tables_rooms']> = {
  room?: Resolver<ResolversTypes['rooms'], ParentType, ContextType>;
  roomsId?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['user'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Join_Tables_Rooms_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_join_tables_rooms_aggregate'] = ResolversParentTypes['user_join_tables_rooms_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['user_join_tables_rooms_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['user_join_tables_rooms']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Join_Tables_Rooms_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_join_tables_rooms_aggregate_fields'] = ResolversParentTypes['user_join_tables_rooms_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<User_Join_Tables_Rooms_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['user_join_tables_rooms_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['user_join_tables_rooms_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Join_Tables_Rooms_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_join_tables_rooms_max_fields'] = ResolversParentTypes['user_join_tables_rooms_max_fields']> = {
  roomsId?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Join_Tables_Rooms_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_join_tables_rooms_min_fields'] = ResolversParentTypes['user_join_tables_rooms_min_fields']> = {
  roomsId?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Join_Tables_Rooms_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_join_tables_rooms_mutation_response'] = ResolversParentTypes['user_join_tables_rooms_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['user_join_tables_rooms']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_max_fields'] = ResolversParentTypes['user_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  join_at?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  organization_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  role_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_min_fields'] = ResolversParentTypes['user_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  join_at?: Resolver<Maybe<ResolversTypes['date']>, ParentType, ContextType>;
  organization_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  role_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_mutation_response'] = ResolversParentTypes['user_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['user']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_RoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role'] = ResolversParentTypes['user_role']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['user']>, ParentType, ContextType, Partial<User_RoleUsersArgs>>;
  users_aggregate?: Resolver<ResolversTypes['user_aggregate'], ParentType, ContextType, Partial<User_RoleUsers_AggregateArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Role_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_aggregate'] = ResolversParentTypes['user_role_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['user_role_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['user_role']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Role_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_aggregate_fields'] = ResolversParentTypes['user_role_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['user_role_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<User_Role_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['user_role_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['user_role_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['user_role_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['user_role_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['user_role_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['user_role_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['user_role_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['user_role_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['user_role_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Role_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_avg_fields'] = ResolversParentTypes['user_role_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Role_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_max_fields'] = ResolversParentTypes['user_role_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Role_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_min_fields'] = ResolversParentTypes['user_role_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Role_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_mutation_response'] = ResolversParentTypes['user_role_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['user_role']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Role_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_stddev_fields'] = ResolversParentTypes['user_role_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Role_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_stddev_pop_fields'] = ResolversParentTypes['user_role_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Role_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_stddev_samp_fields'] = ResolversParentTypes['user_role_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Role_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_sum_fields'] = ResolversParentTypes['user_role_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Role_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_var_pop_fields'] = ResolversParentTypes['user_role_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Role_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_var_samp_fields'] = ResolversParentTypes['user_role_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Role_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_role_variance_fields'] = ResolversParentTypes['user_role_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_stddev_fields'] = ResolversParentTypes['user_stddev_fields']> = {
  role_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_stddev_pop_fields'] = ResolversParentTypes['user_stddev_pop_fields']> = {
  role_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_stddev_samp_fields'] = ResolversParentTypes['user_stddev_samp_fields']> = {
  role_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_sum_fields'] = ResolversParentTypes['user_sum_fields']> = {
  role_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_var_pop_fields'] = ResolversParentTypes['user_var_pop_fields']> = {
  role_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_var_samp_fields'] = ResolversParentTypes['user_var_samp_fields']> = {
  role_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_variance_fields'] = ResolversParentTypes['user_variance_fields']> = {
  role_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type Resolvers<ContextType = any> = {
  SchemaOrganization?: SchemaOrganizationResolvers<ContextType>;
  SchemaRooms?: SchemaRoomsResolvers<ContextType>;
  date?: GraphQLScalarType;
  messages?: MessagesResolvers<ContextType>;
  messages_aggregate?: Messages_AggregateResolvers<ContextType>;
  messages_aggregate_fields?: Messages_Aggregate_FieldsResolvers<ContextType>;
  messages_avg_fields?: Messages_Avg_FieldsResolvers<ContextType>;
  messages_max_fields?: Messages_Max_FieldsResolvers<ContextType>;
  messages_min_fields?: Messages_Min_FieldsResolvers<ContextType>;
  messages_mutation_response?: Messages_Mutation_ResponseResolvers<ContextType>;
  messages_stddev_fields?: Messages_Stddev_FieldsResolvers<ContextType>;
  messages_stddev_pop_fields?: Messages_Stddev_Pop_FieldsResolvers<ContextType>;
  messages_stddev_samp_fields?: Messages_Stddev_Samp_FieldsResolvers<ContextType>;
  messages_sum_fields?: Messages_Sum_FieldsResolvers<ContextType>;
  messages_var_pop_fields?: Messages_Var_Pop_FieldsResolvers<ContextType>;
  messages_var_samp_fields?: Messages_Var_Samp_FieldsResolvers<ContextType>;
  messages_variance_fields?: Messages_Variance_FieldsResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  organization?: OrganizationResolvers<ContextType>;
  organization_aggregate?: Organization_AggregateResolvers<ContextType>;
  organization_aggregate_fields?: Organization_Aggregate_FieldsResolvers<ContextType>;
  organization_max_fields?: Organization_Max_FieldsResolvers<ContextType>;
  organization_min_fields?: Organization_Min_FieldsResolvers<ContextType>;
  organization_mutation_response?: Organization_Mutation_ResponseResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  rooms?: RoomsResolvers<ContextType>;
  rooms_aggregate?: Rooms_AggregateResolvers<ContextType>;
  rooms_aggregate_fields?: Rooms_Aggregate_FieldsResolvers<ContextType>;
  rooms_max_fields?: Rooms_Max_FieldsResolvers<ContextType>;
  rooms_min_fields?: Rooms_Min_FieldsResolvers<ContextType>;
  rooms_mutation_response?: Rooms_Mutation_ResponseResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  user?: UserResolvers<ContextType>;
  user_aggregate?: User_AggregateResolvers<ContextType>;
  user_aggregate_fields?: User_Aggregate_FieldsResolvers<ContextType>;
  user_avg_fields?: User_Avg_FieldsResolvers<ContextType>;
  user_join_tables_rooms?: User_Join_Tables_RoomsResolvers<ContextType>;
  user_join_tables_rooms_aggregate?: User_Join_Tables_Rooms_AggregateResolvers<ContextType>;
  user_join_tables_rooms_aggregate_fields?: User_Join_Tables_Rooms_Aggregate_FieldsResolvers<ContextType>;
  user_join_tables_rooms_max_fields?: User_Join_Tables_Rooms_Max_FieldsResolvers<ContextType>;
  user_join_tables_rooms_min_fields?: User_Join_Tables_Rooms_Min_FieldsResolvers<ContextType>;
  user_join_tables_rooms_mutation_response?: User_Join_Tables_Rooms_Mutation_ResponseResolvers<ContextType>;
  user_max_fields?: User_Max_FieldsResolvers<ContextType>;
  user_min_fields?: User_Min_FieldsResolvers<ContextType>;
  user_mutation_response?: User_Mutation_ResponseResolvers<ContextType>;
  user_role?: User_RoleResolvers<ContextType>;
  user_role_aggregate?: User_Role_AggregateResolvers<ContextType>;
  user_role_aggregate_fields?: User_Role_Aggregate_FieldsResolvers<ContextType>;
  user_role_avg_fields?: User_Role_Avg_FieldsResolvers<ContextType>;
  user_role_max_fields?: User_Role_Max_FieldsResolvers<ContextType>;
  user_role_min_fields?: User_Role_Min_FieldsResolvers<ContextType>;
  user_role_mutation_response?: User_Role_Mutation_ResponseResolvers<ContextType>;
  user_role_stddev_fields?: User_Role_Stddev_FieldsResolvers<ContextType>;
  user_role_stddev_pop_fields?: User_Role_Stddev_Pop_FieldsResolvers<ContextType>;
  user_role_stddev_samp_fields?: User_Role_Stddev_Samp_FieldsResolvers<ContextType>;
  user_role_sum_fields?: User_Role_Sum_FieldsResolvers<ContextType>;
  user_role_var_pop_fields?: User_Role_Var_Pop_FieldsResolvers<ContextType>;
  user_role_var_samp_fields?: User_Role_Var_Samp_FieldsResolvers<ContextType>;
  user_role_variance_fields?: User_Role_Variance_FieldsResolvers<ContextType>;
  user_stddev_fields?: User_Stddev_FieldsResolvers<ContextType>;
  user_stddev_pop_fields?: User_Stddev_Pop_FieldsResolvers<ContextType>;
  user_stddev_samp_fields?: User_Stddev_Samp_FieldsResolvers<ContextType>;
  user_sum_fields?: User_Sum_FieldsResolvers<ContextType>;
  user_var_pop_fields?: User_Var_Pop_FieldsResolvers<ContextType>;
  user_var_samp_fields?: User_Var_Samp_FieldsResolvers<ContextType>;
  user_variance_fields?: User_Variance_FieldsResolvers<ContextType>;
  uuid?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};
