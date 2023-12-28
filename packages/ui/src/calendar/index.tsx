import React, { useMemo, useState } from 'react'
import { useCalendar } from '../hooks/calendar'
import { useLocalizedCurrencyFormatter, useLocalizedMonthNames, useLocalizedWeekDayNames } from '../hooks/intl'
import { Locales } from '../types'

export type CalendarData<T> = Record<string, T[]>

type Variant = 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'

type Props<T = any> = {
  data: CalendarData<T>
  DetailRender: React.FC<{
    day: number
    data: T[]
  }>
  textToday: string
  textSelected: string
  locale?: Locales
  onDayClick?: () => void
  variantCalc?: (data: T[]) => Variant
  availableCalc?: (date: Date, data: T[]) => boolean
}

type DetailRendererType<T> = React.FC<{
  day: number
  data: T[]
  locale?: Locales
}>

type DayProps<T> = {
  day: number
  locale: Locales
  textToday: string
  textSelected: string
  DetailRender: DetailRendererType<T>
  variant?: Variant
  data: T[]
  isPrevMonth: boolean
  isNextMonth: boolean
  isToday?: boolean
  isActive?: boolean
  isAvailable?: boolean
  onPrevMonth?: () => void
  onNextMonth?: () => void
  onClick?: () => void
}

type HeadProps = {
  locale: Locales
  year: number
  month: number
}

type DayLabelProps = {
  name: string
}

type DayDesign = {
  border: string
  badge: string
}

const DayVariants: Record<Variant, DayDesign> = {
  default: {
    border: '',
    badge: 'dark:bg-gray-400 bg-gray-200',
  },
  primary: {
    border: 'border-primary',
    badge: 'bg-primary',
  },
  secondary: {
    border: 'border-secondary',
    badge: 'bg-secondary',
  },
  success: {
    border: 'border-green-500',
    badge: 'bg-green-500',
  },
  danger: {
    border: 'border-red-500',
    badge: 'bg-red-500',
  },
  warning: {
    border: 'border-yellow-500',
    badge: 'bg-yellow-500',
  },
  info: {
    border: 'border-blue-500',
    badge: 'bg-blue-500',
  },
}

const DayLabel: React.FC<DayLabelProps> = ({ name }) => {
  return (
    <div className='col-span-1'>
      <div className='flex w-full justify-end text-xs font-normal text-gray-700 dark:text-gray-300'>{name}</div>
    </div>
  )
}

function Day<T = any>({
  day,
  data,
  locale,
  textSelected,
  textToday,
  variant = 'default',
  DetailRender,
  isActive,
  isToday = false,
  isAvailable = true,
  isNextMonth,
  isPrevMonth,
  onClick,
  onNextMonth,
  onPrevMonth,
}: DayProps<T>) {
  const onDetailClick = () => {
    if (isNextMonth) {
      onNextMonth && onNextMonth()
      return
    }
    if (isPrevMonth) {
      onPrevMonth && onPrevMonth()
      return
    }
    onClick && onClick()
  }
  return (
    <div
      className={`hover:bg-default relative col-span-1 h-12 cursor-pointer rounded-b-md border-t-2 transition-colors duration-200 md:h-36 ${
        isNextMonth || isPrevMonth || !isAvailable ? 'opacity-20' : ''
      } ${isActive ? 'border-primary bg-default' : ''} ${DayVariants[variant].border}`}
      onClick={onDetailClick}
    >
      <div className='absolute right-1 top-0 text-gray-600 dark:text-gray-400'>{day}</div>
      {data && (
        <>
          <div className='text-secondary flex h-full w-full items-end justify-center opacity-100 md:hidden md:opacity-0'>
            <span className={`h-2 w-2 rounded-full ${DayVariants[variant].badge}`} />
          </div>
          <div className='h-full w-full px-1 pt-4 opacity-0 md:opacity-100'>
            <DetailRender day={day} data={data} locale={locale} />
          </div>
        </>
      )}
      {!data && isActive && (
        <>
          <div className='text-secondary hidden h-full w-full items-center justify-center opacity-0 md:flex md:opacity-100'>
            {isToday ? textToday : textSelected}
          </div>
        </>
      )}
    </div>
  )
}

function Head({ year, month, locale }: HeadProps) {
  const monthNames = useLocalizedMonthNames(locale, true)
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center'>
        <div className='text-lg font-bold'>{monthNames[month]}</div>
      </div>
      <div className='text-lg font-bold'>{year}</div>
    </div>
  )
}

function Calendar<T = any>({
  locale = Locales.tr,
  data,
  textSelected,
  textToday,
  DetailRender,
  onDayClick,
  variantCalc,
  availableCalc,
}: Props<T>) {
  const [month, setMonth] = useState<number>(new Date().getMonth())
  const [year, setYear] = useState<number>(new Date().getFullYear())
  const [day, setDay] = useState<number>(new Date().getDate())
  const dayNames = useLocalizedWeekDayNames(locale)
  const currentDate = useMemo(() => new Date(year, month, day), [year, month, day])
  const calendar = useCalendar(currentDate)

  const onDayDetailClick = (day: number) => {
    setDay(day)
    onDayClick && onDayClick()
  }

  const onPrevMonth = (date: number) => {
    if (month === 0) {
      setMonth(11)
      setYear(year - 1)
    } else {
      setMonth(month - 1)
    }
    setDay(date)
  }

  const onNextMonth = (date: number) => {
    if (month === 11) {
      setMonth(0)
      setYear(year + 1)
    } else {
      setMonth(month + 1)
    }
    setDay(date)
  }

  return (
    <div className='flex w-full flex-col gap-y-2'>
      <Head year={year} month={month} locale={locale} />
      <div className='w-full'>
        <div className='grid grid-cols-7 gap-x-1'>
          {dayNames.map((label) => (
            <DayLabel key={label} name={label} />
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        {calendar.weeks.map((week, index) => (
          <div key={index} className='grid grid-cols-7 gap-x-1'>
            {week.days.map((day, index) => (
              <Day<T>
                key={index}
                locale={locale}
                textSelected={textSelected}
                textToday={textToday}
                day={day.value}
                DetailRender={DetailRender}
                data={month === day.month ? data[calendar.makeDateStr(day.value, month, year)] : []}
                onClick={() => onDayDetailClick(day.value)}
                isActive={!day.isNextMonth && !day.isPrevMonth && day.value === currentDate.getDate()}
                isNextMonth={day.isNextMonth}
                isAvailable={
                  availableCalc
                    ? availableCalc(
                        new Date(year, month, day.value),
                        data[calendar.makeDateStr(day.value, month, year)],
                      )
                    : true
                }
                isToday={day.value === new Date().getDate() && month === new Date().getMonth()}
                isPrevMonth={day.isPrevMonth}
                onNextMonth={() => onNextMonth(day.value)}
                onPrevMonth={() => onPrevMonth(day.value)}
                variant={
                  variantCalc && month === day.month && data[calendar.makeDateStr(day.value, month, year)]
                    ? variantCalc(data[calendar.makeDateStr(day.value, month, year)]) ?? 'default'
                    : 'default'
                }
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export const PriceRenderer: DetailRendererType<number> = ({ data, locale = Locales.tr }) => {
  const formatter = useLocalizedCurrencyFormatter(locale)

  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-1'>
      {data.map((d, idx) => (
        <div key={idx} className='text-lg text-gray-800 dark:text-gray-200'>
          {formatter.format(d)}
        </div>
      ))}
    </div>
  )
}

export default Calendar
