// @ts-nocheck
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

/** The block at which the query should be executed. */
export type Block_height = {
  /** Value containing a block hash */
  hash?: InputMaybe<Scalars['Bytes']>;
  /** Value containing a block number */
  number?: InputMaybe<Scalars['Int']>;
  /**
   * Value containing the minimum block number.
   * In the case of `number_gte`, the query will be executed on the latest block only if
   * the subgraph has progressed to or past the minimum block number.
   * Defaults to the latest block when omitted.
   *
   */
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Fren = {
  id: Scalars['Bytes'];
  poolFrens: Array<PoolFren>;
  totalDeptCredit: Scalars['BigInt'];
};


export type FrenpoolFrensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolFren_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolFren_filter>;
};

export type Fren_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  totalDeptCredit?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_not?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_gt?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_lt?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_gte?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_lte?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeptCredit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Fren_orderBy =
  | 'id'
  | 'poolFrens'
  | 'totalDeptCredit';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Pool = {
  id: Scalars['Bytes'];
  totalDeptCredit: Scalars['BigInt'];
  members: Array<Scalars['Bytes']>;
  poolFrens: Array<PoolFren>;
};


export type PoolpoolFrensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolFren_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolFren_filter>;
};

export type PoolCreated = {
  id: Scalars['ID'];
  childAddress: Scalars['Bytes'];
  members: Array<Scalars['Bytes']>;
};

export type PoolCreated_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  childAddress?: InputMaybe<Scalars['Bytes']>;
  childAddress_not?: InputMaybe<Scalars['Bytes']>;
  childAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  childAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  childAddress_contains?: InputMaybe<Scalars['Bytes']>;
  childAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  members?: InputMaybe<Array<Scalars['Bytes']>>;
  members_not?: InputMaybe<Array<Scalars['Bytes']>>;
  members_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  members_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  members_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  members_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
};

export type PoolCreated_orderBy =
  | 'id'
  | 'childAddress'
  | 'members';

export type PoolFren = {
  id: Scalars['Bytes'];
  pool: Pool;
  fren: Fren;
  deptCredit: Scalars['BigInt'];
};

export type PoolFren_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fren?: InputMaybe<Scalars['String']>;
  fren_not?: InputMaybe<Scalars['String']>;
  fren_gt?: InputMaybe<Scalars['String']>;
  fren_lt?: InputMaybe<Scalars['String']>;
  fren_gte?: InputMaybe<Scalars['String']>;
  fren_lte?: InputMaybe<Scalars['String']>;
  fren_in?: InputMaybe<Array<Scalars['String']>>;
  fren_not_in?: InputMaybe<Array<Scalars['String']>>;
  fren_contains?: InputMaybe<Scalars['String']>;
  fren_contains_nocase?: InputMaybe<Scalars['String']>;
  fren_not_contains?: InputMaybe<Scalars['String']>;
  fren_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fren_starts_with?: InputMaybe<Scalars['String']>;
  fren_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fren_not_starts_with?: InputMaybe<Scalars['String']>;
  fren_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fren_ends_with?: InputMaybe<Scalars['String']>;
  fren_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fren_not_ends_with?: InputMaybe<Scalars['String']>;
  fren_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  deptCredit?: InputMaybe<Scalars['BigInt']>;
  deptCredit_not?: InputMaybe<Scalars['BigInt']>;
  deptCredit_gt?: InputMaybe<Scalars['BigInt']>;
  deptCredit_lt?: InputMaybe<Scalars['BigInt']>;
  deptCredit_gte?: InputMaybe<Scalars['BigInt']>;
  deptCredit_lte?: InputMaybe<Scalars['BigInt']>;
  deptCredit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deptCredit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type PoolFren_orderBy =
  | 'id'
  | 'pool'
  | 'fren'
  | 'deptCredit';

export type Pool_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  totalDeptCredit?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_not?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_gt?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_lt?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_gte?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_lte?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeptCredit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  members?: InputMaybe<Array<Scalars['Bytes']>>;
  members_not?: InputMaybe<Array<Scalars['Bytes']>>;
  members_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  members_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  members_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  members_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
};

export type Pool_orderBy =
  | 'id'
  | 'totalDeptCredit'
  | 'members'
  | 'poolFrens';

