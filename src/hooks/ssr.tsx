export default function useSSR(): boolean {
  return typeof window === 'undefined'
}

export function useClient(): boolean {
  return typeof window !== 'undefined'
}
