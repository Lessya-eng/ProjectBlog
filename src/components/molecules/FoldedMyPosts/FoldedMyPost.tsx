import { memo } from "react";
import "./index.css";
import { FoldedPostImg } from "../../atoms/FoldedPostImg";
import { FoldedPostTitle } from "../../atoms/FoldedPostTitle";
import { FoldedPostDescription } from "../../atoms/FoldedPostDescription";
import { FoldedPostDate } from "../../atoms/FoldedPostDate";
import { IPost } from "../../../types/posts";

interface IFoldedMyPost {
    myPosts?: boolean;

}

export const FoldedMyPost = memo((post: IPost, { myPosts }: IFoldedMyPost) => {
    return (
        <div className="folded-post-wrapper">
            <FoldedPostImg img={post.image} />
            <FoldedPostTitle title={post.title} />
            <FoldedPostDescription text={post.text} />
            <FoldedPostDate date={post.date} />
        </div>
    )
})