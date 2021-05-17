import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MyFeed } from '../../Assets/feed.svg';
import { ReactComponent as MyStats } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Exit } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
    
    const {userLogout} = React.useContext( UserContext );
    //const { data, userLogout } = React.useContext( UserContext );
    const mobile = useMedia( '(max-width:40rem)' );
    const [mobileMenu, setMobileMenu] = React.useState(null);
    const {pathname} = useLocation();

    React.useEffect( () => {
        setMobileMenu(false);
    }, [pathname]);

    return (
        <>
            { mobile && <button className={ `${ styles.mobileButton } ${ mobileMenu && styles.mobileButtonActive } ` } aria-label="Menu" onClick={ () => setMobileMenu( ! mobileMenu ) } ></button> }
            <nav className={ `${ mobile ? styles.navMobile : styles.nav } ${ mobileMenu && styles.navMobileActive }` } >
                <NavLink to="/account" end activeClassName={styles.active}>
                    <MyFeed />
                    { mobile && 'Minhas Fotos' }
                </NavLink>
                <NavLink to="/account/stats" activeClassName={styles.active}>
                    <MyStats />
                    { mobile && 'Estatísticas' }
                </NavLink>
                <NavLink to="/account/post" activeClassName={styles.active}>
                    <AddPhoto />
                    { mobile && 'Adicionar Foto' }
                </NavLink>
                <button onClick={userLogout} >
                    <Exit />
                    { mobile && 'Sair' }
                </button>
            </nav>
        </>
    )
}

export default UserHeaderNav;
