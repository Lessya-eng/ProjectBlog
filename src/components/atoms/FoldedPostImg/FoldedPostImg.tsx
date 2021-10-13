import React from "react";
import { memo } from "react";
import "./index.css";

interface IFoldedPostImg {
    img: string;

}

export const FoldedPostImg = memo(({ img }: IFoldedPostImg) => {
    return (
        <img className="folded-post-img" src={img} alt="postImg" width={100} height={100} />
    )
});

