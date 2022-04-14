import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MyFeed } from "../../Assets/feed.svg";
import { ReactComponent as MyStats } from "../../Assets/stats.svg";
import { ReactComponent as AddImage } from "../../Assets/add.svg";
import { ReactComponent as Exit } from "../../Assets/exit.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
    const { userLogout } = React.useContext(UserContext);
    //const { data, userLogout } = React.useContext( UserContext );
    const mobile = useMedia("(max-width:40rem)");
    const [mobileMenu, setMobileMenu] = React.useState(null);
    const { pathname } = useLocation();

    React.useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    return (
        <>
            {mobile && (
                <button
                    className={`${styles.mobileButton} ${
                        mobileMenu && styles.mobileButtonActive
                    } `}
                    aria-label="Menu"
                    onClick={() => setMobileMenu(!mobileMenu)}
                ></button>
            )}
            <nav
                className={`${mobile ? styles.navMobile : styles.nav} ${
                    mobileMenu && styles.navMobileActive
                }`}
            >
                <NavLink to="/account" end activeClassName={styles.active}>
                    <MyFeed />
                    {mobile && "My Account"}
                </NavLink>
                <NavLink to="/account/stats" activeClassName={styles.active}>
                    <MyStats />
                    {mobile && "Stats"}
                </NavLink>
                <NavLink to="/account/post" activeClassName={styles.active}>
                    <AddImage />
                    {mobile && "Post Wapuu"}
                </NavLink>
                <button onClick={userLogout}>
                    <Exit />
                    {mobile && "Exit"}
                </button>
            </nav>
        </>
    );
};

export default UserHeaderNav;
