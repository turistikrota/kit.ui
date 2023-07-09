import { wait } from '@turistikrota/ui/utils/async'

describe('wait Function', () => {
  vi.useFakeTimers()

  test('resolves after the specified delay', async () => {
    const delay = 1000
    const promise = wait(delay)

    vi.advanceTimersByTime(delay)

    await expect(promise).resolves.toBeUndefined()
  })

  test('resolves immediately with zero delay', async () => {
    const promise = wait(0)

    await expect(promise).resolves.toBeUndefined()
  })

  test('does not resolve before the specified delay', async () => {
    const delay = 1000
    const promise = wait(delay)

    vi.advanceTimersByTime(delay - 1)

    await expect(promise).rejects.toThrowError('Timed out')
  })
})
