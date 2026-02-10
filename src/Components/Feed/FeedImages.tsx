import React from "react";
import FeedImagesItem from "./FeedImagesItem";
import useFetch from "../../Hooks/useFetch";
import { IMAGES_GET, Image as ImageType } from "../../api";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import styles from "./FeedImages.module.css";

interface FeedImagesProps {
  page: number;
  user: string | number;
  setModalImage: (image: ImageType | null) => void;
  setInfinite: (infinite: boolean) => void;
}

const FeedImages = ({
  page,
  user,
  setModalImage,
  setInfinite,
}: FeedImagesProps) => {
  const { data, loading, error, request } = useFetch<ImageType[]>();
  const [scrollToTop, setscrollToTop] = React.useState(true);

  React.useEffect(() => {
    async function fetchImages() {
      const total = 6;
      const { url, options } = IMAGES_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json && json.length < total)
        setInfinite(false);
      if (page === 1 && scrollToTop) {
        window.scrollTo(0, 0);
        setscrollToTop(false);
      }
    }

    fetchImages();
  }, [request, user, page, setInfinite, scrollToTop]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((image) => (
          <FeedImagesItem
            key={image.id}
            image={image}
            setModalImage={setModalImage}
          />
        ))}
      </ul>
    );
  } else {
    return null;
  }
};

export default FeedImages;
