import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import MyFeed from "../../Assets/feed.svg?react";
import MyStats from "../../Assets/stats.svg?react";
import AddImage from "../../Assets/add.svg?react";
import Exit from "../../Assets/exit.svg?react";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width:40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
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
        <NavLink
          to="/account"
          end
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <MyFeed />
          {mobile && "My Account"}
        </NavLink>
        <NavLink
          to="/account/stats"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <MyStats />
          {mobile && "Stats"}
        </NavLink>
        <NavLink
          to="/account/post"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
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
