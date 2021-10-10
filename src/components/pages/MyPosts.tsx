import React, { useEffect } from "react";
import { memo } from "react";
import { Title } from "../atoms/Title";
import { BlogTemplate } from "../template/BlogTemplate";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect, useHistory
} from "react-router-dom";
import { AddBtn } from "../atoms/AddBtn";
import { FoldedMyPost } from "../molecules/FoldedMyPosts";
import { useDispatch, useSelector } from "react-redux";
import { getPostsState } from "../../core/selectors/postsSelectors";
import { getMyPostsAction } from "../../core/actions/postsActions";
import { getMyPostsState } from "../../core/selectors/myPostsSelector"


export const MyPosts = memo(() => {
    const dispatch = useDispatch();
    const { myPosts } = useSelector(getMyPostsState);

    useEffect(() => {
        dispatch(getMyPostsAction());
    }, [dispatch]);

    console.log("MyPosts:", { myPosts });

    const history = useHistory();
    const addPost = () => {
        history.push("/add-post");
    }
    return (
        <>
            <BlogTemplate
                titleBlock={
                    <div className="blog-template-title">
                        <Title title={"My posts"} isActive={true} />
                        <AddBtn text={"+ Add"} onClick={addPost} />
                    </div>
                }
                mainBlock={
                    <div className="blog-template-body">
                        {myPosts?.map((post) => (
                            <div key={post.id}>{<FoldedMyPost key={post.id} {...post} />}</div>
                        ))}
                    </div>
                }
            />
        </>
    )
})