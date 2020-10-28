import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import NavItems from '../NavItems/Navtems';
import GoogleLogOutButton from '../../GoogleAuth/LogoutHooks/LogoutHooks';

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <NavItems />
            <GoogleLogOutButton />
        </StyledMenu>
    );
};
Menu.propTypes = {
    open: bool.isRequired,
};
export default Menu;
