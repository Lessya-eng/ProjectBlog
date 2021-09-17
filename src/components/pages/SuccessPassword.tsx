import React from "react";
import { memo } from "react";
import { Button } from "../atoms/Button";
import { Title } from "../atoms/Title";
import { MainTemplate } from "../template/MainTemplate";


export const SuccessPassword = memo(() => {
    return (
        <MainTemplate
            titleBlock={<Title title={"Success"} isActive={true} />}
            mainBlock={
                <div className="input-center">
                    <div className="confirmation-wrapper">
                        <p>Your password has been changed</p>
                    </div>
                    <Button text={"Login"} />
                </div>
            }
        />
    )
});