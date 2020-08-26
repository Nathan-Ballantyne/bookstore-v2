import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './BurgerMenu.styled';
const BurgerMenu = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}
BurgerMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default BurgerMenu;
