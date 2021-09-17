
import React from "react";
import { memo } from "react";
import { Button } from "../atoms/Button";
import { Title } from "../atoms/Title";
import { MainTemplate } from "../template/MainTemplate";


export const ResetPasswordLetter = memo(() => {
    return (
        <MainTemplate
            titleBlock={<Title title={"Reset password"} isActive={true} />}
            mainBlock={
                <div className="input-center">
                    <div className="confirmation-wrapper">
                        <p>You will receive an email <a href="#">test@gmail.com</a></p>
                        <p>with a link to reset your password</p>
                    </div>
                    <Button text={"Home"} />
                </div>
            }
        />
    )
});