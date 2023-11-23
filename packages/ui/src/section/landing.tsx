import React from 'react'

type HeadProps = {
  title: string
  subtitle: string
}

type SectionType = React.FC<React.PropsWithChildren> & {
  Head: React.FC<HeadProps>
}

const Head: React.FC<HeadProps> = ({ title, subtitle }) => {
  return (
    <div className='text-center'>
      <h2 className='my-3 text-2xl font-semibold md:my-5 md:text-4xl'>{title}</h2>
      <p className='text-slate-600 dark:text-slate-400'>{subtitle}</p>
    </div>
  )
}

const LandingSection: SectionType = ({ children }) => {
  return (
    <section className='px-4 py-20 xl:px-0'>
      <div className='mx-auto max-w-7xl'>{children}</div>
    </section>
  )
}

LandingSection.Head = Head

export default LandingSection
