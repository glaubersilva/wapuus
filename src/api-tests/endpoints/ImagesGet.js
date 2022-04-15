import React from "react";

const ImageGet = () => {
    const [id, setId] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault();

        fetch(`https://wapuus-api.local/json/wapuus-api/v1/images/${id}`)
            .then((response) => {
                //console.log(response);
                return response.json();
            })
            .then((json) => {
                //console.log(json);
                return json;
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="id or empty"
                value={id}
                onChange={({ target }) => setId(target.value)}
            />
            <button>Enviar</button>
        </form>
    );
};

export default ImageGet;
