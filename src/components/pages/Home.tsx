import React from "react";
import { memo } from "react";
import { Button } from "../atoms/Button";
import { Header } from "../molecules/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect, useHistory
} from "react-router-dom";

export const Home = memo(() => {
    const history = useHistory();
    const home = () => {
        history.push("/login");
    }
    return (
        <div className="home-page-wrapper">
            <Header />
            <div className="home-page">
                <h2 className="home-title">
                    Make your Blog <span>Online</span>
                </h2>
                <div className="home-text">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the ...
                    </p>
                </div>
                <Button text={"Learn more"}
                    isValid={true}
                    onClick={home} />
            </div>
        </div>
    )
});