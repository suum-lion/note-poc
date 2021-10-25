import { render, screen } from '@testing-library/react'
import { ChangeEvent, FormEvent } from 'react'

import SignInWithEmailForm, { ISignInWithEmailFormProps } from './SignInWithEmailForm'

const props: ISignInWithEmailFormProps = {
  email: 'test@test.com',
  password: 'test',
  error: '',
  newAccount: true,
  toggleAccount: () => !props.newAccount,
  inputFormChangeHandler: (e: ChangeEvent<HTMLInputElement>) => console.log(e),
  signInFormSubmitHandler: (e: FormEvent<HTMLFormElement>) => console.log(e),
}

test('renders Form', () => {
  render(<SignInWithEmailForm {...props} />)
  const buttonElement = screen.getByText(/Sign In/i)
  const emailInputElement = screen.getByPlaceholderText(/Email/i)
  const passwordInputElement = screen.getByPlaceholderText(/Password/i)
  const toggleButtonElement = screen.getByText(/Create Account/i)

  expect(buttonElement).toBeInTheDocument()
  expect(emailInputElement).toBeInTheDocument()
  expect(passwordInputElement).toBeInTheDocument()
  expect(toggleButtonElement).toBeInTheDocument()
})
