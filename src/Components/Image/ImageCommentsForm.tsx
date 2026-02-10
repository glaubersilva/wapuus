import React from "react";
import { COMMENT_POST, Comment } from "../../api";
import Send from "../../Assets/send.svg?react";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helpers/Error";
import styles from "./ImageCommentsForm.module.css";

interface ImageCommentsFormProps {
  id: number;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
  single?: boolean;
}

const ImageCommentsForm = ({
  id,
  setComments,
  single,
}: ImageCommentsFormProps) => {
  const [comment, setComment] = React.useState("");
  const { request, error, loading } = useFetch<Comment>();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response && response.ok && json) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ""}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comment..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={loading ? styles.buttonDisabled : styles.button} disabled={loading}>
        <Send />
      </button>
      <Error error={error} />
    </form>
  );
};

export default ImageCommentsForm;
