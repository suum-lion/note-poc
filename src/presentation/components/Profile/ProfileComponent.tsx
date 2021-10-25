import { FC } from 'react'

interface IProfileComponentProps {
  username: string
  onSubmit(event: any): void
  onChange(event: any): void
  onLogOutClick(event: any): void
}

const ProfileComponent: FC<IProfileComponentProps> = ({
  username,
  onSubmit,
  onChange,
  onLogOutClick,
}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" placeholder="Display name" value={username} />
        <input type="submit" value="Update Profile" />
      </form>
      <div>
        <button onClick={onLogOutClick}>Log Out</button>
      </div>
    </>
  )
}

export default ProfileComponent
