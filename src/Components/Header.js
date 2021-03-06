import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../Assets/wapuu-logo.svg";
import { UserContext } from "../UserContext";

const Header = () => {
    const { data } = React.useContext(UserContext);
    //console.log(context);

    return (
        <header className={styles.header}>
            <nav className={` ${styles.nav} container `}>
                <Link className={styles.logo} to="/" aria-label="Wapuus - Home">
                    <Logo />
                    <p className={styles.logoText}>WAPUUS</p>
                </Link>
                <Link className={styles.about} to="/about">
                    about
                </Link>
                {data ? (
                    <div>
                        <Link className={styles.login} to="/account">
                            {data.username}
                        </Link>
                    </div>
                ) : (
                    <Link className={styles.login} to="/login">
                        login
                    </Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
