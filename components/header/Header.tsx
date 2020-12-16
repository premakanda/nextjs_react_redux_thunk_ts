import Link from 'next/link';
import React from 'react';
import {NavWrapper, StyledToolbar} from "./HeaderCSS";
import {Container} from "../../globalStyles/globalStyles";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CustomizedSnackbars from "../snackBar/snackBar";
import {withRedux} from "../../redux/redux";

const Header = () => {
    return (
        <Container>
            <AppBar position="static">
                <StyledToolbar>
                    <Typography variant="h4">
                        PY
                    </Typography>
                    <NavWrapper>
                        <Link href={'/'}>
                            <Button variant="contained" color="secondary">
                                Home
                            </Button>
                        </Link>
                        <Link href={'/posts/new'}>
                            <Button variant="contained" color="secondary">
                                Create Post
                            </Button>
                        </Link>
                    </NavWrapper>
                </StyledToolbar>
            </AppBar>
            <CustomizedSnackbars/>
        </Container>
    )
};

export default Header;
