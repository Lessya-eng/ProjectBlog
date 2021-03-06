import React from "react";
import { memo } from "react";
import { Button } from "../atoms/Button";
import { Head } from "../molecules/Head";
import { Header } from "../molecules/Header";

interface IMainTemplate {
    titleBlock: React.ReactNode;
    mainBlock: React.ReactNode;
}

export const MainTemplate = memo(({ titleBlock, mainBlock }: IMainTemplate) => {
    return (
        <div className="background-wrapper">
            <Header />
            <div className="main-template-wrapper">
                <div>
                    {titleBlock}
                </div>
                <div>
                    {mainBlock}
                </div>
            </div>
        </div>
    )
})