import { IPostSendRequest, IPostsRequest } from './../../types/posts';
import { setPostsAction, setMyPostsAction, setMyPostErrorAction, setSelectedPostAction, sendPostAction } from './../actions/postsActions';
import { PublicService } from './../../services/PublicService';
import { PostsService } from './../../services/PostService';
import { ACTIONS } from './../actions/constants';
import { call, takeEvery, put } from '@redux-saga/core/effects';
import { Action } from "redux-actions";

function* getPostsSaga() {
    try {
        console.log("hello");

        const data: { data: IPostsRequest } = yield call(() =>
            PublicService.getPosts()
        );
        console.log({ data });

        yield put(setPostsAction(data.data.results))
    } catch (e) {

    }
}

function* getMyPostsSaga() {
    try {
        console.log("bye");
        const data: { data: any } = yield call(() =>
            PostsService.getMyPosts()
        )
        console.log({ data });

        yield put(setMyPostsAction(data.data))
    } catch (e) {

    }
}
function* getSelectedPost({ payload: id }: Action<number>) {
    try {
        const data: { data: any } = yield call(() =>
            PublicService.getSelectedPost(id)
        );
        yield put(setSelectedPostAction(data.data));
    } catch (e: any) { }
}

function* sendPostSaga({ payload }: Action<IPostSendRequest>) {
    try {

        console.log({ payload });

        const data: { data: IPostsRequest } = yield call(() =>
            PostsService.sendPost(payload)
        );
        console.log({ data });

        //yield put(setPostsAction(data.data.results));

    } catch (e: any) {
        console.log({ e });
    }
}

export function* postsSaga() {
    yield takeEvery(ACTIONS.GET_POSTS_ACTION, getPostsSaga);
    yield takeEvery(ACTIONS.GET_MY_POSTS_ACTION, getMyPostsSaga);
    yield takeEvery(ACTIONS.GET_SELECTED_POST_ACTION, getSelectedPost);
    yield takeEvery(ACTIONS.SEND_POST_ACTION, sendPostSaga);

}