export type Query = {
  poolCreated?: Maybe<PoolCreated>;
  poolCreateds: Array<PoolCreated>;
  registerExpense?: Maybe<RegisterExpense>;
  registerExpenses: Array<RegisterExpense>;
  transferBatch?: Maybe<TransferBatch>;
  transferBatches: Array<TransferBatch>;
  transferSingle?: Maybe<TransferSingle>;
  transferSingles: Array<TransferSingle>;
  uri?: Maybe<URI>;
  uris: Array<URI>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  poolFren?: Maybe<PoolFren>;
  poolFrens: Array<PoolFren>;
  fren?: Maybe<Fren>;
  frens: Array<Fren>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerypoolCreatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolCreatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolCreated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolCreated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregisterExpenseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregisterExpensesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RegisterExpense_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RegisterExpense_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferBatchArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferBatchesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferBatch_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferBatch_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferSingleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferSinglesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferSingle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferSingle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuriArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryurisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<URI_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<URI_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolFrenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolFrensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolFren_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolFren_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfrenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfrensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Fren_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Fren_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type RegisterExpense = {
  id: Scalars['ID'];
  payer: Scalars['Bytes'];
  participants: Array<Scalars['Bytes']>;
  amount: Scalars['BigInt'];
  description: Scalars['String'];
};

export type RegisterExpense_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  payer?: InputMaybe<Scalars['Bytes']>;
  payer_not?: InputMaybe<Scalars['Bytes']>;
  payer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  payer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  payer_contains?: InputMaybe<Scalars['Bytes']>;
  payer_not_contains?: InputMaybe<Scalars['Bytes']>;
  participants?: InputMaybe<Array<Scalars['Bytes']>>;
  participants_not?: InputMaybe<Array<Scalars['Bytes']>>;
  participants_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  participants_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  participants_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  participants_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
};

export type RegisterExpense_orderBy =
  | 'id'
  | 'payer'
  | 'participants'
  | 'amount'
  | 'description';

export type Subscription = {
  poolCreated?: Maybe<PoolCreated>;
  poolCreateds: Array<PoolCreated>;
  registerExpense?: Maybe<RegisterExpense>;
  registerExpenses: Array<RegisterExpense>;
  transferBatch?: Maybe<TransferBatch>;
  transferBatches: Array<TransferBatch>;
  transferSingle?: Maybe<TransferSingle>;
  transferSingles: Array<TransferSingle>;
  uri?: Maybe<URI>;
  uris: Array<URI>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  poolFren?: Maybe<PoolFren>;
  poolFrens: Array<PoolFren>;
  fren?: Maybe<Fren>;
  frens: Array<Fren>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionpoolCreatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolCreatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolCreated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolCreated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregisterExpenseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregisterExpensesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RegisterExpense_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RegisterExpense_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferBatchArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferBatchesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferBatch_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferBatch_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferSingleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferSinglesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferSingle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferSingle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuriArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionurisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<URI_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<URI_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolFrenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolFrensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolFren_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolFren_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfrenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfrensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Fren_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Fren_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type TransferBatch = {
  id: Scalars['ID'];
  operator: Scalars['Bytes'];
  from: Scalars['Bytes'];
  to: Scalars['Bytes'];
  ids: Array<Scalars['BigInt']>;
  values: Array<Scalars['BigInt']>;
};

export type TransferBatch_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  ids?: InputMaybe<Array<Scalars['BigInt']>>;
  ids_not?: InputMaybe<Array<Scalars['BigInt']>>;
  ids_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  ids_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  ids_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  ids_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  values?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type TransferBatch_orderBy =
  | 'id'
  | 'operator'
  | 'from'
  | 'to'
  | 'ids'
  | 'values';

export type TransferSingle = {
  id: Scalars['ID'];
  operator: Scalars['Bytes'];
  from: Scalars['Bytes'];
  to: Scalars['Bytes'];
  value: Scalars['BigInt'];
};

export type TransferSingle_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  value?: InputMaybe<Scalars['BigInt']>;
  value_not?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type TransferSingle_orderBy =
  | 'id'
  | 'operator'
  | 'from'
  | 'to'
  | 'value';

export type URI = {
  id: Scalars['ID'];
  value: Scalars['String'];
};

export type URI_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  value?: InputMaybe<Scalars['String']>;
  value_not?: InputMaybe<Scalars['String']>;
  value_gt?: InputMaybe<Scalars['String']>;
  value_lt?: InputMaybe<Scalars['String']>;
  value_gte?: InputMaybe<Scalars['String']>;
  value_lte?: InputMaybe<Scalars['String']>;
  value_in?: InputMaybe<Array<Scalars['String']>>;
  value_not_in?: InputMaybe<Array<Scalars['String']>>;
  value_contains?: InputMaybe<Scalars['String']>;
  value_contains_nocase?: InputMaybe<Scalars['String']>;
  value_not_contains?: InputMaybe<Scalars['String']>;
  value_not_contains_nocase?: InputMaybe<Scalars['String']>;
  value_starts_with?: InputMaybe<Scalars['String']>;
  value_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  value_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value_ends_with?: InputMaybe<Scalars['String']>;
  value_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  value_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
};

