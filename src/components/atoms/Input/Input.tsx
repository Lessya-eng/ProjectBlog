import React from "react";
import { memo } from "react";
import "./index.css";

interface IInput {
    value: string;
    text: string;
    type: string;
    isValid: boolean;
    onChangeHandler: (text: string) => void;
}

export const Input = memo(({ value, text, type, isValid, onChangeHandler }: IInput) => {
    return (
        <form className="input-wrapper">
            <h4>{text}</h4>
            <input type={type} required
                value={value}
                onChange={(e) => onChangeHandler(e.target.value)}
                className={isValid ? "input active" : "input"} />
        </form>
    )
});
