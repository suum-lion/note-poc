import { updateProfile } from 'firebase/auth'
import { FormEvent, useCallback, useState } from 'react'

import { useAuth } from '../../../infrastructure/AuthContext'
import ProfileManagement from '../../components/Profile'

const ProfileContainer = () => {
  const { user } = useAuth()
  const [displayName, setDisplayName] = useState(user?.displayName ?? '')

  const inputFormChangeHandler = useCallback(event => {
    const {
      target: { value },
    } = event
    setDisplayName(value)
  }, [])

  const submitHandler = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      if (user !== null && user.displayName !== displayName) {
        await updateProfile(user, {
          displayName,
        })
      }
    },
    [displayName, user],
  )

  return (
    <ProfileManagement
      changeUsernameFormProps={{
        displayName,
        inputFormChangeHandler,
        submitHandler,
      }}
    />
  )
}

export default ProfileContainer
