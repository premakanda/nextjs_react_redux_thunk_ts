import React from "react";
import {FC} from "react";
import {CardContent, Typography} from "@material-ui/core";
import {StyleCard} from "./CommentCSS";

interface IProps {
    body: string
    id: string
}

const CommentItem: FC<IProps> = ({body, id}) => {
    return (
        <>
            <StyleCard variant="outlined">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Author</Typography>
                    <Typography variant="subtitle2" component="span">{body}</Typography>
                </CardContent>
            </StyleCard>
        </>
    )
};
export default CommentItem;