export type URI_orderBy =
  | 'id'
  | 'value';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

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
export type ResolversTypes = ResolversObject<{
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Fren: ResolverTypeWrapper<Fren>;
  Fren_filter: Fren_filter;
  Fren_orderBy: Fren_orderBy;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  OrderDirection: OrderDirection;
  Pool: ResolverTypeWrapper<Pool>;
  PoolCreated: ResolverTypeWrapper<PoolCreated>;
  PoolCreated_filter: PoolCreated_filter;
  PoolCreated_orderBy: PoolCreated_orderBy;
  PoolFren: ResolverTypeWrapper<PoolFren>;
  PoolFren_filter: PoolFren_filter;
  PoolFren_orderBy: PoolFren_orderBy;
  Pool_filter: Pool_filter;
  Pool_orderBy: Pool_orderBy;
  Query: ResolverTypeWrapper<{}>;
  RegisterExpense: ResolverTypeWrapper<RegisterExpense>;
  RegisterExpense_filter: RegisterExpense_filter;
  RegisterExpense_orderBy: RegisterExpense_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  TransferBatch: ResolverTypeWrapper<TransferBatch>;
  TransferBatch_filter: TransferBatch_filter;
  TransferBatch_orderBy: TransferBatch_orderBy;
  TransferSingle: ResolverTypeWrapper<TransferSingle>;
  TransferSingle_filter: TransferSingle_filter;
  TransferSingle_orderBy: TransferSingle_orderBy;
  URI: ResolverTypeWrapper<URI>;
  URI_filter: URI_filter;
  URI_orderBy: URI_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  Float: Scalars['Float'];
  Fren: Fren;
  Fren_filter: Fren_filter;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Pool: Pool;
  PoolCreated: PoolCreated;
  PoolCreated_filter: PoolCreated_filter;
  PoolFren: PoolFren;
  PoolFren_filter: PoolFren_filter;
  Pool_filter: Pool_filter;
  Query: {};
  RegisterExpense: RegisterExpense;
  RegisterExpense_filter: RegisterExpense_filter;
  String: Scalars['String'];
  Subscription: {};
  TransferBatch: TransferBatch;
  TransferBatch_filter: TransferBatch_filter;
  TransferSingle: TransferSingle;
  TransferSingle_filter: TransferSingle_filter;
  URI: URI;
  URI_filter: URI_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type FrenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Fren'] = ResolversParentTypes['Fren']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  poolFrens?: Resolver<Array<ResolversTypes['PoolFren']>, ParentType, ContextType, RequireFields<FrenpoolFrensArgs, 'skip' | 'first'>>;
  totalDeptCredit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Pool'] = ResolversParentTypes['Pool']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  totalDeptCredit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  poolFrens?: Resolver<Array<ResolversTypes['PoolFren']>, ParentType, ContextType, RequireFields<PoolpoolFrensArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolCreatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PoolCreated'] = ResolversParentTypes['PoolCreated']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  childAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolFrenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PoolFren'] = ResolversParentTypes['PoolFren']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  fren?: Resolver<ResolversTypes['Fren'], ParentType, ContextType>;
  deptCredit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  poolCreated?: Resolver<Maybe<ResolversTypes['PoolCreated']>, ParentType, ContextType, RequireFields<QuerypoolCreatedArgs, 'id' | 'subgraphError'>>;
  poolCreateds?: Resolver<Array<ResolversTypes['PoolCreated']>, ParentType, ContextType, RequireFields<QuerypoolCreatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  registerExpense?: Resolver<Maybe<ResolversTypes['RegisterExpense']>, ParentType, ContextType, RequireFields<QueryregisterExpenseArgs, 'id' | 'subgraphError'>>;
  registerExpenses?: Resolver<Array<ResolversTypes['RegisterExpense']>, ParentType, ContextType, RequireFields<QueryregisterExpensesArgs, 'skip' | 'first' | 'subgraphError'>>;
  transferBatch?: Resolver<Maybe<ResolversTypes['TransferBatch']>, ParentType, ContextType, RequireFields<QuerytransferBatchArgs, 'id' | 'subgraphError'>>;
  transferBatches?: Resolver<Array<ResolversTypes['TransferBatch']>, ParentType, ContextType, RequireFields<QuerytransferBatchesArgs, 'skip' | 'first' | 'subgraphError'>>;
  transferSingle?: Resolver<Maybe<ResolversTypes['TransferSingle']>, ParentType, ContextType, RequireFields<QuerytransferSingleArgs, 'id' | 'subgraphError'>>;
  transferSingles?: Resolver<Array<ResolversTypes['TransferSingle']>, ParentType, ContextType, RequireFields<QuerytransferSinglesArgs, 'skip' | 'first' | 'subgraphError'>>;
  uri?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType, RequireFields<QueryuriArgs, 'id' | 'subgraphError'>>;
  uris?: Resolver<Array<ResolversTypes['URI']>, ParentType, ContextType, RequireFields<QueryurisArgs, 'skip' | 'first' | 'subgraphError'>>;
  pool?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<QuerypoolArgs, 'id' | 'subgraphError'>>;
  pools?: Resolver<Array<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<QuerypoolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  poolFren?: Resolver<Maybe<ResolversTypes['PoolFren']>, ParentType, ContextType, RequireFields<QuerypoolFrenArgs, 'id' | 'subgraphError'>>;
  poolFrens?: Resolver<Array<ResolversTypes['PoolFren']>, ParentType, ContextType, RequireFields<QuerypoolFrensArgs, 'skip' | 'first' | 'subgraphError'>>;
  fren?: Resolver<Maybe<ResolversTypes['Fren']>, ParentType, ContextType, RequireFields<QueryfrenArgs, 'id' | 'subgraphError'>>;
  frens?: Resolver<Array<ResolversTypes['Fren']>, ParentType, ContextType, RequireFields<QueryfrensArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type RegisterExpenseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RegisterExpense'] = ResolversParentTypes['RegisterExpense']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  payer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  participants?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  poolCreated?: SubscriptionResolver<Maybe<ResolversTypes['PoolCreated']>, "poolCreated", ParentType, ContextType, RequireFields<SubscriptionpoolCreatedArgs, 'id' | 'subgraphError'>>;
  poolCreateds?: SubscriptionResolver<Array<ResolversTypes['PoolCreated']>, "poolCreateds", ParentType, ContextType, RequireFields<SubscriptionpoolCreatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  registerExpense?: SubscriptionResolver<Maybe<ResolversTypes['RegisterExpense']>, "registerExpense", ParentType, ContextType, RequireFields<SubscriptionregisterExpenseArgs, 'id' | 'subgraphError'>>;
  registerExpenses?: SubscriptionResolver<Array<ResolversTypes['RegisterExpense']>, "registerExpenses", ParentType, ContextType, RequireFields<SubscriptionregisterExpensesArgs, 'skip' | 'first' | 'subgraphError'>>;
  transferBatch?: SubscriptionResolver<Maybe<ResolversTypes['TransferBatch']>, "transferBatch", ParentType, ContextType, RequireFields<SubscriptiontransferBatchArgs, 'id' | 'subgraphError'>>;
  transferBatches?: SubscriptionResolver<Array<ResolversTypes['TransferBatch']>, "transferBatches", ParentType, ContextType, RequireFields<SubscriptiontransferBatchesArgs, 'skip' | 'first' | 'subgraphError'>>;
  transferSingle?: SubscriptionResolver<Maybe<ResolversTypes['TransferSingle']>, "transferSingle", ParentType, ContextType, RequireFields<SubscriptiontransferSingleArgs, 'id' | 'subgraphError'>>;
  transferSingles?: SubscriptionResolver<Array<ResolversTypes['TransferSingle']>, "transferSingles", ParentType, ContextType, RequireFields<SubscriptiontransferSinglesArgs, 'skip' | 'first' | 'subgraphError'>>;
  uri?: SubscriptionResolver<Maybe<ResolversTypes['URI']>, "uri", ParentType, ContextType, RequireFields<SubscriptionuriArgs, 'id' | 'subgraphError'>>;
  uris?: SubscriptionResolver<Array<ResolversTypes['URI']>, "uris", ParentType, ContextType, RequireFields<SubscriptionurisArgs, 'skip' | 'first' | 'subgraphError'>>;
  pool?: SubscriptionResolver<Maybe<ResolversTypes['Pool']>, "pool", ParentType, ContextType, RequireFields<SubscriptionpoolArgs, 'id' | 'subgraphError'>>;
  pools?: SubscriptionResolver<Array<ResolversTypes['Pool']>, "pools", ParentType, ContextType, RequireFields<SubscriptionpoolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  poolFren?: SubscriptionResolver<Maybe<ResolversTypes['PoolFren']>, "poolFren", ParentType, ContextType, RequireFields<SubscriptionpoolFrenArgs, 'id' | 'subgraphError'>>;
  poolFrens?: SubscriptionResolver<Array<ResolversTypes['PoolFren']>, "poolFrens", ParentType, ContextType, RequireFields<SubscriptionpoolFrensArgs, 'skip' | 'first' | 'subgraphError'>>;
  fren?: SubscriptionResolver<Maybe<ResolversTypes['Fren']>, "fren", ParentType, ContextType, RequireFields<SubscriptionfrenArgs, 'id' | 'subgraphError'>>;
  frens?: SubscriptionResolver<Array<ResolversTypes['Fren']>, "frens", ParentType, ContextType, RequireFields<SubscriptionfrensArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type TransferBatchResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TransferBatch'] = ResolversParentTypes['TransferBatch']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  ids?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  values?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransferSingleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TransferSingle'] = ResolversParentTypes['TransferSingle']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type URIResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['URI'] = ResolversParentTypes['URI']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Fren?: FrenResolvers<ContextType>;
  Pool?: PoolResolvers<ContextType>;
  PoolCreated?: PoolCreatedResolvers<ContextType>;
  PoolFren?: PoolFrenResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RegisterExpense?: RegisterExpenseResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  TransferBatch?: TransferBatchResolvers<ContextType>;
  TransferSingle?: TransferSingleResolvers<ContextType>;
  URI?: URIResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace LocalhostTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

