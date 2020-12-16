export interface IPost {
    title: string
    body: string
    id?: string
}

export interface IComment {
    id: number,
    postId: string,
    body: string
}

export enum Statuses {
    notInit = 0,
    isLoading = 1,
    success = 2,
    error = 3
}
