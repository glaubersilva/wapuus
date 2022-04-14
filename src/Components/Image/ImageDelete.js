import React from "react";
import { IMAGE_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";
import styles from "./ImageDelete.module.css";

const ImageDelete = ({ id }) => {
    const { loading, request } = useFetch();

    async function handleClick(event) {
        const confirm = window.confirm("Are your sure you want delete this?");

        if (confirm) {
            event.preventDefault();
            const { url, options } = IMAGE_DELETE(id);
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

export default ImageDelete;
