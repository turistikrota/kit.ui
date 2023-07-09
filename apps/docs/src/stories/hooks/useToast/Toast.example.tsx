import Button from '@turistikrota/ui/button'
import { ToastListProvider, ToastProvider, useToast } from '@turistikrota/ui/toast'

function Example() {
  const toast = useToast()

  return (
    <div className='space-y-8'>
      <div className='flex items-center justify-between gap-5'>
        <Button variant='success' onClick={() => toast.success('Success')}>
          Success
        </Button>
        <Button variant='error' onClick={() => toast.error('Error')}>
          Error
        </Button>
        <Button variant='primary' onClick={() => toast.info('Info')}>
          Info
        </Button>
        <Button variant='secondary' onClick={() => toast.secondary('secondary')}>
          Secondary
        </Button>
        <Button variant='warning' onClick={() => toast.warning('Warning')}>
          Warning
        </Button>
      </div>
      <div className='flex gap-5'>
        <Button
          variant='success'
          onClick={() =>
            toast.askSuccess({
              title: 'Are you sure?',
              cancelText: 'No',
              confirmText: 'Yes',
              description: 'This action cannot be undone.',
              onCancel: () => toast.info('Cancelled'),
              onConfirm: () => toast.success('Confirmed'),
            })
          }
        >
          Ask Success
        </Button>
        <Button
          variant='error'
          onClick={() =>
            toast.askError({
              title: 'Are you sure?',
              cancelText: 'No',
              confirmText: 'Yes',
              description: 'This action cannot be undone.',
              onCancel: () => toast.info('Cancelled'),
              onConfirm: () => toast.success('Confirmed'),
            })
          }
        >
          Ask Error
        </Button>
        <Button
          variant='primary'
          onClick={() =>
            toast.askPrimary({
              title: 'Are you sure?',
              cancelText: 'No',
              confirmText: 'Yes',
              description: 'This action cannot be undone.',
              onCancel: () => toast.info('Cancelled'),
              onConfirm: () => toast.success('Confirmed'),
            })
          }
        >
          Ask Primary
        </Button>
        <Button
          variant='secondary'
          onClick={() =>
            toast.askSecondary({
              title: 'Are you sure?',
              cancelText: 'No',
              confirmText: 'Yes',
              description: 'This action cannot be undone.',
              onCancel: () => toast.info('Cancelled'),
              onConfirm: () => toast.success('Confirmed'),
            })
          }
        >
          Ask Secondary
        </Button>
        <Button
          variant='warning'
          onClick={() =>
            toast.askWarning({
              title: 'Are you sure?',
              cancelText: 'No',
              confirmText: 'Yes',
              description: 'This action cannot be undone.',
              onCancel: () => toast.info('Cancelled'),
              onConfirm: () => toast.success('Confirmed'),
            })
          }
        >
          Ask Warning
        </Button>
      </div>
    </div>
  )
}

function WithProvider() {
  return (
    <ToastListProvider>
      <ToastProvider>
        <Example />
      </ToastProvider>
    </ToastListProvider>
  )
}

export default WithProvider
