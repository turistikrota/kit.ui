import React from 'react'

type Props = {
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

type FormType = React.FC<React.PropsWithChildren<Props>> & {
  Head: typeof Head
  Body: typeof Body
  Footer: typeof Footer
}

type TitleProps = Props & {
  size?: 'md' | 'lg'
}

type Head = {
  Title: typeof Title
  Subtitle: typeof Subtitle
} & typeof Head

const TitleSizes = {
  md: 'text-md',
  lg: 'text-lg',
}

function Title({ children, className, size = 'lg' }: React.PropsWithChildren<TitleProps>) {
  return (
    <h2 className={`text-left font-bold lg:block ${TitleSizes[size]} ${className ? className : ''}`}>{children}</h2>
  )
}

function Subtitle({ children, className }: React.PropsWithChildren<Props>) {
  return (
    <p className={`text-left text-sm text-gray-600 dark:text-gray-400 lg:block ${className ? className : ''}`}>
      {children}
    </p>
  )
}

function Head({ children, className }: React.PropsWithChildren<Props>) {
  return <div className={`rounded-t-md border-b p-4 ${className ? className : ''}`}>{children}</div>
}

function Body({ children, className }: React.PropsWithChildren<Props>) {
  return <div className={`p-4 ${className ? className : ''}`}>{children}</div>
}

function Footer({ children, className }: React.PropsWithChildren<Props>) {
  return <div className={`rounded-b-md border-t p-4 ${className ? className : ''}`}>{children}</div>
}

Head.Title = Title
Head.Subtitle = Subtitle

const FormSection: FormType = ({ children, className, ...rest }) => {
  return (
    <section className={className} {...rest}>
      {children}
    </section>
  )
}

FormSection.Head = Head
FormSection.Body = Body
FormSection.Footer = Footer

export default FormSection
