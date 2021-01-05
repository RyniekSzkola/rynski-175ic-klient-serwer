import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Zbuduj burgera</NavigationItem>
        <NavigationItem link="/orders">Zamówienia</NavigationItem>
    </ul>
);

export default navigationItems;