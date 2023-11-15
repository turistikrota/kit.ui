import React from 'react'

type AlertType = 'success' | 'error' | 'info' | 'warning' | 'primary' | 'secondary'

type Props = BaseProps & {
  type: AlertType
  onClose?: () => void
  show?: boolean
  showIcon?: boolean
  closable?: boolean
  innerClassName?: string
}

type Alert = React.FC<Props> & {
  Title: React.FC<BaseProps>
  Description: React.FC<BaseProps>
}

type BaseProps = {
  children: React.ReactNode
  className?: string
}

const Styles: Record<AlertType, string> = {
  success:
    'bg-green-400 text-green-900 border-green-400 bg-opacity-30 dark:text-green-400 dark:bg-green-900 dark:bg-opacity-30',
  error: 'bg-red-400 text-red-900 border-red-400 bg-opacity-30 dark:text-red-400 dark:bg-red-900 dark:bg-opacity-30',
  info: 'bg-blue-400 text-blue-900 border-blue-400 bg-opacity-30 dark:text-blue-400 dark:bg-blue-900 dark:bg-opacity-30',
  warning:
    'bg-yellow-400 text-yellow-900 border-yellow-400 bg-opacity-30 dark:text-yellow-400 dark:bg-yellow-900 dark:bg-opacity-30',
  primary:
    'bg-primary-400 text-primary-900 border-primary-400 bg-opacity-30 dark:text-primary-400 dark:bg-primary-900 dark:bg-opacity-30',
  secondary:
    'bg-secondary-400 text-secondary-900 border-secondary-400 bg-opacity-30 dark:text-secondary-400 dark:bg-secondary-900 dark:bg-opacity-30',
}

const Title: React.FC<BaseProps> = ({ children, className }) => {
  return <p className={`text-left font-bold ${className ? className : ''}`}>{children}</p>
}

const Description: React.FC<BaseProps> = ({ children, className }) => {
  return <p className={`text-left text-sm ${className ? className : ''}`}>{children}</p>
}

const Alert: Alert = ({
  children,
  onClose,
  closable = false,
  show = true,
  showIcon = false,
  type,
  className,
  innerClassName,
}) => {
  return (
    <>
      {show && (
        <div
          className={`relative flex items-center rounded border-l-4 p-4 ${Styles[type]} ${className ? className : ''}`}
          role='alert'
        >
          {showIcon && <i className='bx bx-info-circle mr-4 text-2xl'></i>}
          <div className={`w-full ${innerClassName ? innerClassName : ''}`}>{children}</div>
          {closable && (
            <button
              className='absolute right-1.5 top-0 ml-auto border-0 bg-transparent text-2xl font-semibold leading-none outline-none focus:outline-none'
              onClick={onClose}
            >
              <span className='block h-6 w-6 text-2xl text-black opacity-70 outline-none focus:outline-none dark:text-white'>
                ×
              </span>
            </button>
          )}
        </div>
      )}
    </>
  )
}
Alert.Title = Title
Alert.Description = Description

export default Alert
