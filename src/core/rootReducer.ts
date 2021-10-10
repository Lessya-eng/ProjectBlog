import { postsReducer } from './reducers/postsReducer';
import { newPasswordReducer } from './reducers/newPasswordReducer';
import { loginReducer } from './reducers/loginReducer';
import { resetPasswordReducer } from './reducers/resetPasswordReducer';
import { combineReducers } from "redux";

import { appReducer, registrationReducer } from "../core/reducers";

export const rootReducer = combineReducers({
    app: appReducer,
    registration: registrationReducer,
    login: loginReducer,
    email_reset_password: resetPasswordReducer,
    new_password: newPasswordReducer,
    posts: postsReducer,
});