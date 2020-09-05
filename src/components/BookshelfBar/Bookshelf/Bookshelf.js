import React from 'react';
import classes from './Bookshelf.module.css';

const Bookshelf = (props) => {
    return (
        <div className={classes.NavCard} onClick={() => props.click(props.id)} >
            <span className={classes.Content}>{props.title}</span>
        </div>
    );
};

export default Bookshelf;
