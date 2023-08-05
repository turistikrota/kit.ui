import { deepEqual } from '@turistikrota/ui/utils'

describe('deepEqual Function', () => {
  test('returns true for two empty objects', () => {
    const result = deepEqual({}, {})
    expect(result).toBe(true)
  })

  test('returns true for two identical objects', () => {
    const obj1 = { a: 1, b: 2, c: { d: 3 } }
    const obj2 = { a: 1, b: 2, c: { d: 3 } }
    const result = deepEqual(obj1, obj2)
    expect(result).toBe(true)
  })

  test('returns false for two different objects', () => {
    const obj3 = { x: 1, y: 2 }
    const obj4 = { x: 1, y: 3 }
    const result = deepEqual(obj3, obj4)
    expect(result).toBe(false)
  })

  test('returns false if one object is null and the other is undefined', () => {
    const result = deepEqual(null, undefined)
    expect(result).toBe(false)
  })

  test('returns false if one object has an additional property', () => {
    const obj5 = { a: 1, b: 2 }
    const obj6 = { a: 1, b: 2, c: 3 }
    const result = deepEqual(obj5, obj6)
    expect(result).toBe(false)
  })

  test('returns true for complex nested objects', () => {
    const obj7 = { a: 1, b: { c: 2, d: { e: [1, 2, 3] } } }
    const obj8 = { a: 1, b: { c: 2, d: { e: [1, 2, 3] } } }
    const result = deepEqual(obj7, obj8)
    expect(result).toBe(true)
  })
})
