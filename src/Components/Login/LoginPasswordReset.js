import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_RESET } from "../../api";
import Error from "../Helpers/Error";
import { useNavigate } from "react-router-dom";
import Head from "../Helpers/Head";

const LoginPasswordReset = () => {
    const [login, setLogin] = React.useState("");
    const [key, setkey] = React.useState("");
    const password = useForm();
    const { loading, error, request } = useFetch();
    const navigate = useNavigate();

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const key = params.get("key");
        const login = params.get("login");
        if (key) setkey(key);
        if (login) setLogin(login, true);
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        if (password.validate()) {
            const { url, options } = PASSWORD_RESET({
                login,
                key,
                password: password.value,
            });
            const { response } = await request(url, options);
            if (response.ok) navigate("/login");
        }
    }

    return (
        <section className="animeLeft">
            <Head title="Reset Password" description="" />
            <h1 className="title">Reset Password</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="New Password"
                    type="password"
                    name="password"
                    {...password}
                />
                {loading ? (
                    <Button disabled>Reseting...</Button>
                ) : (
                    <Button>Reset Password</Button>
                )}
            </form>
            <Error message={error} />
        </section>
    );
};

export default LoginPasswordReset;
