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


export const SuccessPassword = memo(() => {
    const history = useHistory();
    const saccessPassword = () => {
        history.push("/login");
    }
    return (
        <MainTemplate
            titleBlock={<Title title={"Success"} isActive={true} />}
            mainBlock={
                <div className="input-center">
                    <div className="confirmation-wrapper">
                        <p>Your password has been changed</p>
                    </div>
                    <Button text={"Login"}
                        isValid={true}
                        onClick={saccessPassword} />
                    <p className="login-text"></p>
                    <p className="login-text"></p>
                </div>
            }
        />
    )
});