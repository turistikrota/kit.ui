import { englishSorting, sort, turkishSorting } from '@turistikrota/ui/utils/sort'

describe('sort Function', () => {
  test('sorts array in Turkish locale', () => {
    const arr = ['elma', 'armut', 'çilek', 'böğürtlen']
    const sortedArr = sort(arr, 'tr')

    expect(sortedArr).toEqual(['armut', 'böğürtlen', 'çilek', 'elma'])
  })

  test('sorts array in English locale', () => {
    const arr = ['apple', 'banana', 'cherry', 'date']
    const sortedArr = sort(arr, 'en')

    expect(sortedArr).toEqual(['apple', 'banana', 'cherry', 'date'])
  })
})

describe('turkishSorting Function', () => {
  test('sorts strings in Turkish locale', () => {
    const str1 = 'armut'
    const str2 = 'elma'

    expect(turkishSorting(str1, str2)).toBe(-1)
  })
})

describe('englishSorting Function', () => {
  test('sorts strings in English locale', () => {
    const str1 = 'banana'
    const str2 = 'apple'

    expect(englishSorting(str1, str2)).toBe(1)
  })
})
