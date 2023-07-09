import { safeStorageParse } from '@turistikrota/ui/utils/storage'

describe('safeStorageParse Function', () => {
  afterEach(() => {
    localStorage.clear()
  })

  test('calls callback with parsed value when valid JSON string exists in localStorage', () => {
    const data = { name: 'John Doe', age: 30, email: 'johndoe@example.com' }
    localStorage.setItem('myKey', JSON.stringify(data))

    const callback = vi.fn()

    safeStorageParse('myKey', callback)

    expect(callback).toHaveBeenCalledWith(data)
  })

  test('does not call callback when key does not exist in localStorage', () => {
    const callback = vi.fn()

    safeStorageParse('nonExistentKey', callback)

    expect(callback).not.toHaveBeenCalled()
  })

  test('handles error gracefully when parsing fails', () => {
    const invalidData = { name: 'John Doe', age: 30, email: 'johndoe@example.com' }
    localStorage.setItem('myerrKey', JSON.stringify(invalidData) + 'aasas json')

    const consoleErrorSpy = vi.spyOn(console, 'error')

    safeStorageParse('myerrKey', () => {})

    expect(consoleErrorSpy).toHaveBeenCalled()

    consoleErrorSpy.mockRestore()
  })
})
