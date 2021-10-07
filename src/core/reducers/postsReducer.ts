import { ActionType, createReducer } from "typesafe-actions";

import { setPostsAction, setMyPostsAction } from "../../core/actions/postsActions";
import { IPost } from "../../types/posts"

export interface IPostsState {
    posts: IPost[] | null;
    myPosts: IPost[] | null;
}

const defaultState: IPostsState = {
    posts: null,
    myPosts: null,
}
const actions = {
    setPostsAction,
    setMyPostsAction,
};

export const postsReducer = createReducer<IPostsState, ActionType<typeof actions>>(
    defaultState
).handleAction(setPostsAction, (state, { payload: posts }) => ({
    ...state,
    posts,
}))
    .handleAction(setMyPostsAction, (state, { payload: myPosts }) => ({
        ...state,
        myPosts,
    }));



