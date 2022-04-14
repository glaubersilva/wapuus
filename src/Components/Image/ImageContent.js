import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import ImageComments from "./ImageComments";
import styles from "./ImageContent.module.css";
import ImageDelete from "./ImageDelete";
import Image from "../Helpers/Image";

const ImageContent = ({ data, single }) => {
    const user = React.useContext(UserContext);
    console.log("data", data);
    const { image, comments } = data;

    single
        ? (document.querySelector("body").style.overflow = "auto") // Enable scroll
        : (document.querySelector("body").style.overflow = "hidden"); // Disable scroll

    return (
        <div className={`${styles.image} ${single ? styles.single : ""}`}>
            <div className={styles.img}>
                <Image src={image.src} alt={image.title} />
            </div>
            <div className={styles.details}>
                <div>
                    <p className={styles.author}>
                        {user.data && user.data.username === image.author ? (
                            <ImageDelete id={image.id} />
                        ) : (
                            <Link to={`/profile/${image.author}`}>
                                @{image.author}
                            </Link>
                        )}
                        <span className={styles.views}>{image.views}</span>
                    </p>
                    <h1 className="title">
                        <Link to={`/image/${image.id}`}>{image.title}</Link>
                    </h1>
                    <ul className={styles.attributes}>
                        <li>
                            From:{" "}
                            <a
                                className="link"
                                target="_blank"
                                rel="noreferrer"
                                href={image.from_url}
                            >
                                {image.from}
                            </a>
                        </li>
                    </ul>
                    <div className={styles.caption}>
                        <p>{image.caption}</p>
                    </div>
                </div>
            </div>
            <ImageComments
                single={single}
                id={image.id}
                comments={comments}
                caption={image.caption}
            />
        </div>
    );
};

export default ImageContent;
