import React, { useEffect, useState } from "react";
import { memo } from "react";
import { Button } from "../atoms/Button";
import { Title } from "../atoms/Title";
import { MainTemplate } from "../template/MainTemplate";
import { useDispatch, useSelector } from "react-redux";
import { getRegistrationSelector } from "../../core/selectors/registrationSelector";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useParams } from "react-router-dom";
import {
    setEmailAction,
    setUserNameAction,
    setPasswordAction,
    setConfirmPasswordAction,
    sendRegistrationConfirmationAction
} from "../../core";

export const Confirmation = memo(() => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { email } = useSelector(getRegistrationSelector);
    const confirmation = () => {
        history.push("/");
    }

    useEffect(() => {
        return () => {
            dispatch(setEmailAction(""));
            dispatch(setUserNameAction(""));
            dispatch(setPasswordAction(""));
            dispatch(setConfirmPasswordAction(""));
        };
    }, [dispatch]);

    const params = useParams() as any;
    console.log({ params });

    useEffect(() => {
        if (params?.uid && params?.token) {
            dispatch(sendRegistrationConfirmationAction(params));
        }
    }, [dispatch, params, params?.token, params?.uid]);
    return (
        <MainTemplate
            titleBlock={<Title title={"Registartion Confirmation"} isActive={true} />}
            mainBlock={
                <div className="input-center">
                    <div className="confirmation-wrapper">
                        <p>Please activate your account with</p>
                        <p>the activation link in the email <a href={'mailto:${email}'}>{email}</a></p>
                        <p>Please, check your email</p>
                    </div>
                    <Button text={"Home"}
                        isValid={true}
                        onClick={confirmation} />
                    <p className="login-text"></p>
                    <p className="login-text"></p>
                </div>
            }
        />
    )
});