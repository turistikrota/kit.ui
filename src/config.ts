import { Config } from 'tailwindcss/types'
import { TailwindConfiguration } from './assets/tailwind.config'

const deepMerge = (target: any, source: any): any => {
  if (typeof source !== 'object' || source === null) {
    return source
  }
  const merged = { ...target }
  for (const key in source) {
    if (typeof source[key] === 'object' && source[key] !== null) {
      if (Array.isArray(source[key])) {
        merged[key] = [...source[key]]
      } else {
        merged[key] = deepMerge(merged[key], source[key])
      }
    } else {
      merged[key] = source[key]
    }
  }

  return merged
}

export const withTouristicUI = (config: Config): Config => {
  return deepMerge(TailwindConfiguration, config)
}
