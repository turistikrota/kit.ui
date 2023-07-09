import { render, screen } from '@testing-library/react'
import { Header } from './Header'

it('test the header', async () => {
  render(<Header onCreateAccount={() => {}} onLogin={() => {}} onLogout={() => {}} />)
  expect(
    screen.getByRole('heading', {
      name: /acme/i,
      level: 1,
    }),
  ).toBeInTheDocument()
})
