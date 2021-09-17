import { memo } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, } from "react-router-dom";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Title } from "../atoms/Title";
import { MainTemplate } from "../template/MainTemplate";
import React from "react";
/* import React, { useState } from "react";
import { validateName, validateEmail } from "../helper/ForLogin";
import { login } from "../router/utils";
import { useHistory } from "react-router"; */



export const Login = memo(() => {
    /*    const [userName, setUserName] = useState(" ");
       const [email, setEmail] = useState("");
   
       const isValidUserName = validateName(userName)
       const isValidEmail = validateEmail(email)
       const history = useHistory();
   
       const loginUser = () => {
           if (isValidUserName && isValidEmail) {
               console.log("login");
               login(userName);
               history.push("/films")
           }
       } */
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
                    <Input searchValue={""} text={"Email"} type={"email"} />
                    <Input searchValue={""} text={"Password"} type={"password"} />
                    <Button text={"Login"} />
                    <p className="login-text">Forgot your password? <a href="#">Reset password </a></p>
                </div>
            }
        />
    )
});