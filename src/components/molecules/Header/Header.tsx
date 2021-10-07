import { memo } from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, } from "react-router-dom";



export const Header = memo(() => {
    return (
        <div className="wrapper">
            <input type="checkbox" id="check-menu" />
            <label htmlFor="check-menu"></label>
            <div className="burger-line first"></div>
            <div className="burger-line second"></div>
            <div className="burger-line third"></div>
            <div className="burger-line fourth"></div>
            <nav className="main-menu">
                <Link className="for-link link" to={"/"}>Home</Link>
                <Link className="for-link link" to={"/all-posts"}>All Posts</Link>
                <Link className="for-link link" to={"/login"}>Login</Link>
                <Link className="for-link link" to={"/registration"}>Registration</Link>
                <Link className="for-link link" to={"/new-password"}>New Password</Link>
                <Link className="for-link link" to={"/success-mail"}>Success Mail</Link>
            </nav>
        </div>

    )
})