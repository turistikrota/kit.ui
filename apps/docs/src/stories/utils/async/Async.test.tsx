import { wait } from '@turistikrota/ui/utils/async'

describe('wait Function', () => {
  vi.useFakeTimers()

  beforeEach(() => {
    vi.clearAllTimers()
    vi.useFakeTimers()
  })

  test('resolves after the specified delay', async () => {
    const delay = 500
    const promise = wait(delay)

    vi.advanceTimersByTime(delay)

    await expect(promise).resolves.toBeUndefined()
  })

  test('resolves immediately with zero delay', async () => {
    const promise = wait(0)

    vi.advanceTimersByTime(0)

    await expect(promise).resolves.toBeUndefined()
  })
})
