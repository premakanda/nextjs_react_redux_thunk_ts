import styled from "styled-components";
import {Card} from "@material-ui/core";

export const CommentWrapper = styled('div')`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    padding:15px 0;
    & button a {
    text-decoration:none;
    color:inherit;
    font-weight:bold;
    }
`;
export const StyleCard = styled(Card)`
    width:50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin:5px 0;
    & span{
    word-break: break-word;
    }
`;
