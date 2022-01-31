import React from 'react'
import styles from './Footer.module.css';
import {ReactComponent as Logo} from '../Assets/wapuu-footer-logo.svg';

const Footer = () => {
    return (
        <footer className={styles.footer} >
            <Logo /><p className={styles.logoFooterText} >WAPUUS</p>
            <p>Some Rights Reserved</p>
        </footer>
    )
}

export default Footer;
