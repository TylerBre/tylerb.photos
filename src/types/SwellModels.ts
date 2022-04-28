import { Nullable } from "./Nullable"
import { GatsbyChildImageShardFluid } from "./GatsbyTypes"

export interface SwellProduct {
  active?: boolean
  attributes?: {
    [key: string]: Array<string>
  }
  attribute_set?: string // guid
  bundle?: Nullable<boolean>
  category_index?: SwellCategoryIndex
  currency?: string // "USD" or... should be a string union or ENUM
  date_created?: Date
  date_updated?: Date
  delivery?: string // "shipment" or... should be a string union or ENUM
  description?: string
  id?: string // guid
  meta_description?: Nullable<string>
  meta_title?: Nullable<string>
  name?: string
  options?: Array<SwellProductOption>
  price?: number
  prices?: Array<number>
  purchase_options?: {
    [key: string]: SwellPurchaseOption
  }
  sale?: boolean
  sale_price?: Nullable<number>
  sku?: Nullable<string>
  slug?: string
  stock_level?: number
  stock_purchasable?: false
  stock_status?: string // "in_stock" or... should be a string union or ENUM
  stock_tracking?: boolean
  tags?: Array<string>
  variable?: boolean
  images?: Array<{
    fileLocal: GatsbyChildImageShardFluid
  }>
}

export interface SwellCategoryIndex {
  sort?: {
    [key: string]: number
  }
  id?: Array<string>
}

export interface SwellProductOption {
  id?: string
  values?: Array<SwellProductOptionValue>
  name?: string
  active?: boolean
  input_type?: string // "select" or..
  variant?: boolean
  description?: Nullable<string>
  required?: boolean
  attribute_id?: string // "size" or...
}

export interface SwellProductOptionValue {
  id: string
  name: string
}

export interface SwellPurchaseOption {
  active: boolean
  price: number
  sale: boolean
  sale_price: Nullable<number>
  prices: Array<number>
}
