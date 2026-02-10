import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../api";
import Error from "../Helpers/Error";
import Head from "../Helpers/Head";

const LoginPasswordLost = () => {
  const login = useForm(false);
  const { data, loading, error, request } = useFetch<string>();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("lost", "reset"),
      });
      await request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Lost Password" description="" />
      <h1 className="title">Are you lost the password?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            label="Email or Username"
            type="text"
            name="login"
            {...login}
          />
          {loading ? (
            <Button disabled>Sending...</Button>
          ) : (
            <Button>Send Email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
