import React from "react";
import FeedModal from "./FeedModal";
import FeedImages from "./FeedImages";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Feed = ({ user }) => {
    const [modalImage, setModalImage] = React.useState(null);
    const [pages, setPages] = React.useState([1]);
    const [infinite, setInfinite] = React.useState(true);

    React.useEffect(() => {
        let wait = false;
        function infiniteScroll() {
            if (infinite) {
                const scroll = window.scrollY;
                const height = document.body.offsetHeight - window.innerHeight;
                //console.log("scroll: ", scroll);
                //console.log("height: ", height);
                //console.log("wait: ", wait);
                if (scroll > height * 0.75 && !wait) {
                    setPages((pages) => [...pages, pages.length + 1]);
                    wait = true;

                    setTimeout(() => {
                        wait = false;
                    }, 500);
                }
            } /*else {
                if (pages.length === 1) window.scrollTo(0, 0);
                console.log("page: ", pages.length);
            }*/
        }

        window.addEventListener("wheel", infiniteScroll);
        window.addEventListener("scroll", infiniteScroll);
        return () => {
            window.removeEventListener("wheel", infiniteScroll);
            window.removeEventListener("scroll", infiniteScroll);
        };
    }, [infinite]);

    return (
        <div>
            {modalImage && (
                <FeedModal image={modalImage} setModalImage={setModalImage} />
            )}
            {pages.map((page) => (
                <FeedImages
                    key={page}
                    user={user}
                    page={page}
                    setModalImage={setModalImage}
                    setInfinite={setInfinite}
                />
            ))}
            {/*console.log("user: ", user)*/}
            {!infinite &&
                user > 0 &&
                document.querySelectorAll("#root img").length === 0 && (
                    <div
                        style={{
                            textAlign: "center",
                            padding: "2rem 0 4rem 0",
                            color: "#888",
                        }}
                    >
                        <p>You have not added any Wappu yet...</p>
                        <p>
                            <Link className="link" to="/account/post">
                                Post your first Wapuu
                            </Link>
                        </p>
                    </div>
                )}
            {!infinite &&
                isNaN(user) &&
                document.querySelectorAll("#root img").length === 0 && (
                    <p
                        style={{
                            textAlign: "center",
                            padding: "2rem 0 4rem 0",
                            color: "#888",
                        }}
                    >
                        This user does have not added any Wappu yet.
                    </p>
                )}
            {!infinite && document.querySelectorAll("#root img").length > 0 && (
                <p
                    style={{
                        textAlign: "center",
                        padding: "2rem 0 4rem 0",
                        color: "#888",
                    }}
                >
                    There are no more posts.
                </p>
            )}
        </div>
    );
};

Feed.defaultProps = {
    user: 0,
};

Feed.propTypes = {
    user: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
    ]),
};

export default Feed;
