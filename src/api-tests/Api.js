import React from "react";
import ImageGet from "./endpoints/ImageGet";
import ImagePost from "./endpoints/ImagePost";
import TokenPost from "./endpoints/TokenPost";
import UserPost from "./endpoints/UserPost";

function Api() {
    return (
        <div>
            <h2>USER POST</h2>
            <UserPost />
            <h2>TOKEN POST</h2>
            <TokenPost />
            <h2>IMAGE POST</h2>
            <ImagePost />
            <h2>IMAGE GET</h2>
            <ImageGet />
        </div>
    );
}

export default Api;
