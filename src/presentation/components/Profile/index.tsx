import { FC } from 'react'

import ChangeUsernameForm, { IChangeUsernameFormProps } from './ChangeUsernameForm'

export interface IProfileManagementProps {
  changeUsernameFormProps: IChangeUsernameFormProps
}

const ProfileManagement: FC<IProfileManagementProps> = ({ changeUsernameFormProps }) => {
  return (
    <div>
      <ChangeUsernameForm {...changeUsernameFormProps} />
    </div>
  )
}

export default ProfileManagement
