import Header from "../components/header/Header";
import * as React from "react";
import {GlobalStyle} from "../globalStyles/globalStyles";

const withLayout = (Component: React.ComponentType) => props => (
    <>
        <GlobalStyle/>
        <Header/>
        <Component {...props}/>
    </>
);

export default withLayout
