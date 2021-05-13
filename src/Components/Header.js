import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {

    const { data, userLogout } = React.useContext( UserContext );
    //console.log(context);

    return (
        <header className={styles.header} >
            <nav className={ ` ${styles.nav} container ` } >
                <Link className={styles.logo} to="/" aria-label="Dogs - Home">
                    <Dogs />
                </Link>
                { data ? (
                    <div>
                        <Link className={styles.login} to="/account">                    
                            { data.name }
                            
                        </Link>
                        <button onClick={userLogout}>Exit</button>
                    </div>
                ) : (
                    <Link className={styles.login} to="/login">                    
                        Login / Criar
                    </Link>
                )}                
            </nav>
        </header>
    )
}

export default Header;
