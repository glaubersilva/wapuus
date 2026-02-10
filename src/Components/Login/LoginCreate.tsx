import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Helpers/Error";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Head from "../Helpers/Head";

const LoginCreate = () => {
  const username = useForm(false);
  const email = useForm("email");

  const { loading, error, request } = useFetch();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      url: window.location.href.replace("create", "reset"),
    });
    const { response } = await request(url, options);
    if (response && response.ok) {
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
        {loading ? (
          <Button disabled>Registering...</Button>
        ) : (
          <Button>Register</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
