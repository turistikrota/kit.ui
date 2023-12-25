type Props = {
  title: string
}

export default function Summary({ title, children }: React.PropsWithChildren<Props>) {
  return (
    <details className='group'>
      <summary className='text-white p-2 group-open:bg-second rounded-md group-open:rounded-b-none'>
        <strong>{title}</strong>
      </summary>
      <div className='bg-second p-2 rounded-b-md'>{children}</div>
    </details>
  )
}
