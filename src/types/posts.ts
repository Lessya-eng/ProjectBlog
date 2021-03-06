export interface IPost {
    id: number;
    image: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    author: number;
}
export interface IMyPost {
    id: number;
    image: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    author: number;
}
export interface IPostsRequest {
    count: number;
    next: string | null;
    previous: string | null;
    results: IPost[];
}