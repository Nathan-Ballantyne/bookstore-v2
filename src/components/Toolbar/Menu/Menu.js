import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import NavItems from '../NavItems/Navtems';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <NavItems />
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;