import * as React from "react";
import {FC, useState} from "react";
import {Container} from "../../globalStyles/globalStyles";
import {IPost, Statuses} from "../../helpers/types";
import withLayout from "../../pages/withLayout";
import {NewPostFormWrapper, NewPostFormIn, StyledBtn, StyledTextField} from "./newPostCSS";
import {useRouter} from "next/router";

interface IProps {
    addNewPost: (post: IPost) => void
    status: number
}

const NewPostPage: FC<IProps> = (props) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const router = useRouter();
    const handleAdd = () => {
        const newPost = {title, body};
        props.addNewPost(newPost);
        setTitle('');
        setBody('');
        if (props.status === Statuses.success) {
            router.push('/')
        }
    };
    return (
        <NewPostFormWrapper>
            <NewPostFormIn>
                <StyledTextField value={title} onChange={(e) => setTitle(e.currentTarget.value)}
                                 autoComplete="off" label="Title" variant="outlined"
                                 fullWidth={true}
                />
                <StyledTextField value={body} onChange={(e) => setBody(e.currentTarget.value)}
                                 autoComplete="off" label="Post Body" variant="outlined"
                                 fullWidth={true}
                />
                <StyledBtn onClick={handleAdd} variant="contained" color="primary">add</StyledBtn>
            </NewPostFormIn>
        </NewPostFormWrapper>
    )
};
export default withLayout(NewPostPage);
