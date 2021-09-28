import React, { useEffect } from "react";
import { memo } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Title } from "../atoms/Title";
import { MainTemplate } from "../template/MainTemplate";
import { useDispatch, useSelector } from "react-redux";
import { validateEmail } from "../helper/ForLogin";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import { getResetPasswordSelector } from "../../core/selectors/resetPasswordSelectors";
import { setEmailResetPasswordAction } from "../../core/actions/resetPasswordActions"


export const ResetPassword = memo(() => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { email_reset_password } = useSelector(getResetPasswordSelector);
    const isValidEmailResetPassword = validateEmail(email_reset_password);
    const resetPassword = () => {
        if (isValidEmailResetPassword) {
            history.push("/reset-password-confirm");
        }
    }

    useEffect(() => {
        return () => {
            dispatch(setEmailResetPasswordAction(""));
        };
    }, [dispatch]);

    return (
        <MainTemplate
            titleBlock={<Title title={"Reset password"} isActive={true} />}
            mainBlock={
                <div className="input-center">
                    <div className="confirmation-wrapper">
                        <p>Please enter the email </p>
                        <p>for your account</p>
                    </div>
                    <div className="input-center">
                        <Input value={email_reset_password} text={"Email"} type={"email"} isValid={isValidEmailResetPassword} onChangeHandler={(text: string) => dispatch(setEmailResetPasswordAction(text.trim()))} />
                        <Button text={"Reset"} isValid={isValidEmailResetPassword}
                            onClick={resetPassword} />
                        <p className="login-text">Return to{" "}
                            <Link className="for-link" to={"/login"}>
                                login
                            </Link>
                        </p>
                    </div>
                    <p className="login-text"></p>
                    <p className="login-text"></p>
                </div>
            }
        />
    )
});