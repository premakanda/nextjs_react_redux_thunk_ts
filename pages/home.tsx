import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {AppState} from "../redux/store";
import {getPosts} from "../redux/ThunkCreators";
import PostsContainer from "../components/posts/PostsContainer";
import withLayout from "./withLayout";

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state: AppState) => state.root.posts);
    useEffect(() => {
        dispatch(getPosts())
    }, []);
    return (
        <PostsContainer posts={posts}/>
    )
};
export default withLayout(Home);
