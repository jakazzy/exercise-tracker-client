import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { FaRegUser } from 'react-icons/fa'

const Title = props => {
  return (
    <span>
      <FaRegUser /> {props.username}
    </span>
  )
}
const ProfileMenu = ({ username }) => {
  const signout = () => {}
  return (
    <DropdownButton
      id="profile-menu"
      title={<Title username={username} />}
      variant="info">
      <Dropdown.Item onClick={signout}>Sign out</Dropdown.Item>
    </DropdownButton>
  )
}

export default ProfileMenu