/** The block at which the query should be executed. */
export type Block_height = {
  /** Value containing a block hash */
  hash?: InputMaybe<Scalars['Bytes']>;
  /** Value containing a block number */
  number?: InputMaybe<Scalars['Int']>;
  /**
   * Value containing the minimum block number.
   * In the case of `number_gte`, the query will be executed on the latest block only if
   * the subgraph has progressed to or past the minimum block number.
   * Defaults to the latest block when omitted.
   *
   */
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Fren = {
  id: Scalars['Bytes'];
  poolFrens: Array<PoolFren>;
  totalDeptCredit: Scalars['BigInt'];
};


export type FrenpoolFrensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolFren_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolFren_filter>;
};

export type Fren_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  totalDeptCredit?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_not?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_gt?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_lt?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_gte?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_lte?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeptCredit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Fren_orderBy =
  | 'id'
  | 'poolFrens'
  | 'totalDeptCredit';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Pool = {
  id: Scalars['Bytes'];
  totalDeptCredit: Scalars['BigInt'];
  members: Array<Scalars['Bytes']>;
  poolFrens: Array<PoolFren>;
};


export type PoolpoolFrensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolFren_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolFren_filter>;
};

export type PoolCreated = {
  id: Scalars['ID'];
  childAddress: Scalars['Bytes'];
  members: Array<Scalars['Bytes']>;
};

