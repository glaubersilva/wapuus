import React from 'react'
import styles from './Footer.module.css';
import {ReactComponent as Logo} from '../Assets/wapuu-footer-logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer} >
            <Logo /><p className={styles.logoFooterText} >WAPUUS</p>
            <p>A place to share Wapuus</p>        
            <p className={styles.links}><a href="mailto:info@wapuus.org">Contact</a>  |  <Link to="/about">About</Link> </p>
        </footer>
    )
}

export default Footer;
