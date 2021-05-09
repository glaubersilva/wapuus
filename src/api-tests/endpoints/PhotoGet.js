import React from 'react'



const PhotoGet = () => {

    const [id, setId] = React.useState('');

    function handleSubmit( event ) {
        event.preventDefault();

        fetch(`https://wapuus-api.local/json/gs-wapuus-api/v1/photo/${id}`
        ).then( (response) =>{
            console.log( response );
            return response.json();
        }).then ( (json) => {
            console.log( json) ;
            return json;
        });
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" placeholder="id or empty" value={id} onChange={ ( {target} ) => setId( target.value ) } />
            <button>Enviar</button>
        </form>
    )
}

export default PhotoGet;
