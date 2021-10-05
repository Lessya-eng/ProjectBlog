import React from "react";
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
import { IPost } from "../../types/post";
import { FoldedMyPost } from "../molecules/FoldedMyPosts";
import { posts } from "../../mock/index";
interface IPostList {
    post: IPost[];
}

export const MyPosts = memo(({ post }: IPostList) => {
    const history = useHistory();
    const allPosts = () => {
        history.push("/");
    }
    return (
        <BlogTemplate
            titleBlock={
                <div className="blog-template-title">
                    <Title title={"My posts"} isActive={true} />
                    <AddBtn text={"+ Add"} />
                </div>
            }
            mainBlock={
                <div className="blog-template-body">
                    {posts?.map((post) => (
                        <div key={post.id}>
                            <FoldedMyPost {...post} />
                        </div>
                    ))}
                </div>
            } />


    )
});