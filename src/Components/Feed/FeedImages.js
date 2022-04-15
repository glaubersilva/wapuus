import React from "react";
import FeedImagesItem from "./FeedImagesItem";
import useFetch from "../../Hooks/useFetch";
import { IMAGES_GET } from "../../api";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import styles from "./FeedImages.module.css";

const FeedImages = ({ page, user, setModalImage, setInfinite }) => {
    const { data, loading, error, request } = useFetch();

    React.useEffect(() => {
        async function fetchImages() {
            const total = 6;
            const { url, options } = IMAGES_GET({ page, total, user });
            const { response, json } = await request(url, options);
            if (response && response.ok && json.length < total)
                setInfinite(false);
            console.log(json);
        }

        fetchImages();
    }, [request, user, page, setInfinite]);

    if (error) return <Error message={error} />;
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
