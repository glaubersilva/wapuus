import React from 'react';
import { Link } from 'react-router-dom';
import { TOKEN_POST, USER_GET } from '../../api';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginForm = () => {

    //const [username, setUsername] = React.useState('');
    //const [password, setPassword] = React.useState('');

    const username = useForm();
    const password = useForm();
    //console.log('Username: ', username.value);
    //console.log('Password: ', password.value);

    React.useEffect( () => {

        const token = window.localStorage.getItem('token');
        if ( token ) {
            getUser( token );
        }

    }, []);

    async function getUser( token ) {

        const { url, options } = USER_GET(token);
        const response = await fetch( url, options );
        const json = await response.json();
        console.log(json);
    }

    async function handleSubmit( event ) {
        event.preventDefault();


        if ( username.validate() && password.validate() ){

            const { url, options } = TOKEN_POST( {
                username: username.value, 
                password: password.value
            } );

            const response = await fetch( url , options );
            const json = await response.json();   

            window.localStorage.setItem( 'token', json.token );
            //console.log(json);

            getUser( json.token );
        }
    }

    /*
        <input type="text" value={ username } onChange={ ( { target }) => setUsername( target.value ) } />
        <input type="text" value={ password } onChange={ ( { target }) => setPassword( target.value ) } />
     */
    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={ handleSubmit } >
                <Input label="User" type="text" name="username" {...username} />
                <Input label="Password" type="password" name="password" {...password} />
                <Button>Enter</Button>
            </form>
            <Link to="/login/create">New User</Link>
        </section>
    )
}

export default LoginForm;
