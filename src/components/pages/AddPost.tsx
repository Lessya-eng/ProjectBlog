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
import { BackBtn } from "../atoms/BackBtn";
import { InputTitle } from "../atoms/InputTitle";
import { InputText } from "../atoms/InputText";
import { Header } from "../molecules/Header";
import { useState } from "react";
import { validateName, validatePassword } from "../helper/ForLogin";
import { InputCommon } from "../atoms/InputCommon/InputCommon";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { sendPostAction } from "../../core";



export const AddPost = memo(() => {
    const dispatch = useDispatch();
    const history = useHistory();
    /*     const addImg = () => {
            history.push("/");
        } */
    const backBtn = () => {
        history.push("/all-posts");
    }
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [lessonNum, setLessonNum] = useState("");
    const [images, setImages] = useState<ImageListType>([]);

    const isValidTitle = validateName(title);
    const isValidText = validateName(text);
    const isValidLessonNum = validateName(lessonNum);

    const isValid = isValidTitle && isValidText && isValidLessonNum && Boolean(images.length);
    const sendData = () => {
        dispatch(
            sendPostAction({
                title,
                text,
                image: images[0],
                lesson_num: Number(lessonNum),
            })
        );
    }

    const onChange = (
        imageList: ImageListType,
        addUpdateIndex?: Array<number>
    ) => {
        // data for submit

        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div className="add-post-wrapper">
            <div className="add-post-title">
                <BackBtn text={"< Back"} onClick={backBtn} />
                <div className="add-new-post-title">
                    <h2>{"Add new post"}</h2>
                </div>
            </div>
            <div className="add-post-inputs">
                <div>
                    <InputCommon
                        value={title}
                        onChangeHandler={(text: string) => setTitle(text.trim())}
                        title={"Title"}
                        isValid={isValidTitle}
                    />
                    <InputCommon
                        value={text}
                        onChangeHandler={(text: string) => setText(text.trim())}
                        title={"Text"}
                        isValid={isValidText}
                    />
                    <InputCommon
                        value={lessonNum}
                        onChangeHandler={(text: string) => setLessonNum(text.trim())}
                        title={"Lesson number"}
                        isValid={isValidLessonNum}
                    />
                    {/* 
                    Было
                    <InputTitle text={"Title"} />
                    <InputTitle text={"Lesson number"} />
                    <InputText fieldName={"Text"} /> */}
                </div>
                <div className="add-post-inputs-img">
                    <h4>Image</h4>





                    <div className="app">
                        <ImageUploading
                            multiple
                            value={images}
                            onChange={onChange}
                            dataURLKey="data_url"
                        >
                            {({
                                imageList,
                                onImageUpload,
                                onImageRemoveAll,
                                onImageUpdate,
                                onImageRemove,
                                isDragging,
                                dragProps,
                            }) => (
                                // write your building UI
                                <div className="upload__image-wrapper">
                                    {!images.length && <button

                                        style={isDragging ? { color: 'red' } : undefined}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    >
                                        <h4>Click or Drop here</h4>
                                    </button>}
                                    &nbsp;
                                    {imageList.map((image, index) => (
                                        <div key={index} className="image-item">
                                            <img src={image['data_url']} alt="" width="300" height="300" />
                                            <div className="image-item__btn-wrapper">
                                                <button className="add-btn" onClick={() => onImageUpdate(index)}>Update</button>
                                                <button className="add-btn" onClick={() => onImageRemove(index)}>Remove</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </ImageUploading>
                    </div >

                </div>
            </div>
            <div className="add-post-main-input">
                <Button text={"Add"} isValid={isValid} onClick={sendData} />
            </div>

        </div >
    )
});