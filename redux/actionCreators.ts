import {IComment, IPost, Statuses} from "../helpers/types";

export const SET_POSTS = 'nextJsPosts/helpers/constants/GET_POSTS';
export const SET_POST = 'nextJsPosts/helpers/constants/SET_POST';
export const SET_STATUS = 'nextJsPosts/helpers/constants/SET_STATUS';
export const SET_NEW_POST = 'nextJsPosts/helpers/constants/SET_NEW_POST';
export const SET_COMMENTS = 'nextJsPosts/helpers/constants/SET_COMMENTS';
export const CHANGE_POST = 'nextJsPosts/helpers/constants/CHANGE_POST';
export const DELETE_POST = 'nextJsPosts/helpers/constants/DELETE_POST';
export const SET_NEW_COMMENT = 'nextJsPosts/helpers/constants/SET_NEW_COMMENT';
export const CLOSE_SNACK = 'nextJsPosts/helpers/constants/CLOSE_SNACK';


interface IGetPosts {
    type: typeof SET_POSTS,
    posts: IPost[]
}

interface ISetPost {
    type: typeof SET_POST,
    post: IPost
}

interface ISetStatus {
    type: typeof SET_STATUS,
    status: Statuses
}

interface IAddPost {
    type: typeof SET_NEW_POST,
    post: IPost
}

interface ISetComments {
    type: typeof SET_COMMENTS,
    comments: IComment[]
}

interface IChangePost {
    type: typeof CHANGE_POST,
    post: IPost
}

interface IDeletePost {
    type: typeof DELETE_POST,
    id: string
}

interface IAddComment {
    type: typeof SET_NEW_COMMENT,
    comment: IComment
}

interface ICLoseSnack {
    type: typeof CLOSE_SNACK
}

export type AppActions = IGetPosts
    | ISetStatus
    | IAddPost
    | ISetComments
    | ISetPost
    | IChangePost
    | IDeletePost
    | IAddComment
    | ICLoseSnack

export const setPosts = (posts: IPost[]): IGetPosts => ({type: SET_POSTS, posts});
export const setPost = (post: IPost): ISetPost => ({type: SET_POST, post});
export const setStatus = (status: Statuses): ISetStatus => ({type: SET_STATUS, status});
export const addNewPost = (post: IPost): IAddPost => ({type: SET_NEW_POST, post});
export const setComments = (comments: IComment[]): ISetComments => ({type: SET_COMMENTS, comments});
export const setChangedPost = (post: IPost): IChangePost => ({type: CHANGE_POST, post});
export const deletePostAC = (id: string): IDeletePost => ({type: DELETE_POST, id});
export const setNewComment = (comment: IComment): IAddComment => ({type: SET_NEW_COMMENT, comment});
export const closeSnack = (): ICLoseSnack => ({type: CLOSE_SNACK});
