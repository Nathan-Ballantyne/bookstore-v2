import React from 'react';
import NavItem from './NavItem/NavItem';

import icon from '../../assets/Icons/book-icon.png';

const navItems = [
    { type: 'main', icon: icon, title: 'Bookstore', alt: 'main-icon' },
    { type: 'detail', icon: icon, title: 'Profile', alt: 'profile-icon' },
    { type: 'detail', icon: icon, title: 'Lists', alt: 'lists-icon' },
    { type: 'detail', icon: icon, title: 'Stats', alt: 'stats-icon' },
];

const NavigationItems = () => {
    return (
        <>
            {navItems.map((item) => {
                return (
                    <NavItem
                        key={item.title}
                        itemType={item.type}
                        icon={item.icon}
                        title={item.title}
                        alt={item.alt}
                    />
                );
            })}
        </>
    );
};

export default NavigationItems;
