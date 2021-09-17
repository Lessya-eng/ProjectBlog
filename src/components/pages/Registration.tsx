import React from "react";
import { memo } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Title } from "../atoms/Title";
import { MainTemplate } from "../template/MainTemplate";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, } from "react-router-dom";


export const Registration = memo(() => {
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
                    <Input searchValue={""} text={"User name"} type={"text"} />
                    <Input searchValue={""} text={"Email"} type={"email"} />
                    <Input searchValue={""} text={"Password"} type={"password"} />
                    <Input searchValue={""} text={"Confirm Password"} type={"password"} />
                    <Button text={"Login"} />
                    <p className="login-text">If you have account, you can <a href="#">login</a></p>
                </div>
            }
        />
    )
});