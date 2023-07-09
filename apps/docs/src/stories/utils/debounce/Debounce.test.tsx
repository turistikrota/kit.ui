import debounce from '@turistikrota/ui/utils/debounce'

describe('debounce Function', () => {
  vi.useFakeTimers()

  test('calls the function after the specified delay', () => {
    const mockFn = vi.fn()
    const debouncedFn = debounce(mockFn, 500)

    debouncedFn()

    expect(mockFn).not.toHaveBeenCalled()

    vi.advanceTimersByTime(500)

    expect(mockFn).toHaveBeenCalled()
  })

  test('does not call the function if called multiple times within the delay', () => {
    const mockFn = vi.fn()
    const debouncedFn = debounce(mockFn, 500)

    debouncedFn()
    debouncedFn()
    debouncedFn()

    expect(mockFn).not.toHaveBeenCalled()

    vi.advanceTimersByTime(500)

    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  test('calls the function with the latest arguments', () => {
    const mockFn = vi.fn()
    const debouncedFn = debounce(mockFn, 500)

    debouncedFn('arg1')
    debouncedFn('arg2')
    debouncedFn('arg3')

    vi.advanceTimersByTime(500)

    expect(mockFn).toHaveBeenCalledWith('arg3')
  })
})
