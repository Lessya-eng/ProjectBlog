import React from "react";
import { memo } from "react";
import "./index.css";


interface IFoldedPostAuthor {
    author: string | null;

}

export const FoldedPostAuthor = memo(({ author }: IFoldedPostAuthor) => {

    return (
        <div className="folded-post-author" >{author}</div>
    )
});

