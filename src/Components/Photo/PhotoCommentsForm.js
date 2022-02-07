import React from 'react';
import { COMMENT_POST } from '../../api';
//import {ReactComponent as Send} from '../../Assets/enviar.svg'
import {ReactComponent as Send} from '../../Assets/send.svg'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helpers/Error';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ( { id, setComments, single } ) => {    
    
    const [comment, setComment] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const {request, error} = useFetch();

    async function handleSubmit( event ) { 
        event.preventDefault();
        setLoading(true);
        const {url, options} = COMMENT_POST(id, {comment});                
        const {response, json} = await request(url, options);
        if (response.ok) {
            setLoading(false);
            setComment('');
            setComments( (comments) => [...comments, json] );
        }
    }

    return (
        <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
            <textarea 
                className={styles.textarea}
                id="comment"
                name="comment"
                placeholder="Comment..."
                value={comment} 
                onChange={ ({target}) => setComment(target.value) } 
            />
            {loading ? <button className={styles.buttonDisabled} disabled><Send /></button> : <button className={styles.button}><Send /></button>}            
            <Error message={error} />
        </form>
    )
}

export default PhotoCommentsForm
