import React from 'react';
import NavItem from './NavItem/NavItem';

import bookIcon from '../../../assets/Icons/book-icon.png';
import listIcon from '../../../assets/Icons/list-icon.png';
import statsIcon from '../../../assets/Icons/stats-icon.png';
import userIcon from '../../../assets/Icons/user-icon.png';
import settingIcon from '../../../assets/Icons/setting-icon.png';

const navItems = [
    { type: 'main', icon: bookIcon, title: 'Bookstore', alt: 'main-icon' },
    { type: 'detail', icon: userIcon, title: 'Profile', alt: 'profile-icon' },
    { type: 'detail', icon: listIcon, title: 'Lists', alt: 'lists-icon' },
    { type: 'detail', icon: statsIcon, title: 'Stats', alt: 'stats-icon' },
    { type: 'detail', icon: settingIcon, title: 'Settings', alt: 'setting-icon' },
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
