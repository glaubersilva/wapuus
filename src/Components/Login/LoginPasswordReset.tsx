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
  const password = useForm(false);
  const { loading, error, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keyParam = params.get("key");
    const loginParam = params.get("login");
    if (keyParam) setkey(keyParam);
    if (loginParam) setLogin(loginParam);
  }, []);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response && response.ok) navigate("/login");
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
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordReset;
