import React from "react";
import styles from "./FeedModal.module.css";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helpers/Error";
import Loading from "../Helpers/Loading";
import { PHOTO_GET } from "../../api";
import PhotoContent from "../Photo/PhotoContent";

const FeedModal = ({ photo, setModalPhoto }) => {
    const { data, error, loading, request } = useFetch();

    React.useEffect(() => {
        const { url, options } = PHOTO_GET(photo.id);
        request(url, options);
        document.querySelector("body").style.overflow = "hidden"; // Disable scroll
    }, [photo, request]);

    function handleOutsideClick(event) {
        if (event.target === event.currentTarget) {
            document.querySelector("body").style.overflow = "auto"; // Enable scroll
            setModalPhoto(null);
        }
    }

    return (
        <div className={styles.modal} onClick={handleOutsideClick}>
            {error && <Error error={error} />}
            {loading && <Loading />}
            {data && <PhotoContent data={data} />}
        </div>
    );
};

export default FeedModal;
