import React from 'react'

type Props = {
  className?: string
}

type FormType = React.FC<React.PropsWithChildren<Props>> & {
  Head: typeof Head
  Body: typeof Body
  Footer: typeof Footer
}

type TitleProps = {
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

function Title({ children, size = 'lg' }: React.PropsWithChildren<TitleProps>) {
  return <h2 className={`text-left font-bold lg:block ${TitleSizes[size]}`}>{children}</h2>
}

function Subtitle({ children }: React.PropsWithChildren) {
  return <p className='text-left text-sm text-gray-600 dark:text-gray-400 lg:block'>{children}</p>
}

function Head({ children }: React.PropsWithChildren) {
  return <div className='bg-second rounded-t-md border-b p-4'>{children}</div>
}

function Body({ children, className }: React.PropsWithChildren<Props>) {
  return <div className={`bg-second p-4 ${className ? className : ''}`}>{children}</div>
}

function Footer({ children, className }: React.PropsWithChildren<Props>) {
  return <div className={`bg-second rounded-b-md border-t p-4 ${className ? className : ''}`}>{children}</div>
}

Head.Title = Title
Head.Subtitle = Subtitle

const FormSection: FormType = ({ children, className }) => {
  return <section className={className}>{children}</section>
}

FormSection.Head = Head
FormSection.Body = Body
FormSection.Footer = Footer

export default FormSection
