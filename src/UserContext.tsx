import React from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET, User } from "./api";
import { useNavigate } from "react-router-dom";

interface UserContextData {
  userLogin: (username: string, password: string) => Promise<void>;
  userLogout: () => Promise<void>;
  data: User | null;
  error: string | null;
  loading: boolean;
  login: boolean | null;
}

export const UserContext = React.createContext<UserContextData>(
  {} as UserContextData
);

interface UserStorageProps {
  children: React.ReactNode;
}

export const UserStorage = ({ children }: UserStorageProps) => {
  const [data, setData] = React.useState<User | null>(null);
  const [login, setLogin] = React.useState<boolean | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem("token");
      navigate("/login");
    },
    [navigate]
  );

  async function getUser(token: string) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json: User = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username: string, password: string) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error ${response.statusText}`);
      }

      const json = await response.json();
      window.localStorage.setItem("token", json.token);
      await getUser(json.token);

      navigate("/account");
    } catch (exception: any) {
      setError(exception.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");

      if (token) {
        try {
          setError(null);
          setLoading(true);

          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);

          if (!response.ok) {
            throw new Error("Invalid Token");
          }

          await getUser(token);
        } catch (exception) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }

    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
