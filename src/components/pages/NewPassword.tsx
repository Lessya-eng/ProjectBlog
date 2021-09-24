import React from "react";
import { memo } from "react";
import { useEffect, useState } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Title } from "../atoms/Title";
import { MainTemplate } from "../template/MainTemplate";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import { getNewPasswordSelector } from "../../core/selectors/newPasswordSelector";
import { useDispatch, useSelector } from "react-redux";
import { validatePassword, validateConfirmPassword } from "../helper/ForLogin";
import { setNewPasswordAction, setNewPasswordConfirmAction } from "../../core/actions/newPasswordActions"



export const NewPassword = memo(() => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { new_password, new_password_confirm } = useSelector(getNewPasswordSelector);
    const isValidNewPassword = validatePassword(new_password);
    const isValidNewPasswordConfirm = validateConfirmPassword(new_password, new_password_confirm);
    const newPassword = () => {
        if (isValidNewPassword && isValidNewPasswordConfirm) {
            history.push("/success-password");
        }
    }

    useEffect(() => {
        return () => {
            dispatch(setNewPasswordAction(""));
            dispatch(setNewPasswordConfirmAction(""));
        };
    }, [dispatch]);

    return (
        <MainTemplate
            titleBlock={<Title title={"New password"} isActive={true} />}
            mainBlock={
                <div className="input-center">
                    <div className="confirmation-wrapper">
                        <p>Please enter new password</p>
                    </div>
                    <div className="input-center">
                        <Input value={new_password} text={"Confirm Password"}
                            type={"password"}
                            isValid={isValidNewPassword}
                            onChangeHandler={(text: string) => dispatch(setNewPasswordAction(text.trim()))} />
                        <Input value={new_password_confirm} text={"Confirm Password"}
                            type={"password"}
                            isValid={isValidNewPasswordConfirm}
                            onChangeHandler={(text: string) => dispatch(setNewPasswordConfirmAction(text.trim()))} />
                    </div>
                    <Button text={"Set password"}
                        isValid={
                            isValidNewPasswordConfirm && isValidNewPassword
                        }
                        onClick={newPassword} />
                    <p className="login-text"></p>
                    <p className="login-text"></p>
                </div>

            }
        />
    )
});