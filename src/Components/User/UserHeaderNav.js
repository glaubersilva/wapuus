import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MyFeed } from '../../Assets/feed.svg';
import { ReactComponent as MyStats } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Exit } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {

    const [mobile, setMobile] = React.useState(null);
    const {userLogout} = React.useContext( UserContext );
    //const { data, userLogout } = React.useContext( UserContext );

    return (
        <nav className={styles.nav} >
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
    )
}

export default UserHeaderNav;
