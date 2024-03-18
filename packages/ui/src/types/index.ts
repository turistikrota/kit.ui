export enum Locales {
  en = 'en',
  tr = 'tr',
}

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

export type ButtonVariant = Variant | 'glass'

export type ObjectFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'

export type FullVariant =
  | 'success'
  | 'warning'
  | 'danger'
  | 'primary'
  | 'default'
  | 'secondary'
  | 'yellow'
  | 'blue'
  | 'green'
  | 'purple'
  | 'orange'
  | 'indigo'
  | 'teal'

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

export const ObjectFits: Record<ObjectFit, string> = {
  contain: 'object-contain',
  cover: 'object-cover',
  fill: 'object-fill',
  none: 'object-none',
  'scale-down': 'object-scale-down',
}

export const FullVariantClasses: Record<FullVariant, string> = {
  success: 'bg-green-100 bg-opacity-50 text-green-500 dark:bg-green-500 dark:bg-opacity-10 dark:text-green-100',
  warning: 'bg-yellow-100 bg-opacity-50 text-yellow-500 dark:bg-yellow-500 dark:bg-opacity-10 dark:text-yellow-100',
  danger: 'bg-red-100 bg-opacity-50 text-red-500 dark:bg-red-500 dark:bg-opacity-10 dark:text-red-100',
  primary: 'bg-blue-100 bg-opacity-50 text-blue-500 dark:bg-blue-500 dark:bg-opacity-10 dark:text-blue-100',
  default: 'bg-second bg-opacity-50 text-second dark:bg-second dark:bg-opacity-50 dark:text-second',
  secondary: 'bg-second bg-opacity-50 text-second dark:bg-second dark:bg-opacity-50 dark:text-second',
  yellow: 'bg-yellow-100 bg-opacity-50 text-yellow-500 dark:bg-yellow-500 dark:bg-opacity-10 dark:text-yellow-100',
  blue: 'bg-blue-100 bg-opacity-50 text-blue-500 dark:bg-blue-500 dark:bg-opacity-10 dark:text-blue-100',
  green: 'bg-green-100 bg-opacity-50 text-green-500 dark:bg-green-500 dark:bg-opacity-10 dark:text-green-100',
  purple: 'bg-purple-100 bg-opacity-50 text-purple-500 dark:bg-purple-500 dark:bg-opacity-10 dark:text-purple-100',
  orange: 'bg-orange-100 bg-opacity-50 text-orange-500 dark:bg-orange-500 dark:bg-opacity-10 dark:text-orange-100',
  indigo: 'bg-indigo-100 bg-opacity-50 text-indigo-500 dark:bg-indigo-500 dark:bg-opacity-10 dark:text-indigo-100',
  teal: 'bg-teal-100 bg-opacity-50 text-teal-500 dark:bg-teal-500 dark:bg-opacity-10 dark:text-teal-100',
}

export const FullSolidVariantClasses: Record<FullVariant, string> = {
  success: 'bg-green-500 text-white',
  warning: 'bg-yellow-500 text-white',
  danger: 'bg-red-500 text-white',
  primary: 'bg-blue-500 text-white',
  default: 'bg-second text-white',
  secondary: 'bg-secondary-500 text-white',
  yellow: 'bg-yellow-500 text-white',
  blue: 'bg-blue-500 text-white',
  green: 'bg-green-500 text-white',
  purple: 'bg-purple-500 text-white',
  orange: 'bg-orange-500 text-white',
  indigo: 'bg-indigo-500 text-white',
  teal: 'bg-teal-500 text-white',
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
