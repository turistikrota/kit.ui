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
