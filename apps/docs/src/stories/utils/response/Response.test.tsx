import { parseApiError } from '@turistikrota/ui/utils/response'

describe('parseApiError Function', () => {
  test('handles validation error', () => {
    const form = {
      setFieldError: vi.fn(),
      setSubmitting: vi.fn(),
    }

    const toast = {
      error: vi.fn(),
    }

    const error = [
      { message: 'Error 1', namespace: 'field1' },
      { message: 'Error 2', namespace: 'field2' },
    ]

    parseApiError({ error, form, toast: toast as any })

    expect(form.setFieldError).toHaveBeenCalledWith('field1', 'Error 1')
    expect(form.setFieldError).toHaveBeenCalledWith('field2', 'Error 2')
    expect(form.setSubmitting).toHaveBeenCalledWith(false)
  })

  test('handles base error as string', () => {
    const toast = {
      error: vi.fn(),
    }

    const error = 'Base Error'

    parseApiError({ error, toast: toast as any })

    expect(toast.error).toHaveBeenCalledWith('Base Error')
  })

  test('handles base error as object with message', () => {
    const toast = {
      error: vi.fn(),
    }

    const error = { message: 'Base Error' }

    parseApiError({ error, toast: toast as any })

    expect(toast.error).toHaveBeenCalledWith('Base Error')
  })

  test('does nothing if error is undefined', () => {
    const form = {
      setFieldError: vi.fn(),
      setSubmitting: vi.fn(),
    }

    const toast = {
      error: vi.fn(),
    }

    parseApiError({ form, toast: toast as any, error: undefined })

    expect(form.setFieldError).not.toHaveBeenCalled()
    expect(form.setSubmitting).not.toHaveBeenCalled()
    expect(toast.error).not.toHaveBeenCalled()
  })
})
