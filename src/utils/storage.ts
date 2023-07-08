export const safeStorageParse = <V>(key: string, cb: (val: V) => void) => {
  const val = localStorage.getItem(key)
  if (val) {
    try {
      cb(JSON.parse(val))
    } catch (e) {
      console.error(e)
    }
  }
}
