import React from "react";
import { COMMENT_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";
import styles from "./PhotoCommentDelete.module.css";

const PhotoCommentDelete = ({ id }) => {
    const { loading, request } = useFetch();

    async function handleClick(event) {
        const confirm = window.confirm("Are your sure you want delete this?");

        if (confirm) {
            event.preventDefault();
            const { url, options } = COMMENT_DELETE(id);
            const { response } = await request(url, options);
            if (response.ok) window.location.reload();
        }
    }

    return (
        <>
            {loading ? (
                <button className={styles.delete} disabled>
                    Deleting...
                </button>
            ) : (
                <button onClick={handleClick} className={styles.delete}>
                    Delete
                </button>
            )}
        </>
    );
};

export default PhotoCommentDelete;
