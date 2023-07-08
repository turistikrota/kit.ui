type Timer = ReturnType<typeof setTimeout>

function debounce<T extends (...args: any[]) => any>(func: T, delay: number): (...args: Parameters<T>) => void {
  let timer: Timer | undefined
  let count = 0

  return function debouncedFn(...args: Parameters<T>) {
    count++
    const currentCount = count
    clearTimeout(timer)

    timer = setTimeout(() => {
      if (currentCount === count) {
        console.log('debouncedFn')
        func(...args)
      }
    }, delay)
  }
}

export default debounce
