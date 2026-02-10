import React from "react";
import { UserContext } from "../../UserContext";
import ImageCommentsForm from "./ImageCommentsForm";
import styles from "./ImageComments.module.css";
import ImageCommentDelete from "./ImageCommentDelete";
import { Comment } from "../../api";

interface ImageCommentsProps {
  id: number;
  comments: Comment[];
  single?: boolean;
  caption?: string;
}

const ImageComments = (props: ImageCommentsProps) => {
  const [comments, setComments] = React.useState<Comment[]>(() => props.comments);
  const commentsSection = React.useRef<HTMLUListElement>(null);
  const { login, data } = React.useContext(UserContext);

  React.useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.single ? styles.single : ""}`}
      >
        {comments.map((comment) => (
          <li key={comment.id}>
            <b>{comment.author}: </b>
            <span> {comment.comment} </span>
            {data && data.username === comment.author ? (
              <ImageCommentDelete id={comment.id} />
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
      {login && (
        <ImageCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default ImageComments;
