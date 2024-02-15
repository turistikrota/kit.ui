import React, { FC } from 'react'

type Variant = 'primary' | 'secondary'

export type LinkComponent = FC<{ href: string; target?: string; children: React.ReactNode }>

type LogoItem = {
  text: string
  variant: Variant
}

const Variants: Record<Variant, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
}

const HoverVariants: Record<Variant, string> = {
  primary: 'group-hover:text-primary',
  secondary: 'group-hover:text-secondary',
}

type LogoProps = {
  items: LogoItem[]
  active?: boolean
  main?: boolean
  openNewTab?: boolean
  link: string
  LinkComponent: LinkComponent
}

const ModernLogo: FC<LogoProps> = ({ items, active, main, link, openNewTab, LinkComponent }) => {
  return (
    <LinkComponent href={link} target={openNewTab ? '_blank' : '_self'}>
      <span
        style={{
          fontFamily: 'Verdana, Verdana',
        }}
        className={`group flex rounded-md px-2.5 py-1.5 ${
          active ? 'bg-primary' : 'hover:bg-primary '
        } bg-opacity-10 transition-colors duration-200 hover:bg-opacity-10`}
      >
        {items.map((item, index) => (
          <span
            key={index}
            className={`${
              active || main
                ? Variants[item.variant]
                : `${HoverVariants[item.variant]} text-gray-800 dark:text-gray-300`
            } text-lg transition-colors duration-200`}
          >
            {item.text}
          </span>
        ))}
      </span>
    </LinkComponent>
  )
}

export default ModernLogo