export type PoolCreated_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  childAddress?: InputMaybe<Scalars['Bytes']>;
  childAddress_not?: InputMaybe<Scalars['Bytes']>;
  childAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  childAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  childAddress_contains?: InputMaybe<Scalars['Bytes']>;
  childAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  members?: InputMaybe<Array<Scalars['Bytes']>>;
  members_not?: InputMaybe<Array<Scalars['Bytes']>>;
  members_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  members_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  members_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  members_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
};

export type PoolCreated_orderBy =
  | 'id'
  | 'childAddress'
  | 'members';

export type PoolFren = {
  id: Scalars['Bytes'];
  pool: Pool;
  fren: Fren;
  deptCredit: Scalars['BigInt'];
};

export type PoolFren_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fren?: InputMaybe<Scalars['String']>;
  fren_not?: InputMaybe<Scalars['String']>;
  fren_gt?: InputMaybe<Scalars['String']>;
  fren_lt?: InputMaybe<Scalars['String']>;
  fren_gte?: InputMaybe<Scalars['String']>;
  fren_lte?: InputMaybe<Scalars['String']>;
  fren_in?: InputMaybe<Array<Scalars['String']>>;
  fren_not_in?: InputMaybe<Array<Scalars['String']>>;
  fren_contains?: InputMaybe<Scalars['String']>;
  fren_contains_nocase?: InputMaybe<Scalars['String']>;
  fren_not_contains?: InputMaybe<Scalars['String']>;
  fren_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fren_starts_with?: InputMaybe<Scalars['String']>;
  fren_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fren_not_starts_with?: InputMaybe<Scalars['String']>;
  fren_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fren_ends_with?: InputMaybe<Scalars['String']>;
  fren_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fren_not_ends_with?: InputMaybe<Scalars['String']>;
  fren_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  deptCredit?: InputMaybe<Scalars['BigInt']>;
  deptCredit_not?: InputMaybe<Scalars['BigInt']>;
  deptCredit_gt?: InputMaybe<Scalars['BigInt']>;
  deptCredit_lt?: InputMaybe<Scalars['BigInt']>;
  deptCredit_gte?: InputMaybe<Scalars['BigInt']>;
  deptCredit_lte?: InputMaybe<Scalars['BigInt']>;
  deptCredit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deptCredit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type PoolFren_orderBy =
  | 'id'
  | 'pool'
  | 'fren'
  | 'deptCredit';

