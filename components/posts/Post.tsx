import * as React from "react";
import {FC, useState} from "react";
import {IPost} from "../../helpers/types";
import {Button, Input, TextField} from "@material-ui/core";
import {ChangeFormWrapper, PostWrapper, StyledPost, BtnWrapper} from "./PostCSS";

interface IProps {
    post: IPost,
    handleDeletePost: (id: string) => void
    handleChangePost: (id: string, title: string, body: string) => void
}

const Post: FC<IProps> = ({post, handleDeletePost,handleChangePost}) => {
    if (!post) return <div>Loading...</div>;

    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    const handleChange = () => {
        if (editMode) {
            handleChangePost(post.id, title, body);
            setEditMode(false);
        } else {
            setEditMode(true)
        }
    };

    return (
        <>
            <PostWrapper>
                {
                    editMode
                        ? <ChangeFormWrapper>
                            <TextField value={title} onChange={(e) => setTitle(e.currentTarget.value)}
                                       inputProps={{'aria-label': 'description'}}
                                       required={true} label="Title"/>
                            <TextField value={body} onChange={(e) => setBody(e.currentTarget.value)}
                                       rows={'auto'} multiline label="Post Text" required={true}
                                       style={{marginTop: '25px'}} id="standard-basic"/>
                        </ChangeFormWrapper>
                        : <StyledPost>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </StyledPost>

                }
                <BtnWrapper>
                    <Button onClick={handleChange} variant="contained" color="primary">
                        {editMode ? 'Save' : 'Change'}
                    </Button>
                    <Button onClick={() => handleDeletePost(post.id)} disabled={editMode}
                            variant="contained" color="secondary">
                        Delete
                    </Button>
                </BtnWrapper>
            </PostWrapper>
        </>
    )
};
export default Post;
