import { sendLoginDataErrorAction, sendLoginDatasSuccessAction } from './../actions/loginAction';
import { ActionType, createReducer } from "typesafe-actions";

import {
    setEmailLoginAction,
    setPasswordLoginAction,
} from "../actions/loginAction";

export interface ILoginState {
    email_login: string,
    password_login: string,
    error: string | null,
    isSuccess: boolean,
}

const defaultState: ILoginState = {
    email_login: "",
    password_login: "",
    error: null,
    isSuccess: false,
};
const actions = {
    setEmailLoginAction,
    setPasswordLoginAction,
    sendLoginDataErrorAction,
    sendLoginDatasSuccessAction,
};

export const loginReducer = createReducer<
    ILoginState,
    ActionType<typeof actions>
>(defaultState).handleAction(setEmailLoginAction, (state, { payload: email_login }) => ({
    ...state,
    email_login,
}))
    .handleAction(setPasswordLoginAction, (state, { payload: password_login }) => ({
        ...state,
        password_login,
    }))
    .handleAction(sendLoginDataErrorAction, (state, { payload: error }) => ({
        ...state,
        error,
    }))
    .handleAction(sendLoginDatasSuccessAction, (state, { payload: isSuccess }) => ({
        ...state,
        isSuccess,
    }))