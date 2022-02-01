import React from 'react';
import styles from './Input.module.css';

const Input = ( { label, type, name, value, onChange, error, onBlur, accept, placeholder, required } ) => {
    return (
        <div className={styles.wrapper}>
            {required ? 
                <label htmlFor={name} className={styles.label} ><span style={{ color: "#f31" }}>*</span> {label}</label>
            :
                <label htmlFor={name} className={styles.label} >{label}</label>
            }
            {type === 'file' && accept ? 
                <input id={name} name={name} className={styles.input} type={type} value={value} onChange={onChange} onBlur={onBlur} accept={accept} />
            : 
                <input id={name} name={name} placeholder={placeholder} className={styles.input} type={type} value={value} onChange={onChange} onBlur={onBlur} />
            }
            {error && <p className={styles.error} >{error}</p>}
        </div>        
    )
}

export default Input;
