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
                <Link className="for-link" to={"/"}><a href="#" className="link">Home</a></Link>
                <Link className="for-link" to={"/all-posts"}><a href="#" className="link">All Posts</a></Link>
                <Link className="for-link" to={"/my-posts"}><a href="#" className="link">My Posts</a></Link>
                <Link className="for-link" to={"/add-posts"}><a href="#" className="link">+ Add Posts</a></Link>
                <Link className="for-link" to={"/login"}><a href="#" className="link">Login</a></Link>
                <Link className="for-link" to={"/confirmation"}><a href="#" className="link">Confirmation</a></Link>
                <Link className="for-link" to={"/new-password"}><a href="#" className="link">New Password</a></Link>
                <Link className="for-link" to={"/reset-password"}><a href="#" className="link">Reset Password</a></Link>
                <Link className="for-link" to={"/reset-password-confirm"}><a href="#" className="link">Reset Password Confirm</a></Link>
                <Link className="for-link" to={"/success-mail"}><a href="#" className="link">Success Mail</a></Link>
            </nav>
        </div>

    )
})