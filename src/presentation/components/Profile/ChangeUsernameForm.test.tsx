import { render, screen } from '@testing-library/react'
import { ChangeEvent, FormEvent } from 'react'

import ChangeUsernameForm, { IChangeUsernameFormProps } from './ChangeUsernameForm'

const props: IChangeUsernameFormProps = {
  username: '테스트',
  inputFormChangeHandler: (e: ChangeEvent<HTMLInputElement>) => console.log(e),
  submitHandler: (e: FormEvent<HTMLFormElement>) => console.log(e),
}

test('renders update button', () => {
  render(<ChangeUsernameForm {...props} />)
  const updateButtonElement = screen.getByText(/Update Profile/i)

  expect(updateButtonElement).toBeInTheDocument()
})

test('renders input form', () => {
  render(<ChangeUsernameForm {...props} />)
  const usernameInputElement = screen.getByPlaceholderText(/Username/i)

  expect(usernameInputElement).toBeInTheDocument()
})
