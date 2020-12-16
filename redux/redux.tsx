import React from 'react'
import {Provider} from 'react-redux'
import store from "./store";

interface WithInitialReduxStateType {
    initialReduxState?: any
}

export const withRedux = (PageComponent, {ssr = true} = {}): React.ComponentType<WithInitialReduxStateType> => {
    return ({initialReduxState, ...props}) => {
        // const store = getOrInitializeStore(initialReduxState)
        return (
            <Provider store={store}>
                <PageComponent {...props} />
            </Provider>
        )
    };
};
