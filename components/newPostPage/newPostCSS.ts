import styled from "styled-components";
import {TextField, Button} from "@material-ui/core";


export const NewPostFormWrapper = styled('div')`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:30px;
`;export const NewPostFormIn = styled('div')`
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
`;

export const StyledTextField = styled(TextField)`
   & + &{
   margin-top:10px;
   }
`;
export const StyledBtn = styled(Button)`
   margin-top:10px!Important;
`;
