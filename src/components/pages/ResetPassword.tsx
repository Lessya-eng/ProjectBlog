
import React from "react";
import { memo } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Title } from "../atoms/Title";
import { MainTemplate } from "../template/MainTemplate";


export const ResetPassword = memo(() => {
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
                        <Input searchValue={""} text={"Email"} type={"email"} />
                        <Button text={"Reset"} />
                        <p className="login-text">Return to <a href="#">login </a></p>
                    </div>
                </div>
            }
        />
    )
});