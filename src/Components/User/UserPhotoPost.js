import React from 'react';
import styles from './UserPhotoPost.module.css';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helpers/Error';
import { PHOTO_POST } from '../../api';
import { useNavigate } from 'react-router';
import Head from '../Helpers/Head';

const UserPhotoPost = () => {

    const name = useForm();

    const from = useForm();
    const from_url = useForm();    
    //const caption = useForm();
    const [caption, setCaption] = React.useState('');
    
    const weight = useForm('number');
    const age = useForm('number');
    const [img, setImg] = React.useState({});
    const {data, error, loading, request} = useFetch();
    const navigate = useNavigate();

    React.useEffect( () => {
        if (data) {
            navigate('/account');
        }    
    }, [data, navigate] );

    function handleSubmit( event ) {
        event.preventDefault();
        const formData = new FormData();

        formData.append('img', img.raw );
        formData.append('name', name.value );
        formData.append('weight', weight.value );
        formData.append('age', age.value );
        formData.append('from', from.value );
        formData.append('from_url', from_url.value );
        formData.append('caption', caption );

        const token = window.localStorage.getItem('token');
        const { url, options } = PHOTO_POST(formData, token);
        request(url, options);
    }

    function handleImgChange( {target} ) {
        setImg({
            preview: URL.createObjectURL( target.files[0] ),
            raw: target.files[0],
        });
    }

    /**
     * <Input label="Weight" type="number" name="weight" {...weight} />
       <Input label="Age" type="number" name="age" {...age} />
     */

    return (
        <section className={` ${styles.photoPost} animeLeft`} >
            <Head title="Posts" description="Upload your Wappu photo"/>
            <form onSubmit={handleSubmit}>                            
                <Input label="Image:" className={styles.file} type="file" name="img" id="img" onChange={handleImgChange} accept="image/png, image/jpeg" required />
                <Input label="Name:" placeholder="The Original" type="text" name="name" {...name} required />                
                <Input label="From:" placeholder="WordPress Japan" name="from" {...from} />
                <Input label="From URL:" placeholder="https://ja.wordpress.org/" type="text" name="from-url" {...from_url} />      
                <label htmlFor="caption" className={styles.label} >Caption:</label>          
                <textarea 
                    className={styles.textarea}
                    id="caption"
                    name="caption"
                    rows="3"
                    maxLength ="150"
                    placeholder="Write a caption maximum of 150 characters..."
                    value={caption}
                    onChange={ ({target}) => setCaption(target.value) }
                />
                {loading ? <Button disabled>Uploading...</Button> : <Button>Publish</Button>}    
                <Error />
            </form>
            <div>
            {img.preview && <div className={styles.preview} style={ {backgroundImage: `url( '${img.preview}' )` } }></div>}
            </div>
        </section>
    )
}

export default UserPhotoPost;
