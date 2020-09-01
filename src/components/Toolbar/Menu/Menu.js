import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import NavItems from '../NavItems/Navtems';
import GoogleLoginButton from '../../GoogleAuth/LoginHooks/LoginHooks';
import GoogleLogOutButton from '../../GoogleAuth/LogoutHooks/LogoutHooks';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <NavItems />
      <GoogleLoginButton />
      <GoogleLogOutButton />
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;