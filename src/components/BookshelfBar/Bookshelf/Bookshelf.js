import React from 'react';
import classes from './Bookshelf.module.css';

const cards = [
    { title: 'Your Books' },
    { title: 'Winter Reads' },
    { title: 'Summer Reads' },
];

const NavCard = () => {
    return (
        <>
            {cards.map((card) => {
                return (
                    <div key={card.title} className={classes.NavCard}>
                        <span className={classes.Content}>{card.title}</span>
                    </div>
                );
            })}
        </>
    );
};

export default NavCard;