export type Pool_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  totalDeptCredit?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_not?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_gt?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_lt?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_gte?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_lte?: InputMaybe<Scalars['BigInt']>;
  totalDeptCredit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalDeptCredit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  members?: InputMaybe<Array<Scalars['Bytes']>>;
  members_not?: InputMaybe<Array<Scalars['Bytes']>>;
  members_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  members_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  members_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  members_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
};

export type Pool_orderBy =
  | 'id'
  | 'totalDeptCredit'
  | 'members'
  | 'poolFrens';

export type Query = {
  poolCreated?: Maybe<PoolCreated>;
  poolCreateds: Array<PoolCreated>;
  registerExpense?: Maybe<RegisterExpense>;
  registerExpenses: Array<RegisterExpense>;
  transferBatch?: Maybe<TransferBatch>;
  transferBatches: Array<TransferBatch>;
  transferSingle?: Maybe<TransferSingle>;
  transferSingles: Array<TransferSingle>;
  uri?: Maybe<URI>;
  uris: Array<URI>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  poolFren?: Maybe<PoolFren>;
  poolFrens: Array<PoolFren>;
  fren?: Maybe<Fren>;
  frens: Array<Fren>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerypoolCreatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolCreatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolCreated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolCreated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregisterExpenseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregisterExpensesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RegisterExpense_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RegisterExpense_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferBatchArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferBatchesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferBatch_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferBatch_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferSingleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferSinglesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferSingle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferSingle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuriArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryurisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<URI_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<URI_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolFrenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolFrensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolFren_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolFren_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfrenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfrensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Fren_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Fren_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type RegisterExpense = {
  id: Scalars['ID'];
  payer: Scalars['Bytes'];
  participants: Array<Scalars['Bytes']>;
  amount: Scalars['BigInt'];
  description: Scalars['String'];
};

export type RegisterExpense_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  payer?: InputMaybe<Scalars['Bytes']>;
  payer_not?: InputMaybe<Scalars['Bytes']>;
  payer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  payer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  payer_contains?: InputMaybe<Scalars['Bytes']>;
  payer_not_contains?: InputMaybe<Scalars['Bytes']>;
  participants?: InputMaybe<Array<Scalars['Bytes']>>;
  participants_not?: InputMaybe<Array<Scalars['Bytes']>>;
  participants_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  participants_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  participants_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  participants_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
};

export type RegisterExpense_orderBy =
  | 'id'
  | 'payer'
  | 'participants'
  | 'amount'
  | 'description';

