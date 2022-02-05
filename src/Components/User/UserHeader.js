import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router';

const UserHeader = () => {

    const [title, setTitle] = React.useState('');
    const location = useLocation();

    React.useEffect( () => {
        
        switch ( location.pathname ) {
            case '/account/post': 
            setTitle( 'Post Wapuu' );
            break;
            case '/account/stats': 
            setTitle( 'Stats' );
            break;
            default: 
            setTitle( 'My Wapuus' );
        }        

    }, [location]);

    return (
        <header className={styles.header}>
            <h1 className="title">{title}</h1>
            <UserHeaderNav />
        </header>
    )
}

export default UserHeader;
