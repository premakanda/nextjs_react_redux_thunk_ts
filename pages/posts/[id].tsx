import * as React from "react";
import {FC, useEffect} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../redux/store";
import {withRedux} from "../../redux/redux";
import Post from "../../components/posts/Post";
import {addComment, changePost, deletePost, getComments, getPost} from "../../redux/ThunkCreators";
import withLayout from "../withLayout";
import {IPost, Statuses} from "../../helpers/types";
import {apiPosts} from "../../dal/api";
import {Container} from "../../globalStyles/globalStyles";
import Comment from "../../components/comment/Comment";
import {CommentWrapper} from "../../components/comment/CommentCSS";
import CommentForm from "../../components/comment/CommentForm";
import {setPost} from "../../redux/actionCreators";

interface IProps {
    post: IPost
}

const Id: FC<IProps> = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const id = router.query.id as string;
    const post = useSelector((state: AppState) => state.root.post);
    const comments = useSelector((state: AppState) => state.root.comments
        .map((c) => <Comment key={c.id} body={c.body} id={c.postId}/>));
    const status = useSelector((state: AppState) => state.root.status);
    useEffect(() => {
        if (id) {
            dispatch(getPost(id));
        }
        dispatch(getComments(id));
        return () => {
            dispatch(setPost(null))
        }
    }, [id]);

    const handleDeletePost = (id: string) => {
        dispatch(deletePost(id));
        router.push('/');
    };
    const handleChangePost = (id: string, title: string, body: string) => {
        const changedPost = {title, body};
        dispatch(changePost(id, changedPost))
    };
    const handleAddComment = (body: string) => {
        dispatch(addComment(id, body))
    };
    return (
        <div>
            <Container>
                <Post handleChangePost={handleChangePost} post={post === null ? props.post : post}
                      handleDeletePost={handleDeletePost}/>
                <CommentWrapper>
                    {comments}
                </CommentWrapper>
                <CommentForm handleAddComment={handleAddComment}/>
            </Container>
        </div>
    )
};

export async function getServerSideProps(context) {
    let post = await apiPosts.getPost(context.query.id);
    console.log(post);
    return {
        props: {post: post}, // will be passed to the page component as props
    }
}

export default withLayout(withRedux(Id));
