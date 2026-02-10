import React from "react";
import styles from "./FeedModal.module.css";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import { IMAGE_GET, Image as ImageType, ImageResponse } from "../../api";
import ImageContent from "../Image/ImageContent";

interface FeedModalProps {
  image: ImageType;
  setModalImage: (image: ImageType | null) => void;
}

const FeedModal = ({ image, setModalImage }: FeedModalProps) => {
  const { data, error, loading, request } = useFetch<ImageResponse>();

  React.useEffect(() => {
    const { url, options } = IMAGE_GET(image.id);
    request(url, options);
    document.querySelector("body")!.style.overflow = "hidden"; // Disable scroll
  }, [image, request]);

  function handleOutsideClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      document.querySelector("body")!.style.overflow = "auto"; // Enable scroll
      setModalImage(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <ImageContent data={data} />}
    </div>
  );
};

export default FeedModal;
