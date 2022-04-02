import React from 'react';
import {UserContext} from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';
import PhotoCommentDelete from './PhotoCommentDelete';

const PhotoComments = ( props ) => {
    
    const [comments, setComments] = React.useState( () => props.comments );
    const commentsSection = React.useRef(null);
    const {login} = React.useContext(UserContext);
    const user = React.useContext(UserContext);

    React.useEffect( () => {
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }, [comments]);

    return (
        <>            
            <ul ref={commentsSection} className={`${styles.comments} ${props.single ? styles.single : ''}`}>
                {comments.map( comment => <li key={comment.id}>
                   <b>{comment.author}: </b>             
                   <span> {comment.comment} </span>
                   { user.data && user.data.username === comment.author ? <PhotoCommentDelete id={comment.id} /> : '' }
                </li>)}
            </ul>
            { login && <PhotoCommentsForm single={props.single} id={props.id} setComments={setComments} /> }
        </>
    )
}

export default PhotoComments;
