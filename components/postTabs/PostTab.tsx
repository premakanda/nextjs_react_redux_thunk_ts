import * as React from "react";
import {FC} from "react";
import Link from "next/link";
import {TabWrapper, StyleCard} from "./PostTabsCSS";
import {Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";

interface IProps {
    title: string
    id: string
}

const PostTab: FC<IProps> = ({title, id}) => {
    return (
        <TabWrapper>
            <StyleCard variant="outlined">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>test</Typography>
                    <Typography variant="h5" component="h3">{title}</Typography>
                </CardContent>
                <CardActions>
                    <Link href={'/posts/[id]'} as={`/posts/${id}`}>
                        <Button size="small" variant="outlined" color="primary">
                            Learn More
                        </Button>
                    </Link>
                </CardActions>
            </StyleCard>
        </TabWrapper>
    )
};
export default PostTab;
