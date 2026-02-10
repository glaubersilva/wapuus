import React from "react";

interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  request: (
    url: string,
    options: RequestInit
  ) => Promise<{ response: Response | undefined; json: T | null }>;
}

const useFetch = <T>(): FetchResult<T> => {
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(
    async (url: string, options: RequestInit) => {
      let response: Response | undefined;
      let json: T | null = null;

      try {
        setError(null);
        setLoading(true);
        response = await fetch(url, options);
        json = (await response.json()) as T;
        if (response.ok === false) {
          throw new Error((json as any).message);
        }
      } catch (exception: any) {
        json = null;
        setError(exception.message);
      } finally {
        setData(json);
        setLoading(false);
        return { response, json };
      }
    },
    []
  );

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useFetch;
