import React from "react";
import { memo } from "react";
import { Button } from "../atoms/Button";
import { Title } from "../atoms/Title";
import { MainTemplate } from "../template/MainTemplate";


export const Confirmation = memo(() => {
    return (
        <MainTemplate
            titleBlock={<Title title={"Registartion Confirmation"} isActive={true}/>}
            mainBlock={
                <div className="input-center">
                    <div className="confirmation-wrapper">
                        <p>Please activate your account with</p>
                        <p>the activation link in the email <a href="#">test@gmail.com</a></p>
                        <p>Please, check your email</p>
                    </div>
                    <Button text={"Home"} />
                </div>
            }
        />
    )
});