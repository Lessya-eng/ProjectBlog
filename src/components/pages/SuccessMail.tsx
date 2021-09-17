import React from "react";
import { memo } from "react";
import { Button } from "../atoms/Button";
import { Title } from "../atoms/Title";
import { MainTemplate } from "../template/MainTemplate";


export const SuccessMail = memo(() => {
    return (
        <MainTemplate
            titleBlock={<Title title={"Success"} isActive={true} />}
            mainBlock={
                <div className="input-center">
                    <div className="confirmation-wrapper">
                        <p>Email confirmed.</p>
                        <p>Your registration is now completed</p>
                    </div>
                    <Button text={"Login"} />
                </div>
            }
        />
    )
});