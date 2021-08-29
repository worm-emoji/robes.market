export interface OpenseaResponse {
  assets: Asset[]
}

export interface Asset {
  id: number
  token_id: string
  num_sales: number
  background_color: any
  image_url: string
  image_preview_url: string
  image_thumbnail_url: string
  image_original_url: any
  animation_url: any
  animation_original_url: any
  name: string
  description: string
  external_link: any
  asset_contract: AssetContract
  permalink: string
  collection: Collection
  decimals: number
  token_metadata: string
  owner: Owner
  sell_orders?: SellOrder[]
  creator: Creator
  traits: any[]
  last_sale?: LastSale
  top_bid: any
  listing_date: any
  is_presale: boolean
  transfer_fee_payment_token: any
  transfer_fee: any
}

export interface AssetContract {
  address: string
  asset_contract_type: string
  created_date: string
  name: string
  nft_version: string
  opensea_version: any
  owner: number
  schema_name: string
  symbol: string
  total_supply: string
  description: string
  external_link: string
  image_url: string
  default_to_fiat: boolean
  dev_buyer_fee_basis_points: number
  dev_seller_fee_basis_points: number
  only_proxied_transfers: boolean
  opensea_buyer_fee_basis_points: number
  opensea_seller_fee_basis_points: number
  buyer_fee_basis_points: number
  seller_fee_basis_points: number
  payout_address: any
}

export interface Collection {
  banner_image_url: string
  chat_url: any
  created_date: string
  default_to_fiat: boolean
  description: string
  dev_buyer_fee_basis_points: string
  dev_seller_fee_basis_points: string
  discord_url: string
  display_data: DisplayData
  external_url: string
  featured: boolean
  featured_image_url: string
  hidden: boolean
  safelist_request_status: string
  image_url: string
  is_subject_to_whitelist: boolean
  large_image_url: string
  medium_username: any
  name: string
  only_proxied_transfers: boolean
  opensea_buyer_fee_basis_points: string
  opensea_seller_fee_basis_points: string
  payout_address: any
  require_email: boolean
  short_description: any
  slug: string
  telegram_url: any
  twitter_username: any
  instagram_username: any
  wiki_url: any
}

export interface DisplayData {
  card_display_style: string
}

export interface Owner {
  user?: User
  profile_img_url: string
  address: string
  config: string
}

export interface User {
  username?: string
}

export interface SellOrder {
  created_date: string
  closing_date: any
  closing_extendable: boolean
  expiration_time: number
  listing_time: number
  order_hash: string
  metadata: Metadata
  exchange: string
  maker: Maker
  taker: Taker
  current_price: string
  current_bounty: string
  bounty_multiple: string
  maker_relayer_fee: string
  taker_relayer_fee: string
  maker_protocol_fee: string
  taker_protocol_fee: string
  maker_referrer_fee: string
  fee_recipient: FeeRecipient
  fee_method: number
  side: number
  sale_kind: number
  target: string
  how_to_call: number
  calldata: string
  replacement_pattern: string
  static_target: string
  static_extradata: string
  payment_token: string
  payment_token_contract: PaymentTokenContract
  base_price: string
  extra: string
  quantity: string
  salt: string
  v: number
  r: string
  s: string
  approved_on_chain: boolean
  cancelled: boolean
  finalized: boolean
  marked_invalid: boolean
  prefixed_hash: string
}

export interface Metadata {
  asset: Asset2
  schema: string
}

export interface Asset2 {
  id: string
  address: string
}

export interface Maker {
  user: number
  profile_img_url: string
  address: string
  config: string
}

export interface Taker {
  user: number
  profile_img_url: string
  address: string
  config: string
}

export interface FeeRecipient {
  user: number
  profile_img_url: string
  address: string
  config: string
}

export interface PaymentTokenContract {
  id: number
  symbol: string
  address: string
  image_url: string
  name: string
  decimals: number
  eth_price: string
  usd_price: string
}

export interface Creator {
  user: User
  profile_img_url: string
  address: string
  config: string
}

export interface LastSale {
  asset: Asset3
  asset_bundle: any
  event_type: string
  event_timestamp: string
  auction_type: any
  total_price: string
  payment_token: PaymentToken
  transaction: Transaction
  created_date: string
  quantity: string
}

export interface Asset3 {
  token_id: string
  decimals: number
}

export interface PaymentToken {
  id: number
  symbol: string
  address: string
  image_url: string
  name: string
  decimals: number
  eth_price: string
  usd_price: string
}

export interface Transaction {
  block_hash: string
  block_number: string
  from_account: FromAccount
  id: number
  timestamp: string
  to_account: ToAccount
  transaction_hash: string
  transaction_index: string
}

export interface FromAccount {
  user: User
  profile_img_url: string
  address: string
  config: string
}

export interface ToAccount {
  user: User
  profile_img_url: string
  address: string
  config: string
}
