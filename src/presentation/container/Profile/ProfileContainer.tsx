import { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'

import ProfileComponent from '../../components/Profile/ProfileComponent'

const ProfileContainer = () => {
  const history = useHistory()
  const [username, setUsername] = useState('')

  const onLogOutClick = useCallback(() => {
    history.push('/')
  }, [])

  const onChange = useCallback(event => {
    const {
      target: { value },
    } = event
    setUsername(value)
  }, [])

  const onSubmit = useCallback(async event => {
    event.preventDefault()
    // if (userObj.username !== username) {
    //   await userObj.updateProfile({
    //     username,
    //   })
    //   refreshUser()
    // }
  }, [])

  return (
    <ProfileComponent
      username={username}
      onChange={onChange}
      onSubmit={onSubmit}
      onLogOutClick={onLogOutClick}
    />
  )
}

export default ProfileContainer
