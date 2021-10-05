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
import { PrivateRoute } from './components/router/PrivateRouter';
import { PublicRoute } from './components/router/PublicRouter';

function App() {
  return (
    <div className="app">
      <Router>
        <div>
        </div>
        <Switch>
          <PublicRoute component={Home} path="/" exact />
          <PublicRoute component={Login} path="/login" exact />
          <PublicRoute component={Registration} path="/registration" exact />
          <PublicRoute
            component={Confirmation}
            path="/activate/:uid/:token"
            exact
          />
          <PublicRoute component={NewPassword} path="/new-password" exact />
          <PublicRoute component={ResetPassword} path="/reset-password" exact />
          <PublicRoute component={ResetPasswordConfirm} path="/reset-password-confirm" exact />
          <PublicRoute component={SuccessMail} path="/success-mail" exact />
          <PublicRoute component={SuccessPassword} path="/success-password" exact />
          <PublicRoute component={AllPosts} path="/all-posts" exact />
          <PublicRoute component={MyPosts} path="/my-posts" exact />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
