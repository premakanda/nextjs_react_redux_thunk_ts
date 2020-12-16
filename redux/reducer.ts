import {
    AppActions,
    CHANGE_POST, CLOSE_SNACK,
    DELETE_POST,
    SET_COMMENTS, SET_NEW_COMMENT,
    SET_NEW_POST,
    SET_POST,
    SET_POSTS,
    SET_STATUS
} from "./actionCreators";
import {IComment, IPost, Statuses} from "../helpers/types";


let initialState = {
    post: null as IPost,
    posts: [] as IPost[],
    comments: [] as IComment[],
    status: Statuses.notInit,
    showSnack: false
};

type StateType = typeof initialState;

export const reducer = (state = initialState, action: AppActions): StateType => {
    switch (action.type) {
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SET_POSTS: {
            return {...state, posts: action.posts}
        }
        case SET_POST: {
            return {...state, post: action.post}
        }
        case SET_NEW_POST: {
            return {...state, posts: [...state.posts, action.post], showSnack: true}
        }
        case SET_COMMENTS: {
            return {...state, comments: action.comments}
        }
        case CHANGE_POST: {
            return {...state, post: action.post, showSnack: true}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter((p) => p.id === action.id), showSnack: true}
        }
        case SET_NEW_COMMENT: {
            return {
                ...state,
                comments: [...state.comments, action.comment]
            }
        }
        case CLOSE_SNACK: {
            return {
                ...state,
                showSnack: false
            }
        }
        default: {
            return state
        }
    }
};
