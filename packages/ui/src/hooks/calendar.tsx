import { Locales } from '../types'

type Day = {
  isPrevMonth: boolean
  isNextMonth: boolean
  isToday: boolean
  value: number
  month: number
}

type Week = {
  days: Day[]
  month: number
}

type Weeks = Week[]

type Result = {
  weeks: Weeks
  firstDay: Date
  lastDay: Date
  daysInMonth: number
  dayOfWeek: number
  daysInWeek: number
  weeksInMonth: number
  makeDateStr: (day: number, month: number, year: number) => string
}

const firstDays: Record<Locales, number> = {
  tr: 1,
  en: 7,
}

export const useCalendar = (date?: Date, locale: Locales = Locales.tr): Result => {
  const now = date ? date : new Date()
  const month = now.getMonth()
  const year = now.getFullYear()
  const weeks: Weeks = []
  const firstDay = new Date(year, month, firstDays[locale])
  const lastDay = new Date(year, month + 1, 0)
  const prevMonthsLastDay = new Date(year, month, 0)
  const daysInMonth = lastDay.getDate()
  const prevDaysInMonth = prevMonthsLastDay.getDate()
  const dayOfWeek = firstDay.getDay()
  const daysInWeek = 7
  const weeksInMonth = Math.ceil((daysInMonth + dayOfWeek) / daysInWeek)
  for (let week = 0; week < weeksInMonth; week++) {
    weeks.push({
      days: [],
      month,
    })
  }
  let day = 1
  let nextMonth = 0
  const prevMonth = prevDaysInMonth - dayOfWeek + 1
  for (let week = 0; week < weeksInMonth; week++) {
    for (let dayOfWeek = 0; dayOfWeek < daysInWeek; dayOfWeek++) {
      if (week === 0 && dayOfWeek < firstDay.getDay()) {
        weeks[week].days.push({
          isPrevMonth: true,
          isNextMonth: false,
          isToday: false,
          value: prevMonth + dayOfWeek,
          month: month - 1,
        })
      } else if (day > daysInMonth) {
        nextMonth++
        weeks[week].days.push({
          isPrevMonth: false,
          isNextMonth: true,
          isToday: false,
          value: nextMonth,
          month: month + 1,
        })
      } else {
        weeks[week].days.push({
          isPrevMonth: false,
          isNextMonth: false,
          isToday: day === now.getDate(),
          value: day,
          month,
        })
        day++
      }
    }
  }
  return {
    weeks,
    firstDay,
    lastDay,
    daysInMonth,
    dayOfWeek,
    daysInWeek,
    weeksInMonth,
    makeDateStr: (day: number, month: number, year: number) => {
      return `${day}.${month + 1}.${year}`
    },
  }
}
