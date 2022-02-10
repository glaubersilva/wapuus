import React from 'react'

const PhotoPost = () => {

    const [token, setToken] = React.useState('');
    const [name, setName] = React.useState('');    
    const [img, setImg] = React.useState('');

    // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd2FwdXVzLWFwaS5sb2NhbCIsImlhdCI6MTYyMDQ3OTgyNywibmJmIjoxNjIwNDc5ODI3LCJleHAiOjE2MjkxMTk4MjcsImRhdGEiOnsidXNlciI6eyJpZCI6IjQifX19.FT4RclPTC-UuFd5sDFWd0GP8syXG6fOeDLqNDBhMaXg

    function handleSubmit(event){
        event.preventDefault();

        console.log({
            token,
            name,            
            img
        });

        const formData = new FormData();
        formData.append( 'name', name );                
        formData.append( 'img', img );

        fetch('https://wapuus-api.local/json/wapuus-api/v1/photo', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token
            },
            body: formData,
        }).then( (response) =>{
            console.log( response );
            return response.json();
        }).then ( (json) => {
            console.log( json) ;
            return json;
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="toekn"
                value={token}
                onChange={ ({target}) => setToken(target.value) }
            />
            <input
                type="text"
                placeholder="name"
                value={name}
                onChange={ ({target}) => setName(target.value) }
            />    
            <input
                type="file"                
                onChange={ ({target}) => setImg(target.files[0]) }
            />
            <button>Enviar</button>
        </form>
    )
}

export default PhotoPost;
