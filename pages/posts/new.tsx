import * as React from "react";
import {FC} from "react";
import NewPostPage from "../../components/newPostPage/newPostPage";
import {useDispatch, useSelector} from "react-redux";
import {addPost} from "../../redux/ThunkCreators";
import {IPost} from "../../helpers/types";
import {withRedux} from "../../redux/redux";
import {Container} from "../../globalStyles/globalStyles";
import {AppState} from "../../redux/store";

interface IProps {
}

const newPage: FC<IProps> = () => {
    const dispatch = useDispatch();
    const status = useSelector((state:AppState)=>state.root.status);
    const addNewPost = (newPost: IPost) => {
        dispatch(addPost(newPost))
    };
    return (
        <>
            <Container>
                <NewPostPage status={status} addNewPost={addNewPost}/>
            </Container>
        </>
    )
};
export default withRedux(newPage);
