import React from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Menu from './Menu/Menu';


const Toolbar = ({open, setOpen, isLoggedIn}) => {
    // const [open, setOpen] = useState(false);
    return (
        <div>
            <BurgerMenu open={open} setOpen={setOpen} />
            <Menu isLoggedIn={isLoggedIn} open={open} setOpen={setOpen} />
        </div>
    );
};

export default Toolbar;
