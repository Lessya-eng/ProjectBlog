import { setProfileAction } from './../actions/appActions';
import { ActionType, createReducer } from "typesafe-actions";

import { setIsOpenHeader } from "../../core/actions";
import { IProfile } from "../../types/user"
export interface IAppState extends IProfile {
    isOpenHeader: boolean;
}

const defaultState: IAppState = {
    isOpenHeader: false,
    username: null,
    id: null,
    email: null,
};
const actions = {
    setIsOpenHeader,
    setProfileAction,
};

export const appReducer = createReducer<IAppState, ActionType<typeof actions>>(
    defaultState
).handleAction(setIsOpenHeader, (state, { payload }) => ({
    ...state,
    isOpenHeader: payload, /* true/false */
}))
    .handleAction(setProfileAction, (state, { payload: { email, id, username } }) => ({
        ...state,
        email,
        id,
        username
    }))
