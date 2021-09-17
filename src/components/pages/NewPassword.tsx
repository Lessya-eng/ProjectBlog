import React from "react";
import { memo } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Title } from "../atoms/Title";
import { MainTemplate } from "../template/MainTemplate";



export const NewPassword = memo(() => {
    return (
        <MainTemplate
            titleBlock={<Title title={"New password"} isActive={true} />}
            mainBlock={
                <div className="input-center">
                    <div className="confirmation-wrapper">
                        <p>Please enter new password</p>
                    </div>
                    <div className="input-center">
                        <Input searchValue={""} text={"New password"} type={"password"} />
                        <Input searchValue={""} text={"Confirm password"} type={"password"} />
                    </div>
                    <Button text={"Set password"} />
                </div>
            }
        />
    )
});