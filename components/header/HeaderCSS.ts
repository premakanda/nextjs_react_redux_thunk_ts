import styled from "styled-components";
import {Toolbar} from "@material-ui/core";
export const NavWrapper = styled('div')`
    display:flex;
    justify-content:flex-end
`;
export const StyledToolbar = styled(Toolbar)`
    justify-content:space-between;
    button + button{
    margin-left:15px;
    }
`;
