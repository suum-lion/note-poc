import { ChangeEvent, FC, FormEvent } from 'react'

export interface IChangeUsernameFormProps {
  displayName: string
  submitHandler(event: FormEvent<HTMLFormElement>): void
  inputFormChangeHandler(event: ChangeEvent<HTMLInputElement>): void
}

const ChangeUsernameForm: FC<IChangeUsernameFormProps> = ({
  displayName,
  submitHandler,
  inputFormChangeHandler,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={inputFormChangeHandler}
        type="text"
        placeholder="Username"
        value={displayName}
      />
      <button type="submit">닉네임 변경하기</button>
    </form>
  )
}

export default ChangeUsernameForm
