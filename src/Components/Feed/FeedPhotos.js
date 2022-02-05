import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import styles from './FeedPhotos.module.css';
import { Link } from 'react-router-dom';

const FeedPhotos = ( { page, user, setModalPhoto, setInfinite } ) => {

    const {data, loading, error, request} = useFetch();

    React.useEffect( () => {

        async function fetchPhotos(){
            const total = 6;
            const {url, options} = PHOTOS_GET( {page, total, user} );
            const {response, json} = await request(url, options);
            if ( response && response.ok && json.length < total ) setInfinite(false);
            console.log(json);
        }

        fetchPhotos();

    }, [request, user, page, setInfinite] );

    if (error) return <Error message={error}/>;
    if (loading) return <Loading />;
    if (data) {
        if ( user && data.length === 0 ) {

            return ( 
                <div 
                    style={{
                        textAlign: 'center',
                        padding: '2rem 0 4rem 0',
                        color: '#888',
                    }}
                >
                    <p>
                        You have not added any Wappu yet...                        
                    </p>                    
                    <p>
                        <Link className={styles.new} to="/account/post">Post your first Wapuu</Link>
                    </p>
                </div>
            )

        } else {
        
            return (
                <ul className={`${styles.feed} animeLeft`}>
                    { data.map( photo =>  (
                        <FeedPhotosItem 
                            key={photo.id} 
                            photo={photo} 
                            setModalPhoto={setModalPhoto}
                        /> 
                    ) ) }                
                </ul>
            )
        }
    } else {        
        return 'null';
    }
}

export default FeedPhotos;
