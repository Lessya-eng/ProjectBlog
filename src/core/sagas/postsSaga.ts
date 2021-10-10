import { setPostsAction, setMyPostsAction } from './../actions/postsActions';
import { IPostsRequest } from '../../types/posts';
import { PostsService } from './../../services/PostService';
import { ACTIONS } from './../actions/constants';
import { call, takeEvery, put } from '@redux-saga/core/effects';

function* getPostsSaga() {
    try {
        console.log("hello");

        const data: { data: IPostsRequest } = yield call(() =>
            PostsService.getPosts()
        );
        console.log({ data });

        yield put(setPostsAction(data.data.results))
    } catch (e) {

    }
}

function* getMyPostsSaga() {
    try {
        const data: { data: IPostsRequest } = yield call(() =>
            PostsService.getMyPosts()
        )
        yield put(setMyPostsAction(data.data.results))
    } catch (e) {

    }
}


export function* postsSaga() {
    yield takeEvery(ACTIONS.GET_POSTS_ACTION, getPostsSaga);
    yield takeEvery(ACTIONS.GET_MY_POSTS_ACTION, getMyPostsSaga);

}