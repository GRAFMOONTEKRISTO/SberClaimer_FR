import React from "react";
import classes from './Header.module.css'; // classes - 14 урок
const Header = () => {
    return <header className={classes.header}>
        <img src="https://dich.media/wp-content/uploads/2020/09/sberbank-noviy-format-rebranding-sber.jpg"
             alt="LOGO"/>
    </header>
}

export default Header;