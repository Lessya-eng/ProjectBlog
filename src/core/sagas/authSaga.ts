import { IRegistrationState } from './../reducers/registrationReducer';
import { getRegistrationSelector } from './../selectors/registrationSelector';
import { ACTIONS } from './../actions/constants';
import { sendRegistrationDataError, setUserNameAction } from './../actions/registrationAction';
import { IUserAuth } from "../../../src/types/user";
import { call, put, select, takeEvery } from "@redux-saga/core/effects";
import { Action } from 'redux-actions';


function* sendRegistrationSaga({
    payload: { username, password, email },
}: Action<IUserAuth>) {
    try {
        const data: IRegistrationState = yield select(getRegistrationSelector); //альтернатива useSelector
        console.log("registrationData:", { username, password, email });

        //yield call() =>
        //AuthService.singUp({
        //    username,
        //    password,
        //    email
        // put для очистки полей после регистрации})
        yield put(setUserNameAction("")); //вставить после


    } catch (e) {
        yield put(sendRegistrationDataError({ e }));
    }
}

export function* authSaga() {
    yield takeEvery(ACTIONS.SEND_REGISTRATION_DATA, sendRegistrationSaga);
}