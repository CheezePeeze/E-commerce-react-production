
import logo from '../../assets/logo.png';
import {
  DropdownMenu,
  DropdownItem,
  DropdownDivider,
  Dropdown,
} from 'semantic-ui-react'
const Navbar = () => {

  return (
    <>
      <img src={logo} width={200} />
      <Dropdown text='File'>
        <DropdownMenu>
          <DropdownItem text='New' />
          <DropdownItem text='Open...' description='ctrl + o' />
          <DropdownItem text='Save as...' description='ctrl + s' />
          <DropdownItem text='Rename' description='ctrl + r' />
          <DropdownItem text='Make a copy' />
          <DropdownItem icon='folder' text='Move to folder' />
          <DropdownItem icon='trash' text='Move to trash' />
          <DropdownDivider />
          <DropdownItem text='Download As...' />
          <DropdownItem text='Publish To Web' />
          <DropdownItem text='E-mail Collaborators' />
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

export default Navbar