import { toFormData } from '@turistikrota/ui/utils/transform'

describe('toFormData Function', () => {
  test('converts object to FormData', () => {
    const data = { name: 'John Doe', age: 30, email: 'johndoe@example.com' }
    const formData = toFormData(data)

    expect(formData).toBeInstanceOf(FormData)
    expect([...formData.entries()]).toEqual([
      ['name', 'John Doe'],
      ['age', '30'],
      ['email', 'johndoe@example.com'],
    ])
  })
})
