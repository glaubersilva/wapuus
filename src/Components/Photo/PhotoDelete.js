import React from 'react';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import styles from './PhotoDelete.module.css';

const PhotoDelete = ( {id} ) => {
    
    const {loading, request} = useFetch();

    async function handleClick( event ){

        const confirm = window.confirm('Are your sure you want delete this?');

        if ( confirm ) {
            event.preventDefault();
            const {url, options} = PHOTO_DELETE(id);
            const {response} = await request(url, options);
            if (response.ok) window.location.reload();
        }
    }

    return (        
        <>
            {loading 
                ? 
                <button className={styles.delete} disabled>Deleting...</button> 
                :
                <button onClick={handleClick} className={styles.delete}>Delete</button>
            }            
        </>
    )
}

export default PhotoDelete;
