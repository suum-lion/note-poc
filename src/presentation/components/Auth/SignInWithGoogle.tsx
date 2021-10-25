import { FC } from 'react'

export interface ISignInWithGoogleProps {
  signInWithGoogleButtonHandler(): Promise<void>
}

const SignInWithGoogle: FC<ISignInWithGoogleProps> = ({ signInWithGoogleButtonHandler }) => {
  return (
    <div>
      <button type="button" onClick={signInWithGoogleButtonHandler}>
        Continue with Google
      </button>
    </div>
  )
}

export default SignInWithGoogle
