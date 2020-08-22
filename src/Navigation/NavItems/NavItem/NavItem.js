import React from 'react';
import classes from './NavItem.module.css';

const NavItem = (props) => {
    let iconClass = classes.IconDetailed;
    let titleClass = classes.TitleDetailed;
    let navType = classes.NavItemDetailed;

    if (props.itemType === 'main') {
        iconClass = classes.IconMain;
        titleClass = classes.TitleMain;
        navType = classes.NavItemMain;
    }
    return (
        <div className={navType}>
             <img className={iconClass}
                src={props.icon}
                alt={props.alt}
            />
            <span className={titleClass}>{props.title}</span>
        </div>
    );
};

export default NavItem;
