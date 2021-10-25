import { render, screen } from '@testing-library/react'

import SignInWithGoogle, { ISignInWithGoogleProps } from './SignInWithGoogle'

const props: ISignInWithGoogleProps = {
  signInWithGoogleButtonHandler: () => new Promise(resolve => resolve()),
}

test('renders Sign In Button', () => {
  render(<SignInWithGoogle {...props} />)
  const buttonElement = screen.getByText(/Continue with Google/i)

  expect(buttonElement).toBeInTheDocument()
})
