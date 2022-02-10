import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import PhotoComments from './PhotoComments';
import styles from './PhotoContent.module.css';
import PhotoDelete from './PhotoDelete';
import Image from '../Helpers/Image';

const PhotoContent = ( {data, single} ) => {
    const user = React.useContext(UserContext);
    const { photo, comments } = data;

    return (
        <div className={`${styles.photo} ${single ? styles.single : ''}`}>
            <div className={styles.img}>
                <Image src={photo.src} alt={photo.title} />                
            </div>
            <div className={styles.details}>
                <div>
                    <p className={styles.author}>
                        { user.data && user.data.username === photo.author ? <PhotoDelete id={photo.id} /> : <Link to={`/profile/${photo.author}`}>@{photo.author}</Link> }
                        <span className={styles.views}>{photo.views}</span>
                    </p>
                    <h1 className="title">
                        <Link to={`/photo/${photo.id}`}>{photo.title}</Link> 
                    </h1>
                    <ul className={styles.attributes}>                        
                        <li>From: <a className="link" target="_blank" rel="noreferrer" href={photo.from_url}>{photo.from}</a></li>
                    </ul>
                    <div className={styles.caption} >
                        <p>{photo.caption}</p>
                    </div>
                </div>                
            </div>
            <PhotoComments single={single} id={photo.id} comments={comments} caption={photo.caption} />
        </div>
    )
}

export default PhotoContent;
