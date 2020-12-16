import {AppState} from "./store";
import {ThunkAction} from "redux-thunk";
import {
    AppActions,
    setPosts,
    setStatus,
    addNewPost, setComments, setPost, setChangedPost, deletePostAC, setNewComment,
} from "./actionCreators";
import {apiPosts} from "../dal/api";
import {IComment, IPost, Statuses} from "../helpers/types";


type ThunkActionType = ThunkAction<Promise<void>, AppState, unknown, AppActions>;

export const getPosts = (): ThunkActionType => async (dispatch) => {
    try {
        dispatch(setStatus(Statuses.isLoading));
        const result = await apiPosts.getPosts();
        dispatch(setPosts(result));
        dispatch(setStatus(Statuses.success));
    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};

export const getPost = (id: string): ThunkActionType => async (dispatch) => {
    try {
        dispatch(setStatus(Statuses.isLoading));
        const result = await apiPosts.getPost(id);
        dispatch(setPost(result));
        dispatch(setStatus(Statuses.success));
    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};
export const addPost = (post: IPost): ThunkActionType => async (dispatch) => {
    try {
        dispatch(setStatus(Statuses.isLoading));
        const result = await apiPosts.addNewPost(post);
        dispatch(addNewPost(result));
        dispatch(setStatus(Statuses.success));
    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};
export const getComments = (id: string): ThunkActionType => async (dispatch) => {
    try {
        dispatch(setStatus(Statuses.isLoading));
        const comments = await apiPosts.getComments(id);
        dispatch(setComments(comments));
        dispatch(setStatus(Statuses.success));

    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};
export const changePost = (id: string, newPost: IPost): ThunkActionType => async (dispatch) => {
    try {
        dispatch(setStatus(Statuses.isLoading));
        const result = await apiPosts.changePost(id, newPost);
        dispatch(setChangedPost(result));
        dispatch(setStatus(Statuses.success));
    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};
export const deletePost = (id: string): ThunkActionType => async (dispatch) => {
    try {
        dispatch(setStatus(Statuses.isLoading));
        await apiPosts.deletePost(id);
        dispatch(deletePostAC(id));
        dispatch(setStatus(Statuses.success));
    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};
export const addComment = (postId: string, body: string): ThunkActionType => async (dispatch) => {
    try {
        dispatch(setStatus(Statuses.isLoading));
        const result = await apiPosts.addComment(postId, body);
         dispatch(setNewComment(result));
        dispatch(setStatus(Statuses.success));
    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};
