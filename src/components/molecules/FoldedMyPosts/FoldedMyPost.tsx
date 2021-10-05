import { memo } from "react";
import "./index.css";
import { FoldedPostImg } from "../../atoms/FoldedPostImg";
import { FoldedPostTitle } from "../../atoms/FoldedPostTitle";
import { FoldedPostDescription } from "../../atoms/FoldedPostDescription";
import { FoldedPostDate } from "../../atoms/FoldedPostDate";
import { FoldedPostAuthor } from "../../atoms/FoldedPostAuthor";
import { IPost } from "../../../types/post";

export const FoldedMyPost = memo(({ image, title, description, date }: IPost) => {
    return (
        <div className="folded-post-wrapper">
            <FoldedPostImg img={image} />
            <FoldedPostTitle title={title} />
            <FoldedPostDescription description={description} />
            <FoldedPostDate date={date} />

        </div>
    )
})