import React from "react";
import { memo } from "react";
import "./index.css";

interface ITitle {
    title: string;
    isActive: boolean;

}

export const Title = memo(({ title, isActive }: ITitle) => {
    return (
        <h2 className={isActive ? "title-wrapper" : "title-not-active"} >{title}</h2>
    )
});

