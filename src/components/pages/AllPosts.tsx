import React, { useEffect } from "react";
import { memo } from "react";
import { Button } from "../atoms/Button";
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
import { FoldedPost } from "../molecules/FoldedPost";
import { IPost } from "../../types/posts";
import { posts } from "../../mock/index";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction } from "../../core/actions/postsActions";
import { getPostsState } from "../../core/selectors/postsSelectors";
import { getAppState } from "../../core/selectors/appSelectors";



export const AllPosts = memo(() => {
    const dispatch = useDispatch();
    const { posts } = useSelector(getPostsState);

    useEffect(() => {
        dispatch(getPostsAction());
    }, [dispatch]);

    console.log("Posts:", { posts });

    const history = useHistory();
    const addPost = () => {
        history.push("/add-post");
    }

    return (<BlogTemplate
        titleBlock={
            <div className="blog-template-title">
                <Title title={"All posts"} isActive={true} />
                <AddBtn text={"+ Add"} onClick={addPost} />
            </div>
        }
        mainBlock={
            <div className="blog-template-body">
                {posts?.map((post) => {
                    return (
                        <Link key={post.id} to={`posts/${post.id}`}>
                            <FoldedPost key={post.id} {...post} />
                        </Link>
                    )
                })}
            </div>
        }
    />
    )
});