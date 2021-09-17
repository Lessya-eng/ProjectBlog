import React from "react";
import { memo } from "react";
import { Button } from "../atoms/Button";
import { Title } from "../atoms/Title";
import { MainTemplate } from "../template/MainTemplate";


export const Home = memo(() => {
    return (
        <div className="home-wrapper">
            <MainTemplate
                titleBlock={
                    <div className="home-title">
                        <h2>Make your Blog <span>Online</span></h2>
                    </div>
                }
                mainBlock={
                    <div className="home-container-btn-text">
                        <div className="home-text">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...</p>
                        </div>
                        <Button text={"Learn More"} />
                    </div>
                }
            />
        </div>
    )
});