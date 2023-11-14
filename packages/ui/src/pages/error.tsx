import React from 'react'

type Props = {
  code?: number
  title: string
  subtitle: string
  button: React.ReactNode
}

function ErrorPage({ code = 404, title, subtitle, button }: Props) {
  return (
    <main className='relative flex h-full items-center justify-center overflow-hidden'>
      <section className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h1 className='text-secondary-600 dark:text-secondary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl'>
            {code}
          </h1>
          <p className='mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl'>{title}</p>
          <p className='mb-4 text-lg font-light text-gray-500 dark:text-gray-400'>{subtitle}</p>
          {button}
        </div>
      </section>
    </main>
  )
}

export default ErrorPage
