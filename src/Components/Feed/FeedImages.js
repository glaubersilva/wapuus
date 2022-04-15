import React from "react";
import FeedImagesItem from "./FeedImagesItem";
import useFetch from "../../Hooks/useFetch";
import { IMAGES_GET } from "../../api";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import styles from "./FeedImages.module.css";

const FeedImages = ({ page, user, setModalImage, setInfinite }) => {
    const { data, loading, error, request } = useFetch();
    const [scrollToTop, setscrollToTop] = React.useState(true);

    /*window.onbeforeunload = function () {
        window.scrollTo(0, 0);
        console.log("onbeforeunload");
    };*/

    React.useEffect(() => {
        async function fetchImages() {
            const total = 8;
            const { url, options } = IMAGES_GET({ page, total, user });
            const { response, json } = await request(url, options);
            if (response && response.ok && json.length < total)
                setInfinite(false);
            //console.log(json);
            if (page === 1 && scrollToTop) {
                //console.log("page: ", page);
                window.scrollTo(0, 0);
                setscrollToTop(false);
            }
        }

        fetchImages();
    }, [request, user, page, setInfinite, scrollToTop]);

    //return <Loading />;
    if (error) return <Error message={error} />;
    page === 1 && scrollToTop && window.scrollTo(0, 0);
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
