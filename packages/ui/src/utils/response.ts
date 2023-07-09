import { ToastContextType } from '../toast'

type ErrorChainEl = {
  error: any
  form?: any
  toast: ToastContextType
}

export const parseApiError = ({ error, form, toast }: ErrorChainEl) => {
  const arr = [checkIfValidationError, checkIfBaseError]
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i]({
        error,
        form,
        toast,
      })
    ) {
      return
    }
  }
}

const checkIfValidationError = ({ error, form, toast }: ErrorChainEl): boolean => {
  if (Array.isArray(error)) {
    error.forEach((err) => {
      setFormError({
        form,
        msg: err.message,
        callback: () => toast.error(err.message),
        field: err.namespace,
      })
    })
    return true
  }
  return false
}
const checkIfBaseError = ({ error, toast }: ErrorChainEl): boolean => {
  if (error && typeof error === 'string') {
    toast.error(error)
  } else if (error && typeof error === 'object' && error.message) {
    toast.error(error.message)
  }
  return true
}

type SetFormErrorProps = {
  form: any
  msg: string
  callback: () => void
  field?: string
}

const setFormError = ({ form, msg, callback, field }: SetFormErrorProps) => {
  if (form && form.setFieldError) {
    form.setFieldError(field || 'base', msg)
    form.setSubmitting(false)
  } else {
    callback()
  }
}
