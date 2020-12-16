import axios, {AxiosResponse} from 'axios'
import {IComment, IPost} from "../helpers/types";

const instance = axios.create({
    baseURL: 'https://simple-blog-api.crew.red/',
});

interface IResponse<T> extends IPost {
    comments: T
}

// some endpoints returns id as number, and some as string
const preparePost = (post: IPost) => {
    return {...post, id: post.id.toString()}
};

export const apiPosts = {
    async getPosts() {
        return await instance.get<IPost[]>('posts').then((res) => {
            return res.data.map(p => preparePost(p));
        })
    },
    async getPost(id: string) {
        return await instance.get<IPost>(`posts/${id}`).then((res) => {
            return preparePost(res.data);
        })
    },
    async addNewPost(newPost: IPost) {
        return await instance.post<IPost>('posts', newPost).then((res) => {
            return preparePost(res.data);
        });
    },
    async getComments(id: string) {
        return await instance.get<IResponse<IComment[]>>(`posts/${id}?_embed=comments`)
            .then((res) => res.data.comments);
    },
    async changePost(id: string, newPost: IPost) {
        return await instance.put<IPost>(`posts/${id}`, newPost)
            .then((res) => res.data)
    },
    async deletePost(id: string) {
        return await instance.delete(`posts/${id}`)
    },
    async addComment(postId: string, body: string) {
        return await instance.post('comments', {postId: parseInt(postId), body})
            .then(res => res.data)
    }
};
