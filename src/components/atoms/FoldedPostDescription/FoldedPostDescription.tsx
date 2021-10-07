import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IFoldedPostDescription {
    text: string;
}

export const FoldedPostDescription = memo(({ text }: IFoldedPostDescription) => (
    <p className="folded-post-description">{text}</p>
));

