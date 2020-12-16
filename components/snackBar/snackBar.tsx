import React, {useEffect} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {AppState} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {Statuses} from "../../helpers/types";
import {withRedux} from "../../redux/redux";
import {closeSnack} from "../../redux/actionCreators";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CustomizedSnackbars = () => {
    const status = useSelector((state: AppState) => state.root.status);
    const dispatch= useDispatch();
    const showSnack = useSelector((state: AppState) => state.root.showSnack);
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        if (showSnack){
            setOpen(true);
            dispatch(closeSnack())
        }
    }, [status]);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div>
            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={status === Statuses.success ? 'success' : 'error'}>
                    {status === Statuses.success ? 'success' : 'error'}
                </Alert>
            </Snackbar>
        </div>
    );
};
export default withRedux(CustomizedSnackbars);
