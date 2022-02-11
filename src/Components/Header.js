import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../Assets/wapuu-logo.svg';
import { UserContext } from '../UserContext';

const Header = () => {

    const { data } = React.useContext( UserContext );
    //console.log(context);

    return (
        <header className={styles.header} >
            <nav className={ ` ${styles.nav} container ` } >
                <Link className={styles.logo} to="/" aria-label="Wapuus - Home">
                    <Logo /><p className={styles.logoText} >WAPUUS</p>
                </Link>
                <Link className={styles.about} to="/about">
                    About
                </Link>
                { data ? (
                    <div>
                        <Link className={styles.login} to="/account">                    
                            { data.name }
                            
                        </Link>                        
                    </div>
                ) : (
                    <Link className={styles.login} to="/login">                    
                        Login / Register
                    </Link>
                )}                
            </nav>
        </header>
    )
}

export default Header;
