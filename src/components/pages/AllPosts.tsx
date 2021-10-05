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
import { FoldedPost } from "../molecules/FoldedPost";
import { IPost } from "../../types/post";
import { posts } from "../../mock/index";

interface IPostList {
    post: IPost[];
}

export const AllPosts = memo(({ post }: IPostList) => {

    /*     const history = useHistory();
        const allPosts = () => {
            history.push("/");
        } */
    return (
        <BlogTemplate
            titleBlock={
                <div className="blog-template-title">
                    <Title title={"All posts"} isActive={true} />
                    <AddBtn text={"+ Add"} />
                </div>
            }
            mainBlock={
                <div className="blog-template-body">
                    {posts?.map((post) => (
                        <div key={post.id}>
                            <FoldedPost key={post.id} {...post} />
                        </div>
                    ))}
                </div>
            }
        />
    )
});