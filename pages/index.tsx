import * as React from "react";
import {withRedux} from "../redux/redux";
import Home from "./home";

const Index = () => {
    return (
        <>
            <Home/>
        </>
    )
};
export default withRedux(Index);
