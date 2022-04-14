import React from "react";
import styles from "./FeedImagesItem.module.css";
import Image from "../Helpers/Image";

const FeedImagesItem = ({ image, setModalImage }) => {
    function handleClick() {
        setModalImage(image);
    }
    return (
        <li className={styles.image} onClick={handleClick}>
            <Image src={image.src} alt={image.title} />
            <span className={styles.views}>{image.views}</span>
        </li>
    );
};

export default FeedImagesItem;
