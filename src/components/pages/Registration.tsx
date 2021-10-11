import React from "react";
import { memo } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Title } from "../atoms/Title";
import { MainTemplate } from "../template/MainTemplate";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import { getRegistrationSelector } from "../../core/selectors/registrationSelector";
import { useDispatch, useSelector } from "react-redux";
import { validateName, validateEmail, validatePassword, validateConfirmPassword } from "../helper/ForLogin";
import { setEmailAction, setUserNameAction, setPasswordAction, setConfirmPasswordAction } from "../../core/actions/registrationAction"
import { sendRegistrationDataAction } from "../../core";

export const Registration = memo(() => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { password, confirmPassword, email, userName, error } = useSelector(getRegistrationSelector);


    const isValidUserName = validateName(userName);
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);
    const isValidConfirmPassword = validateConfirmPassword(
        password,
        confirmPassword
    );
    const registrationUser = () => {
        console.log({ userName });
        dispatch(
            sendRegistrationDataAction({
                username: userName,
                password,
                email,
            })
        );
        history.push("/confirmation");
    }
    return (
        <MainTemplate
            titleBlock={
                <div className="login-title">
                    <Link className="for-link" to={"/login"}><Title title={"Login "} isActive={false} /></Link>
                    <Title title={" | "} isActive={true} />
                    <Link className="for-link" to={"/registration"}><Title title={" Registration"} isActive={true} /></Link>
                </div >
            }
            mainBlock={
                <div className="input-center">
                    <Input value={userName} text={"User name"} type={"text"} isValid={isValidUserName} onChangeHandler={(text: string) => dispatch(setUserNameAction(text.trim()))} />
                    <Input value={email} text={"Email"} type={"email"} isValid={isValidEmail} onChangeHandler={(text: string) => dispatch(setEmailAction(text.trim()))} />
                    <Input value={password} text={"Password"} type={"password"} isValid={isValidPassword} onChangeHandler={(text: string) => dispatch(setPasswordAction(text.trim()))} />
                    <Input value={confirmPassword} text={"Confirm Password"} type={"password"} isValid={isValidConfirmPassword} onChangeHandler={(text: string) => dispatch(setConfirmPasswordAction(text.trim()))} />
                    <p className="login-text">{error}</p>
                    <Button text={"Login"}
                        isValid={
                            isValidUserName &&
                            isValidEmail &&
                            isValidPassword &&
                            isValidConfirmPassword
                        }
                        onClick={registrationUser} />
                    <p className="login-text">If you have account, you can {" "}
                        <Link className="for-link" to={"/login"}>
                            login
                        </Link>
                    </p>
                    <p className="login-text"></p>
                    <p className="login-text"></p>
                </div>
            }
        />
    )
});