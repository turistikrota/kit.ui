export type Locales = 'en' | 'tr'

export type PropsWithClassName<P = unknown> = P & {
  className?: string
}

export type BaseResponse = {
  message: string
}

export type DetailResponse<T> = BaseResponse & {
  details: T
}

export type ValidationErrorDetail = {
  field: string
  message: string
  namespace?: string
  value: string
}

export type AnyResponse<T> = T | ValidationErrorDetail[] | BaseResponse

export function isBaseResponse(response: any): response is BaseResponse {
  return response && response.message
}

export type ListResponse<T> = {
  list: T[]
  total: number
  filteredTotal: number
  isNext: boolean
  isPrev: boolean
  page: number
}

export type I18nTranslation<T> = {
  [key in Locales]: T
}

export type Coordinates = [number, number]

export type FormSize = 'sm' | 'md' | 'lg'
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'

export type Variant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'gray'
  | 'gray-text'
  | 'transparent'
  | 'opacity'
  | 'vip'

export const TextSize: Record<Size, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
}

export function isSize(size: string): size is Size {
  return Object.keys(TextSize).includes(size)
}

export function isLocale(val: string): val is Locales {
  return ['en', 'tr'].includes(val)
}

export function isCoordinates(value: any): value is Coordinates {
  return Array.isArray(value) && value.length === 2 && typeof value[0] === 'number' && typeof value[1] === 'number'
}
