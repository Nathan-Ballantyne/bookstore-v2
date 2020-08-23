import React from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.module.css';
import NavBar from '../NavBar/NavBar';
import ColapsedNavBar from '../ColapsedNavBar/ColapsedNavBar';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Closed];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <ColapsedNavBar />
                </div>
                <NavBar />
            </div>
        </>
    );
};

export default sideDrawer;
