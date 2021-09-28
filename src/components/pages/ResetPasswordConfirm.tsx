
import React from "react";
import { memo } from "react";
import { useSelector } from "react-redux";
import { getResetPasswordSelector } from "../../core/selectors/resetPasswordSelectors";
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


export const ResetPasswordConfirm = memo(() => {
    const { email_reset_password } = useSelector(getResetPasswordSelector)
    const history = useHistory();
    const resetPasswordConfirm = () => {
        history.push("/");
    }
    return (
        <MainTemplate
            titleBlock={<Title title={"Reset password"} isActive={true} />}
            mainBlock={
                <div className="input-center">
                    <div className="confirmation-wrapper">
                        <p>You will receive an email <a href={'mailto:${email}'}>{email_reset_password}</a></p>
                        <p>with a link to reset your password</p>
                    </div>
                    <Button text={"Home"}
                        isValid={true}
                        onClick={resetPasswordConfirm} />
                    <p className="login-text"></p>
                    <p className="login-text"></p>
                </div>
            }
        />
    )
});