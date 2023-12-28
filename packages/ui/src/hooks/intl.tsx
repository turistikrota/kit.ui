import { Locales } from '../types'

export const useLocalizedMonthNames = (locale: Locales, long = false): string[] => {
  const format = new Intl.DateTimeFormat(locale, { month: long ? 'long' : 'short' })
  const months = []
  for (let month = 0; month < 12; month++) {
    months.push(format.format(new Date(0, month)))
  }
  return months
}

export const useLocalizedWeekDayNames = (locale: Locales, long = false): string[] => {
  const format = new Intl.DateTimeFormat(locale, { weekday: long ? 'long' : 'short' })
  const days = []
  for (let day = 0; day < 7; day++) {
    days.push(format.format(new Date(0, 0, day + 1)))
  }
  return days
}

export const useLocalizedCurrencyFormatter = (locale: Locales, currency = 'TRY'): Intl.NumberFormat => {
  return new Intl.NumberFormat(locale, { style: 'currency', currency })
}
