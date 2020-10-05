import React from 'react';
import Link from '../../UI/ReactLinkStyle/Link.styled';
import NavItem from '../../UI/Button/Button';
import NavItems from './NavItems.styled';

import bookIcon from '../../../assets/Icons/book-icon.png';
import listIcon from '../../../assets/Icons/list-icon.png';
import statsIcon from '../../../assets/Icons/stats-icon.png';
import userIcon from '../../../assets/Icons/user-icon.png';
import settingIcon from '../../../assets/Icons/setting-icon.png';

const navItems = [
    {
        type: 'main',
        icon: bookIcon,
        title: 'Bookstore',
        alt: 'main-icon',
        to: '/',
    },
    {
        type: 'detail',
        icon: userIcon,
        title: 'Profile',
        alt: 'profile-icon',
        to: 'profile',
    },
    {
        type: 'detail',
        icon: listIcon,
        title: 'Lists',
        alt: 'lists-icon',
        to: 'all-lists',
    },
    {
        type: 'detail',
        icon: statsIcon,
        title: 'Stats',
        alt: 'stats-icon',
        to: 'stats',
    },
    {
        type: 'detail',
        icon: settingIcon,
        title: 'Settings',
        alt: 'setting-icon',
        to: 'settings',
    },
];

const NavigationItems = () => {
    return (
        <NavItems>
            {navItems.map((item) => {
                return (
                    <Link to={item.to}>
                        <NavItem
                            key={item.title}
                            itemType={item.type}
                            icon={item.icon}
                            title={item.title}
                            alt={item.alt}
                        />
                    </Link>
                );
            })}
        </NavItems>
    );
};

export default NavigationItems;
