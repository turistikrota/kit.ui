import { findDiff } from '@turistikrota/ui/utils'

describe('findDiff', () => {
  it('should return an empty object for two identical flat objects', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1, b: 2 }
    const result = findDiff(obj1, obj2)
    expect(result).toEqual({})
  })

  it('should return the differences for two flat objects', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 2, b: 2, c: 3 }
    const result = findDiff(obj1, obj2)
    expect(result).toEqual({ a: 2, c: 3 })
  })

  it('should return the differences for nested objects', () => {
    const obj1 = { a: 1, nested: { b: 2, c: 3 } }
    const obj2 = { a: 1, nested: { b: 3, d: 4 } }
    const result = findDiff(obj1, obj2)
    expect(result).toEqual({ nested: { b: 3, d: 4 } })
  })

  it('should return the differences when an item is removed', () => {
    const obj1 = { a: 1, b: 2, c: 3 }
    const obj2 = { a: 1, b: 2 }
    const result = findDiff(obj1, obj2)
    expect(result).toEqual({ c: undefined })
  })

  it('should handle arrays correctly', () => {
    const obj1 = { a: [1, 2], b: 3 }
    const obj2 = { a: [1, 2, 3], b: 4 }
    const result = findDiff(obj1, obj2)
    expect(result).toEqual({ a: [1, 2, 3], b: 4 })
  })
})
