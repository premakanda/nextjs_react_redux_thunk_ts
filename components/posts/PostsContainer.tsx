import * as React from "react";
import {IPost} from "../../helpers/types";
import {Container} from "../../globalStyles/globalStyles";
import PostTab from "../postTabs/PostTab";

interface IProps {
    posts: IPost[]
}

const PostsContainer = (props: IProps) => {
    const posts = props.posts.map((p) => {
        return <PostTab key={p.id} id={p.id} title={p.title}/>
    });
    return (
        <Container>
            <div style={{display: 'grid',gridTemplateColumns:'1fr 1fr 1fr',gridGap:'10px', paddingTop:'20px'}}>
                {posts}
            </div>
        </Container>
    )
};
export default PostsContainer;
