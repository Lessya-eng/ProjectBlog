import React, { useEffect } from "react";
import { memo } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Title } from "../atoms/Title";
import { MainTemplate } from "../template/MainTemplate";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import { getLoginSelector } from "../../core/selectors/loginSelector";
import { useDispatch, useSelector } from "react-redux";
import { validateEmail, validatePassword } from "../helper/ForLogin";
import { sendLoginDataAction, setEmailLoginAction, setPasswordLoginAction } from "../../core/actions/loginAction"




export const Login = memo(() => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { email_login, password_login, error, isSuccess } = useSelector(getLoginSelector);
    const isValidEmailLogin = validateEmail(email_login);
    const isValidPasswordLogin = validatePassword(password_login);

    useEffect(() => {
        return () => {
            dispatch(setEmailLoginAction(""));
            dispatch(setPasswordLoginAction(""));
        };
    }, [dispatch]);

    const loginUser = () => {
        if (isValidEmailLogin && isValidPasswordLogin) {
            dispatch(
                sendLoginDataAction({
                    password_login,
                    email_login,
                })
            );
            /* history.push("/"); */
        }
    }

    useEffect(() => {
        if (isSuccess) {
            history.push("/all-posts");
        }
    }, [isSuccess, history])
    return (
        <MainTemplate
            titleBlock={
                <div className="login-title">
                    <Link className="for-link" to={"/login"}><Title title={"Login "} isActive={true} /></Link>
                    <Title title={" | "} isActive={true} />
                    <Link className="for-link" to={"/registration"}><Title title={" Registration"} isActive={false} /></Link>
                </div >
            }
            mainBlock={
                <div className="input-center" >
                    <Input value={email_login} text={"Email"} type={"email"} isValid={isValidEmailLogin} onChangeHandler={(text: string) => dispatch(setEmailLoginAction(text.trim()))} />
                    <Input value={password_login} text={"Password"} type={"password"} isValid={isValidPasswordLogin} onChangeHandler={(text: string) => dispatch(setPasswordLoginAction(text.trim()))} />
                    <p className="login-text">{error}</p>
                    <Button text={"Login"}
                        isValid={
                            isValidEmailLogin &&
                            isValidPasswordLogin
                        }
                        onClick={loginUser} />
                    <p className="login-text">Forgot your password?{" "}
                        <Link className="for-link" to={"/reset-password"}>
                            Reset password{" "}
                        </Link>
                    </p>
                    <p className="login-text"></p>
                    <p className="login-text"></p>
                </div>
            }
        />
    )
});