import React from "react";
import { UserContext } from "../../UserContext";
import ImageCommentsForm from "./ImageCommentsForm";
import styles from "./ImageComments.module.css";
import ImageCommentDelete from "./ImageCommentDelete";

const ImageComments = (props) => {
    const [comments, setComments] = React.useState(() => props.comments);
    const commentsSection = React.useRef(null);
    const { login } = React.useContext(UserContext);
    const user = React.useContext(UserContext);

    React.useEffect(() => {
        commentsSection.current.scrollTop =
            commentsSection.current.scrollHeight;
    }, [comments]);

    return (
        <>
            <ul
                ref={commentsSection}
                className={`${styles.comments} ${
                    props.single ? styles.single : ""
                }`}
            >
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <b>{comment.author}: </b>
                        <span> {comment.comment} </span>
                        {user.data && user.data.username === comment.author ? (
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
