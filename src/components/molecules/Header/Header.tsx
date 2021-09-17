import React from "react";
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
                <Link className="for-link" to={"/home"}><a href="#" className="link">Home</a></Link>
                <Link className="for-link" to={"/login"}><a href="#" className="link">Login</a></Link>
                <Link className="for-link" to={"/confirmation"}><a href="#" className="link">Confirmation</a></Link>
                <Link className="for-link" to={"/newPassword"}><a href="#" className="link">New Password</a></Link>
                <Link className="for-link" to={"/resetPassword"}><a href="#" className="link">Reset Password</a></Link>
                <Link className="for-link" to={"/resetPasswordLetter"}><a href="#" className="link">Reset Password Letter</a></Link>
                <Link className="for-link" to={"/successMail"}><a href="#" className="link">Success Mail</a></Link>
                <Link className="for-link" to={"/successPassword"}><a href="#" className="link">Success Password</a></Link>
            </nav>
        </div>
    )
});