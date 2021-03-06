import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    let iconClass = classes.IconDetailed;
    let titleClass = classes.TitleDetailed;
    let buttonType = classes.ButtonDetailed;

    if (props.itemType === 'main') {
        iconClass = classes.IconMain;
        titleClass = classes.TitleMain;
        buttonType = classes.ButtonMain;
    } else if (props.itemType === 'google') {
        iconClass = classes.IconMain;
        titleClass = classes.TitleMain;
        buttonType = classes.ButtonGoogle;
    }
    return (
        <div className={buttonType} onClick={props.click}>
            <img className={iconClass} src={props.icon} alt={props.alt} />
            <span className={titleClass}>{props.title}</span>
        </div>
    );
};

export default Button;
