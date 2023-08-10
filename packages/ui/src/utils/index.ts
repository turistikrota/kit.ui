export const deepEqual = (obj1: any, obj2: any): boolean => {
  if (obj1 === null || obj1 === undefined || obj2 === null || obj2 === undefined) {
    return obj1 === obj2
  }
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return obj1 === obj2
  }
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)
  if (keys1.length !== keys2.length) {
    return false
  }
  if (!keys1.every((key) => keys2.includes(key))) {
    return false
  }
  for (const key of keys1) {
    if (!deepEqual(obj1[key], obj2[key])) {
      return false
    }
  }
  return true
}

type AnyObject = Record<string, any>

export const deepMerge = <T extends AnyObject, S extends AnyObject>(target: T, source: S): T & S => {
  if (typeof source !== 'object' || source === null) {
    return source as any
  }

  const merged: AnyObject = { ...target }

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof source[key] === 'object' && source[key] !== null) {
        if (Array.isArray(source[key])) {
          merged[key] = [...(merged[key] || []), ...source[key]]
        } else {
          merged[key] = deepMerge(merged[key] || {}, source[key])
        }
      } else {
        merged[key] = source[key]
      }
    }
  }

  return merged as T & S
}

type NestedObject = { [key: string]: NestedValue }
type NestedValue = string | number | boolean | null | NestedObject | NestedValue[]

export function findDiff(obj1: NestedObject, obj2: NestedObject): NestedObject {
  const diff: NestedObject = {}

  const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)])

  for (const key of keys) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) {
        diff[key] = obj2[key]
      }
    } else if (
      typeof obj1[key] === 'object' &&
      obj1[key] !== null &&
      typeof obj2[key] === 'object' &&
      obj2[key] !== null
    ) {
      const nestedDiff = findDiff(obj1[key] as NestedObject, obj2[key] as NestedObject)
      if (Object.keys(nestedDiff).length > 0) {
        diff[key] = nestedDiff
      }
    } else if (obj1[key] !== obj2[key]) {
      diff[key] = obj2[key]
    }
  }

  return diff
}
