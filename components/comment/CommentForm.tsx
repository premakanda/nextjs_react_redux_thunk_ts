import React, {useState} from "react";
import {FC} from "react";
import {TextField, Button} from "@material-ui/core";
import {CommentFormIn, CommentFormWrapper} from "./CommentFormCSS";


interface IProps {
    handleAddComment: (body: string) => void
}

const CommentForm: FC<IProps> = ({handleAddComment}) => {
    const [body, setBody] = useState('');
    const addNewComment = () => {
        handleAddComment(body);
        setBody('');
    };
    return (
        <>
            <CommentFormWrapper>
                <CommentFormIn>
                    <TextField
                        label="Comment"
                        value={body}
                        fullWidth={true}
                        onChange={(e) => setBody(e.currentTarget.value)}
                        multiline
                        variant="outlined"
                    />
                    <Button onClick={addNewComment} variant="contained" color="primary">SEND</Button>
                </CommentFormIn>
            </CommentFormWrapper>
        </>
    )
};
export default CommentForm;