export type Subscription = {
  poolCreated?: Maybe<PoolCreated>;
  poolCreateds: Array<PoolCreated>;
  registerExpense?: Maybe<RegisterExpense>;
  registerExpenses: Array<RegisterExpense>;
  transferBatch?: Maybe<TransferBatch>;
  transferBatches: Array<TransferBatch>;
  transferSingle?: Maybe<TransferSingle>;
  transferSingles: Array<TransferSingle>;
  uri?: Maybe<URI>;
  uris: Array<URI>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  poolFren?: Maybe<PoolFren>;
  poolFrens: Array<PoolFren>;
  fren?: Maybe<Fren>;
  frens: Array<Fren>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionpoolCreatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolCreatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolCreated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolCreated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregisterExpenseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregisterExpensesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RegisterExpense_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RegisterExpense_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferBatchArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferBatchesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferBatch_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferBatch_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferSingleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferSinglesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TransferSingle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferSingle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuriArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionurisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<URI_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<URI_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolFrenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolFrensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolFren_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolFren_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfrenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfrensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Fren_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Fren_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type TransferBatch = {
  id: Scalars['ID'];
  operator: Scalars['Bytes'];
  from: Scalars['Bytes'];
  to: Scalars['Bytes'];
  ids: Array<Scalars['BigInt']>;
  values: Array<Scalars['BigInt']>;
};

export type TransferBatch_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  ids?: InputMaybe<Array<Scalars['BigInt']>>;
  ids_not?: InputMaybe<Array<Scalars['BigInt']>>;
  ids_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  ids_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  ids_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  ids_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  values?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type TransferBatch_orderBy =
  | 'id'
  | 'operator'
  | 'from'
  | 'to'
  | 'ids'
  | 'values';

export type TransferSingle = {
  id: Scalars['ID'];
  operator: Scalars['Bytes'];
  from: Scalars['Bytes'];
  to: Scalars['Bytes'];
  value: Scalars['BigInt'];
};

export type TransferSingle_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  value?: InputMaybe<Scalars['BigInt']>;
  value_not?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type TransferSingle_orderBy =
  | 'id'
  | 'operator'
  | 'from'
  | 'to'
  | 'value';

export type URI = {
  id: Scalars['ID'];
  value: Scalars['String'];
};

export type URI_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  value?: InputMaybe<Scalars['String']>;
  value_not?: InputMaybe<Scalars['String']>;
  value_gt?: InputMaybe<Scalars['String']>;
  value_lt?: InputMaybe<Scalars['String']>;
  value_gte?: InputMaybe<Scalars['String']>;
  value_lte?: InputMaybe<Scalars['String']>;
  value_in?: InputMaybe<Array<Scalars['String']>>;
  value_not_in?: InputMaybe<Array<Scalars['String']>>;
  value_contains?: InputMaybe<Scalars['String']>;
  value_contains_nocase?: InputMaybe<Scalars['String']>;
  value_not_contains?: InputMaybe<Scalars['String']>;
  value_not_contains_nocase?: InputMaybe<Scalars['String']>;
  value_starts_with?: InputMaybe<Scalars['String']>;
  value_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  value_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value_ends_with?: InputMaybe<Scalars['String']>;
  value_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  value_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
};

export type URI_orderBy =
  | 'id'
  | 'value';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

    }
    export type QueryLocalhostSdk = {
  /** undefined **/
  poolCreated: InContextSdkMethod<LocalhostTypes.Query['poolCreated'], LocalhostTypes.QuerypoolCreatedArgs, MeshContext>,
  /** undefined **/
  poolCreateds: InContextSdkMethod<LocalhostTypes.Query['poolCreateds'], LocalhostTypes.QuerypoolCreatedsArgs, MeshContext>,
  /** undefined **/
  registerExpense: InContextSdkMethod<LocalhostTypes.Query['registerExpense'], LocalhostTypes.QueryregisterExpenseArgs, MeshContext>,
  /** undefined **/
  registerExpenses: InContextSdkMethod<LocalhostTypes.Query['registerExpenses'], LocalhostTypes.QueryregisterExpensesArgs, MeshContext>,
  /** undefined **/
  transferBatch: InContextSdkMethod<LocalhostTypes.Query['transferBatch'], LocalhostTypes.QuerytransferBatchArgs, MeshContext>,
  /** undefined **/
  transferBatches: InContextSdkMethod<LocalhostTypes.Query['transferBatches'], LocalhostTypes.QuerytransferBatchesArgs, MeshContext>,
  /** undefined **/
  transferSingle: InContextSdkMethod<LocalhostTypes.Query['transferSingle'], LocalhostTypes.QuerytransferSingleArgs, MeshContext>,
  /** undefined **/
  transferSingles: InContextSdkMethod<LocalhostTypes.Query['transferSingles'], LocalhostTypes.QuerytransferSinglesArgs, MeshContext>,
  /** undefined **/
  uri: InContextSdkMethod<LocalhostTypes.Query['uri'], LocalhostTypes.QueryuriArgs, MeshContext>,
  /** undefined **/
  uris: InContextSdkMethod<LocalhostTypes.Query['uris'], LocalhostTypes.QueryurisArgs, MeshContext>,
  /** undefined **/
  pool: InContextSdkMethod<LocalhostTypes.Query['pool'], LocalhostTypes.QuerypoolArgs, MeshContext>,
  /** undefined **/
  pools: InContextSdkMethod<LocalhostTypes.Query['pools'], LocalhostTypes.QuerypoolsArgs, MeshContext>,
  /** undefined **/
  poolFren: InContextSdkMethod<LocalhostTypes.Query['poolFren'], LocalhostTypes.QuerypoolFrenArgs, MeshContext>,
  /** undefined **/
  poolFrens: InContextSdkMethod<LocalhostTypes.Query['poolFrens'], LocalhostTypes.QuerypoolFrensArgs, MeshContext>,
  /** undefined **/
  fren: InContextSdkMethod<LocalhostTypes.Query['fren'], LocalhostTypes.QueryfrenArgs, MeshContext>,
  /** undefined **/
  frens: InContextSdkMethod<LocalhostTypes.Query['frens'], LocalhostTypes.QueryfrensArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<LocalhostTypes.Query['_meta'], LocalhostTypes.Query_metaArgs, MeshContext>
};

