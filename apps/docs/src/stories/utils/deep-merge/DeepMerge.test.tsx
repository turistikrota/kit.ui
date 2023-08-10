import { deepMerge } from '@turistikrota/ui/utils'

describe('deepMerge', () => {
  it('should merge two flat objects', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { b: 3, c: 4 }
    const result = deepMerge(obj1, obj2)
    expect(result).toEqual({ a: 1, b: 3, c: 4 })
  })

  it('should merge nested objects', () => {
    const obj1 = { a: 1, nested: { b: 2, c: 3 } }
    const obj2 = { nested: { c: 4, d: 5 } }
    const result = deepMerge(obj1, obj2)
    expect(result).toEqual({ a: 1, nested: { b: 2, c: 4, d: 5 } })
  })

  it('should concatenate arrays', () => {
    const obj1 = { a: [1, 2], b: 3 }
    const obj2 = { a: [3, 4] }
    const result = deepMerge(obj1, obj2)
    expect(result).toEqual({ a: [1, 2, 3, 4], b: 3 })
  })

  it('should override non-object values', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { b: 'two', c: 3 }
    const result = deepMerge(obj1, obj2)
    expect(result).toEqual({ a: 1, b: 'two', c: 3 })
  })

  it('should not mutate original objects', () => {
    const obj1 = { a: 1, nested: { b: 2 } }
    const obj2 = { nested: { c: 3 } }
    deepMerge(obj1, obj2)
    expect(obj1).toEqual({ a: 1, nested: { b: 2 } })
    expect(obj2).toEqual({ nested: { c: 3 } })
  })
})
