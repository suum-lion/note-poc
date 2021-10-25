import { FC } from 'react'

import SignInWithEmailForm, { ISignInWithEmailFormProps } from './SignInWithEmailForm'
import SignInWithGoogle, { ISignInWithGoogleProps } from './SignInWithGoogle'

interface IAuthManagementProps {
  signInWithEmailProps: ISignInWithEmailFormProps
  signInWithGoogleProps: ISignInWithGoogleProps
}

const AuthManagement: FC<IAuthManagementProps> = ({
  signInWithEmailProps,
  signInWithGoogleProps,
}) => {
  return (
    <div>
      <SignInWithEmailForm {...signInWithEmailProps} />
      <SignInWithGoogle {...signInWithGoogleProps} />
    </div>
  )
}

export default AuthManagement