export type MutationLocalhostSdk = {

};

export type SubscriptionLocalhostSdk = {
  /** undefined **/
  poolCreated: InContextSdkMethod<LocalhostTypes.Subscription['poolCreated'], LocalhostTypes.SubscriptionpoolCreatedArgs, MeshContext>,
  /** undefined **/
  poolCreateds: InContextSdkMethod<LocalhostTypes.Subscription['poolCreateds'], LocalhostTypes.SubscriptionpoolCreatedsArgs, MeshContext>,
  /** undefined **/
  registerExpense: InContextSdkMethod<LocalhostTypes.Subscription['registerExpense'], LocalhostTypes.SubscriptionregisterExpenseArgs, MeshContext>,
  /** undefined **/
  registerExpenses: InContextSdkMethod<LocalhostTypes.Subscription['registerExpenses'], LocalhostTypes.SubscriptionregisterExpensesArgs, MeshContext>,
  /** undefined **/
  transferBatch: InContextSdkMethod<LocalhostTypes.Subscription['transferBatch'], LocalhostTypes.SubscriptiontransferBatchArgs, MeshContext>,
  /** undefined **/
  transferBatches: InContextSdkMethod<LocalhostTypes.Subscription['transferBatches'], LocalhostTypes.SubscriptiontransferBatchesArgs, MeshContext>,
  /** undefined **/
  transferSingle: InContextSdkMethod<LocalhostTypes.Subscription['transferSingle'], LocalhostTypes.SubscriptiontransferSingleArgs, MeshContext>,
  /** undefined **/
  transferSingles: InContextSdkMethod<LocalhostTypes.Subscription['transferSingles'], LocalhostTypes.SubscriptiontransferSinglesArgs, MeshContext>,
  /** undefined **/
  uri: InContextSdkMethod<LocalhostTypes.Subscription['uri'], LocalhostTypes.SubscriptionuriArgs, MeshContext>,
  /** undefined **/
  uris: InContextSdkMethod<LocalhostTypes.Subscription['uris'], LocalhostTypes.SubscriptionurisArgs, MeshContext>,
  /** undefined **/
  pool: InContextSdkMethod<LocalhostTypes.Subscription['pool'], LocalhostTypes.SubscriptionpoolArgs, MeshContext>,
  /** undefined **/
  pools: InContextSdkMethod<LocalhostTypes.Subscription['pools'], LocalhostTypes.SubscriptionpoolsArgs, MeshContext>,
  /** undefined **/
  poolFren: InContextSdkMethod<LocalhostTypes.Subscription['poolFren'], LocalhostTypes.SubscriptionpoolFrenArgs, MeshContext>,
  /** undefined **/
  poolFrens: InContextSdkMethod<LocalhostTypes.Subscription['poolFrens'], LocalhostTypes.SubscriptionpoolFrensArgs, MeshContext>,
  /** undefined **/
  fren: InContextSdkMethod<LocalhostTypes.Subscription['fren'], LocalhostTypes.SubscriptionfrenArgs, MeshContext>,
  /** undefined **/
  frens: InContextSdkMethod<LocalhostTypes.Subscription['frens'], LocalhostTypes.SubscriptionfrensArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<LocalhostTypes.Subscription['_meta'], LocalhostTypes.Subscription_metaArgs, MeshContext>
};

export type LocalhostContext = {
      ["localhost"]: { Query: QueryLocalhostSdk, Mutation: MutationLocalhostSdk, Subscription: SubscriptionLocalhostSdk },
      
    };

export type MeshContext = LocalhostContext & BaseMeshContext;


import { getMesh, ExecuteMeshFn, SubscribeMeshFn } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';

import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});


                import { findAndParseConfig } from '@graphql-mesh/cli';
                function getMeshOptions() {
                  console.warn('WARNING: These artifacts are built for development mode. Please run "graphclient build" to build production artifacts');
                  return findAndParseConfig({
                    dir: baseDir,
                    artifactsDir: ".graphclient",
                    configName: "graphclient",
                    additionalPackagePrefixes: ["@graphprotocol/client-"],
                    initialLoggerPrefix: "GraphClient",
                  });
                }
              

let meshInstance$: Promise<MeshInstance<MeshContext>>;

export function getBuiltGraphClient(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh<MeshContext>(meshOptions)).then(mesh => {
      const id$ = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        id$.then(id => mesh.pubsub.unsubscribe(id)).catch(err => console.error(err));
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));