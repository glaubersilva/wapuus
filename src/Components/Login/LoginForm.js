import React from 'react';
import { Link } from 'react-router-dom';
//import { TOKEN_POST, USER_GET } from '../../api';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import { UserContext } from '../../UserContext';
import Error from '../Helpers/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';
import Head from '../Helpers/Head';

const LoginForm = () => {

    //const [username, setUsername] = React.useState('');
    //const [password, setPassword] = React.useState('');

    const username = useForm();
    const password = useForm();
    //console.log('Username: ', username.value);
    //console.log('Password: ', password.value);

    const { userLogin, error, loading } = React.useContext( UserContext );    

    /*React.useEffect( () => {

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
    }*/

    async function handleSubmit( event ) {
        event.preventDefault();


        if ( username.validate() && password.validate() ){

            userLogin( username.value, password.value );

           /* const { url, options } = TOKEN_POST( {
                username: username.value, 
                password: password.value
            } );

            const response = await fetch( url , options );
            const json = await response.json();   

            window.localStorage.setItem( 'token', json.token );
            //console.log(json);

            getUser( json.token );*/
        }
    }

    /*
        <input type="text" value={ username } onChange={ ( { target }) => setUsername( target.value ) } />
        <input type="text" value={ password } onChange={ ( { target }) => setPassword( target.value ) } />
     */
    return (
        <section className="animeLeft">
            <Head title="Login" description=""/>
            <h1 className="title">Login</h1>
            <form className={styles.form} onSubmit={ handleSubmit } >
                <Input label="User" type="text" name="username" {...username} />
                <Input label="Password" type="password" name="password" {...password} />
                { loading ? <Button disabled>Loading...</Button> : <Button>Enter</Button> }                
                <Error message={error} />                
            </form>            
            <Link className={styles.lost} to="/login/lost">Lost the Password?</Link>
            <div className={styles.create}>
                <h2 className={styles.subtitle} >Register</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link className={stylesBtn.button} to="/login/create">New User</Link>
            </div>            
        </section>
    )
}

export default LoginForm;
