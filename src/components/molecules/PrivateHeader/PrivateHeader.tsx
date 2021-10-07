import { memo } from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, } from "react-router-dom";
import user from "../../img/user.svg";
import logout from "../../img/logout.svg";
import { useSelector } from "react-redux";
import { getAppState } from "../../../core/selectors/appSelectors";

export const PrivateHeader = memo(() => {
    const { username } = useSelector(getAppState);
    return (
        <div className="wrapper">
            <div >
                <input type="checkbox" id="check-menu" />
                <label htmlFor="check-menu"></label>
                <div className="burger-line first"></div>
                <div className="burger-line second"></div>
                <div className="burger-line third"></div>
                <div className="burger-line fourth"></div>
                <div className="block-user-header">
                    <img src={user} alt="user" />
                    <p className="user-name">{username}</p>
                </div>
                <nav className="main-menu">
                    <Link className="for-link link" to={"/all-posts"}>All Posts</Link>
                    <Link className="for-link link" to={"/my-posts"}>My Posts</Link>
                    <Link className="for-link link" to={"/add-post"}>+ Add Posts</Link>
                    <Link className="for-link link" to={"/"}>
                        Log out {" "}
                        <img src={logout} alt="logout" />
                    </Link>
                </nav>
            </div>

        </div>

    )
})