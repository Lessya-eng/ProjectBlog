import { memo } from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, } from "react-router-dom";
import user from "../../img/user.svg";
import logout from "../../img/logout.svg";
import { useSelector } from "react-redux";
/* import { setUserNameAction } from "../../../core"; */
import { getRegistrationSelector } from "../../../core/selectors/registrationSelector";


export const PrivateHeader = memo(() => {
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
                    <p className="user-name">UserName</p>
                </div>
                <nav className="main-menu">
                    <Link className="for-link" to={"/all-posts"}><a href="#" className="link">All Posts</a></Link>
                    <Link className="for-link" to={"/my-posts"}><a href="#" className="link">My Posts</a></Link>
                    <Link className="for-link" to={"/"}><a href="#" className="link">+ Add Posts</a></Link>
                    <Link className="for-link" to={"/"}><a href="#" className="link">
                        Log out {" "}
                        <img src={logout} alt="logout" />
                    </a></Link>
                </nav>
            </div>

        </div>

    )
})