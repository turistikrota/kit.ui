import React from 'react'

type Props = {
  value: boolean
}

export default function Condition({ children, value }: React.PropsWithChildren<Props>) {
  return value ? children : null
}

type CbProps = {
  value: boolean
  children: () => JSX.Element
}

export function ConditionCB({ value, children }: CbProps) {
  return value ? children() : null
}
