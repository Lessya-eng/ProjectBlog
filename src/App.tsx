import React from 'react';
import './App.css';
import { Login } from './components/pages/Login';
import { Registration } from './components/pages/Registration';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, } from "react-router-dom";
import { Home } from './components/pages/Home';
import { SuccessPassword } from './components/pages/SuccessPassword';
import { SuccessMail } from './components/pages/SuccessMail';
import { ResetPasswordLetter } from './components/pages/ResetPasswordLetter';
import { ResetPassword } from './components/pages/ResetPassword';
import { NewPassword } from './components/pages/NewPassword';
import { Confirmation } from './components/pages/Confirmation';

function App() {
  return (

    <div className="app">
      <Router>
        <div>
          {/*           <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
              <li>
                <Link to="/confirmation">Confirmation</Link>
              </li>
              <li>
                <Link to="/newPassword">New Password</Link>
              </li>
              <li>
                <Link to="/resetPassword">Reset Password</Link>
              </li>
              <li>
                <Link to="/resetPasswordLetter">Reset Password Letter</Link>
              </li>
              <li>
                <Link to="/successMail">Success Mail</Link>
              </li>
              <li>
                <Link to="/successPassword">Success Password</Link>
              </li>
            </ul>
          </nav> */}
        </div>

        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/confirmation">
            <Confirmation />
          </Route>
          <Route exact path="/newPassword">
            <NewPassword />
          </Route>
          <Route exact path="/resetPassword">
            <ResetPassword />
          </Route>
          <Route exact path="/resetPasswordLetter">
            <ResetPasswordLetter />
          </Route>
          <Route exact path="/successMail">
            <SuccessMail />
          </Route>
          <Route exact path="/successPassword">
            <SuccessPassword />
          </Route>
        </Switch>
      </Router>

      {/*       <Login />
      <Registration />
      <Confirmation />
      <SuccessMail />
      <SuccessPassword />
      <NewPassword />
      <ResetPasswordLetter />
      <ResetPassword /> */}
    </div >
  );
}

export default App;
