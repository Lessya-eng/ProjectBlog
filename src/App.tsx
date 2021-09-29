import React from 'react';
import './App.css';
import { Login } from './components/pages/Login';
import { Registration } from './components/pages/Registration';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, } from "react-router-dom";
import { Home } from './components/pages/Home';
import { SuccessPassword } from './components/pages/SuccessPassword';
import { SuccessMail } from './components/pages/SuccessMail';
import { ResetPasswordConfirm } from './components/pages/ResetPasswordConfirm';
import { ResetPassword } from './components/pages/ResetPassword';
import { NewPassword } from './components/pages/NewPassword';
import { Confirmation } from './components/pages/Confirmation';
import { AllPosts } from './components/pages/AllPosts';
import { MyPosts } from './components/pages/MyPosts';

function App() {
  return (

    <div className="app">
      <Router>
        <div>
        </div>
        <Switch>
          <Route exact path="/">
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
          <Route exact path="/new-password">
            <NewPassword />
          </Route>
          <Route exact path="/reset-password">
            <ResetPassword />
          </Route>
          <Route exact path="/reset-password-confirm">
            <ResetPasswordConfirm />
          </Route>
          <Route exact path="/success-mail">
            <SuccessMail />
          </Route>
          <Route exact path="/all-posts">
            <AllPosts />
          </Route>
          <Route exact path="/my-posts">
            <MyPosts />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
