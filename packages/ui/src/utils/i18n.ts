import { Locales } from '../types'

export function locativeSuffix(name: string, apostrophe = true): string {
  const vowels = 'aeıioöuü'
  const vowelsBack = 'aıou'

  let lastVowel = null
  for (let i = name.length - 1; i >= 0; i--) {
    if (vowels.includes(name[i])) {
      lastVowel = name[i]
      break
    }
  }
  let suffix = lastVowel && vowelsBack.includes(lastVowel) ? 'da' : 'de'

  if (apostrophe) {
    suffix = "'" + suffix
  }

  return name + suffix
}

export function withLocativeSuffix(locale: string, name: string): string {
  if (locale === Locales.tr) {
    return locativeSuffix(name)
  }
  return name
}
