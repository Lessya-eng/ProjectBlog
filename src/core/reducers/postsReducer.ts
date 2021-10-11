import { ActionType, createReducer } from "typesafe-actions";
import { MyPosts } from "./../../components/pages/MyPosts";
import { setPostsAction, setMyPostsAction, setSelectedPostAction, setMyPostErrorAction, } from "../../core/actions/postsActions";
import { IPost } from "../../types/posts"

export interface IPostsState {
    posts: IPost[] | null;
    myPosts: IPost[] | null;
    selectedPost: IPost[] | null;
    myPostError: string | null;
}

const defaultState: IPostsState = {
    posts: null,
    myPosts: null,
    selectedPost: null,
    myPostError: null,
}
const actions = {
    setPostsAction,
    setMyPostsAction,
    setSelectedPostAction,
    setMyPostErrorAction,
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
    }))
    .handleAction(
        setSelectedPostAction,
        (state, { payload: selectedPost }) => ({
            ...state,
            selectedPost,
        })
    )
    .handleAction(setMyPostErrorAction, (state, { payload: myPostError }) => ({
        ...state,
        myPostError,
    }));



