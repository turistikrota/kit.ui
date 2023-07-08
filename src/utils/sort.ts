import { Locales } from '../types'

export const turkishSorting = (a: string, b: string) => a.localeCompare(b, 'tr')
export const englishSorting = (a: string, b: string) => a.localeCompare(b, 'en')
export const sort = (arr: string[], lang: Locales) => {
  if (lang === 'tr') {
    return arr.sort(turkishSorting)
  }
  return arr.sort(englishSorting)
}
