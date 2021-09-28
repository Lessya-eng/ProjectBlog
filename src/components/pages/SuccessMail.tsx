import React from "react";
import { memo } from "react";
import { Button } from "../atoms/Button";
import { Title } from "../atoms/Title";
import { MainTemplate } from "../template/MainTemplate";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect, useHistory
} from "react-router-dom";


export const SuccessMail = memo(() => {
    const history = useHistory();
    const saccessMail = () => {
        history.push("/login");
    }
    return (
        <MainTemplate
            titleBlock={<Title title={"Success"} isActive={true} />}
            mainBlock={
                <div className="input-center">
                    <div className="confirmation-wrapper">
                        <p>Email confirmed.</p>
                        <p>Your registration is now completed</p>
                    </div>
                    <Button text={"Login"}
                        isValid={true}
                        onClick={saccessMail} />
                    <p className="login-text"></p>
                    <p className="login-text"></p>
                </div>
            }
        />
    )
});