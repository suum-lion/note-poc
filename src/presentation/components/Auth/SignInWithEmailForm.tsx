import { ChangeEvent, FC, FormEvent } from 'react'

export interface ISignInWithEmailFormProps {
  email: string
  password: string
  error: string
  newAccount: boolean
  toggleAccount(): void
  inputFormChangeHandler(event: ChangeEvent<HTMLInputElement>): void
  formSubmitHandler(event: FormEvent<HTMLFormElement>): void
}

const SignInWithEmailForm: FC<ISignInWithEmailFormProps> = ({
  email,
  password,
  error,
  newAccount,
  toggleAccount,
  inputFormChangeHandler,
  formSubmitHandler,
}) => {
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={inputFormChangeHandler}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={inputFormChangeHandler}
        />
        <input type="submit" value={newAccount ? 'Create Account' : 'Log In'} />
        {error ? <div>{error}</div> : null}
      </form>
      <div>
        <button onClick={toggleAccount}>{newAccount ? 'Sign In' : 'Create Account'}</button>
      </div>
    </>
  )
}

export default SignInWithEmailForm
