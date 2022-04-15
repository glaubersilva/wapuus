import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Helpers/Error";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import { UserContext } from "../../UserContext";
import useFetch from "../../Hooks/useFetch";
import Head from "../Helpers/Head";

const LoginCreate = () => {
    const username = useForm();
    const email = useForm("email");
    const password = useForm("password");

    const { userLogin } = React.useContext(UserContext);
    const { loading, error, request } = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();
        const { url, options } = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value,
            url: window.location.href.replace("create", "reset"),
        });
        const { response } = await request(url, options);
        //console.log("response: ", response);
        if (response.ok) {
            //userLogin( username.value, password.value );
            alert("We just sent you an e-mail with a password creation link.");
        }
    }

    return (
        <section className="animeLeft">
            <Head title="Register" description="" />
            <h1 className="title">Register</h1>
            <form onSubmit={handleSubmit}>
                <Input label="User" type="text" name="username" {...username} />
                <Input label="Email" type="email" name="email" {...email} />
                {/*<Input label="Password" type="password" name="password" {...password} />*/}
                {loading ? (
                    <Button disabled>Registering...</Button>
                ) : (
                    <Button>Register</Button>
                )}
                <Error message={error} />
            </form>
        </section>
    );
};

export default LoginCreate;
