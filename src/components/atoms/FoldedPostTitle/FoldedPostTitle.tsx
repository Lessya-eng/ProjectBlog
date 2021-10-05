import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IFoldedPostTitle {
    title: string;
}

export const FoldedPostTitle = memo(({ title }: IFoldedPostTitle) => (
    <h4 className="folded-post-title">{title}</h4>
));

