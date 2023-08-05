export const getMdContent = async (url: string, noCache = false): Promise<string> => {
  const headers = noCache ? { 'Cache-Control': 'no-cache' } : undefined
  const res = await fetch(url, { headers }).catch(() => {
    return { text: () => '' }
  })
  return res.text()
}
