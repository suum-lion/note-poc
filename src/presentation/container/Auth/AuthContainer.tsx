import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'

import { authService } from '../../../application/fbase'
import AuthManagement from '../../components/Auth'

const AuthContainer = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newAccount, setNewAccount] = useState(true)
  const [error, setError] = useState('')

  const inputFormChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event

    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (newAccount) {
        await createUserWithEmailAndPassword(authService, email, password)
      } else {
        await signInWithEmailAndPassword(authService, email, password)
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    }
  }

  const signInWithGoogleButtonHandler = useCallback(async () => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(authService, provider)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    }
  }, [])

  const toggleAccount = useCallback(() => setNewAccount(prev => !prev), [])

  return (
    <AuthManagement
      signInWithEmailProps={{
        email,
        password,
        error,
        inputFormChangeHandler,
        formSubmitHandler,
        newAccount,
        toggleAccount,
      }}
      signInWithGoogleProps={{ signInWithGoogleButtonHandler }}
    />
  )
}

export default AuthContainer
