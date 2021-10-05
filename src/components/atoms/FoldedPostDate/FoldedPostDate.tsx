import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IFoldedPostDate {
    date: string;
}

export const FoldedPostDate = memo(({ date }: IFoldedPostDate) => (
    <div className="folded-post-date">{date}</div>
));

