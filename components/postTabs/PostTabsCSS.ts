import styled from "styled-components";
import {Card} from "@material-ui/core";

export const TabWrapper = styled('div')`
    height:100%;
`;
export const StyleCard = styled(Card)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & h3{
    word-break: break-word;
    }
`;
