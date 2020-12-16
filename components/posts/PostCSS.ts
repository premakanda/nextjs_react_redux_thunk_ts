import styled from "styled-components";

export const PostWrapper = styled('div')`
    padding-top:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    & h2{
    word-break: break-word;
    }
`;
export const ChangeFormWrapper = styled('div')`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:50%;
    div{
    width:100%;
    }
`;
export const StyledPost = styled('div')`
    display:flex;
    flex-direction:column;
    width:50%;
`;
export const BtnWrapper = styled('div')`
    width:50%;
    display:flex;
    flex-direction:flex-start;
    padding-top:15px;
    button + button{
    margin-left:10px;
    }
`;
