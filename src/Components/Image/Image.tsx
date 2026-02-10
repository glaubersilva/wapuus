import React from "react";
import { useParams } from "react-router-dom";
import { IMAGE_GET, ImageResponse } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import ImageContent from "./ImageContent";
import Head from "../Helpers/Head";

const Image = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error, request } = useFetch<ImageResponse>();

  React.useEffect(() => {
    if (id) {
      const { url, options } = IMAGE_GET(id);
      request(url, options);
    }
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.image.title} description="" />
        <ImageContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Image;
