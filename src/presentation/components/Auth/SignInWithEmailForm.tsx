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
          placeholder="이메일"
          required
          value={email}
          onChange={inputFormChangeHandler}
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          required
          value={password}
          onChange={inputFormChangeHandler}
        />
        <input type="submit" value={newAccount ? '회원가입' : '로그인'} />
        {error ? <div>{error}</div> : null}
      </form>
      <div>
        <button type="button" data-testid="toggleButton" onClick={toggleAccount}>
          {newAccount ? '로그인하기' : '회원가입하기'}
        </button>
      </div>
    </>
  )
}

export default SignInWithEmailForm
