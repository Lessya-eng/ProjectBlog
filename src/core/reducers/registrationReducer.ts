import { ActionType, createReducer } from "typesafe-actions";

import {
    setEmailAction,
    setUserNameAction,
    setPasswordAction,
    setConfirmPasswordAction,
    sendRegistrationDataErrorAction,
    sendRegistrationDataSuccessAction,
} from "../actions/registrationAction";

export interface IRegistrationState {
    userName: string,
    email: string,
    password: string,
    confirmPassword: string,
    error: string | null;
    isSuccess: boolean;
}

const defaultState: IRegistrationState = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: null,
    isSuccess: false,

};
const actions = {
    setEmailAction,
    setUserNameAction,
    setPasswordAction,
    setConfirmPasswordAction,
    sendRegistrationDataErrorAction,
    sendRegistrationDataSuccessAction,
};

export const registrationReducer = createReducer<
    IRegistrationState,
    ActionType<typeof actions>
>(defaultState).handleAction(setEmailAction, (state, { payload: email }) => ({
    ...state,
    email,
}))
    .handleAction(setUserNameAction, (state, { payload: userName }) => ({
        ...state,
        userName,
    }))
    .handleAction(setPasswordAction, (state, { payload: password }) => ({
        ...state,
        password,
    }))
    .handleAction(setConfirmPasswordAction, (state, { payload: confirmPassword }) => ({
        ...state,
        confirmPassword,
    }))
    .handleAction(sendRegistrationDataErrorAction, (state, { payload: error }) => ({
        ...state,
        error,
    }))
    .handleAction(sendRegistrationDataSuccessAction, (state, { payload: isSuccess }) => ({
        ...state,
        isSuccess,
    }));