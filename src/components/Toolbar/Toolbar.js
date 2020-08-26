import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Menu from './Menu/Menu';


const Toolbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <BurgerMenu open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
        </div>
    );
};

export default Toolbar;
