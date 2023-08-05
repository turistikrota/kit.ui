type Props = {
  title: string
}

export default function Summary({ title, children }: React.PropsWithChildren<Props>) {
  return (
    <details className='group'>
      <summary className='text-white p-4 group-open:bg-third rounded-md group-open:rounded-b-none'>
        <strong>{title}</strong>
      </summary>
      <div className='bg-third p-4 rounded-b-md'>{children}</div>
    </details>
  )
}
