import { setProfileAction } from './../actions/appActions';
import { ITokens } from './../../types/user';
import { sendLoginDatasSuccessAction } from './../actions/loginAction';
import { AuthService } from './../../services/AuthService';
import { IRegistrationState } from './../reducers/registrationReducer';
import { getRegistrationSelector } from './../selectors/registrationSelector';
import { getLoginSelector } from "../selectors/loginSelector";
import { ACTIONS } from './../actions/constants';
import { sendRegistrationDataErrorAction, } from './../actions';
import { sendLoginDataErrorAction } from "../actions/loginAction";
import { IActivationPayload, IUserAuth, IUserLoginAuth } from "../../../src/types/user";
import { call, put, select, takeEvery } from "@redux-saga/core/effects";
import { Action } from 'redux-actions';

function* sendRegistrationSaga({
    payload: { username, password, email },
}: Action<IUserAuth>) {
    try {
        const data: IRegistrationState = yield select(getRegistrationSelector); //альтернатива useSelector
        console.log("registrationData:", { username, password, email });
        yield put(sendRegistrationDataErrorAction(null));

        yield call(() =>
            AuthService.registration({
                username,
                password,
                email,
            })
        );
    } catch (e: any) {
        const error = Object.keys(e.response.data).reduce((acc: string, field: string) => {
            const value = e.response.data[field];
            return acc + value.join(" ");
        }, '');
        console.log({ error });

        yield put(sendRegistrationDataErrorAction(error));
    }
}

function* loginSaga({
    payload: { password_login, email_login },
}: Action<IUserLoginAuth>) {
    try {
        //@ts-ignore
        const data: { data: ITokens } = yield call(() =>
            AuthService.login({
                password_login,
                email_login,
            })
        );
        const { access, refresh } = data?.data as any;
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);

        yield put(sendLoginDatasSuccessAction(true));

        const usersData: { data: ITokens } = yield call(() =>
            AuthService.getUsers()
        );

        const users = usersData?.data as any;

        yield put(setProfileAction(users.results[0]));




        console.log({ access, refresh });

    } catch (e) {
        console.log({ e });
        yield put(
            sendLoginDataErrorAction(
                "No active account found with the given credentials"
            )
        )

    }
}

function* confirmationRegistrationSaga({
    payload: { token, uid },
}: Action<IActivationPayload>) {
    try {
        yield call(() =>
            AuthService.activateUser({
                token,
                uid,
            })
        );
    } catch (e) { }
}

export function* authSaga() {
    yield takeEvery(ACTIONS.SEND_REGISTRATION_DATA_ACTION, sendRegistrationSaga);
    yield takeEvery(ACTIONS.SEND_LOGIN_DATA_ACTION, loginSaga);
    yield takeEvery(
        ACTIONS.SEND_REGISTRATION_CONFIRMATION,
        confirmationRegistrationSaga
    );
}
                //yield call() => работаем с асинхроном, вызываем api
        //AuthService.registration({
        //    username,
        //    password,
        //    email
        // put для очистки полей после регистрации})
        //yield put(setUserNameAction("")); //вставить после