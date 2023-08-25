import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom"; // classes - 14 урок

const Navbar = () => {
    return <nav className={classes.nav}>
        <dir>
            <NavLink to="/profile" className = { navData => navData.isActive ? classes.active : classes.item }>Profile</NavLink>
        </dir>
        <dir>
            <NavLink to="/dialogs" className = { navData => navData.isActive ? classes.active : classes.item }>Message</NavLink>
        </dir>
        <dir>
            <NavLink to="/news" className = { navData => navData.isActive ? classes.active : classes.item }>News</NavLink>
        </dir>
        <dir >
            <NavLink to="/music" className = { navData => navData.isActive ? classes.active : classes.item }>Music</NavLink>
        </dir>
        <dir >
            <NavLink to="/settings" className = { navData => navData.isActive ? classes.active : classes.item }>Settings</NavLink>
        </dir>

    </nav>

}
// activeClassName={classes.activeLink}
export default Navbar;