import React from "react";
import { memo } from "react";
import "./index.css";

interface IInput {
    searchValue: string;
    text: string;
    type: string;
}

export const Input = memo(({ searchValue, text, type }: IInput) => {
    return (
        <form className="input-wrapper">
            <h4>{text}</h4>
            <input type={type} required />
        </form>
    )
});
