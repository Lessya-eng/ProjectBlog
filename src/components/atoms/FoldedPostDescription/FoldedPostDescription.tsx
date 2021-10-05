import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IFoldedPostDescription {
    description: string;
}

export const FoldedPostDescription = memo(({ description }: IFoldedPostDescription) => (
    <p className="folded-post-description">{description}</p>
));

