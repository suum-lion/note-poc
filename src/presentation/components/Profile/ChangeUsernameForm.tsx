import { ChangeEvent, FC, FormEvent } from 'react'

export interface IChangeUsernameFormProps {
  username: string
  submitHandler(event: FormEvent<HTMLFormElement>): void
  inputFormChangeHandler(event: ChangeEvent<HTMLInputElement>): void
}

const ChangeUsernameForm: FC<IChangeUsernameFormProps> = () => {
  return <></>
}

export default ChangeUsernameForm
