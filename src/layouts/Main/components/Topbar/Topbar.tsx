import React, {MouseEventHandler, useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {AppBar, Badge, Hidden, IconButton, Theme, Toolbar} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import firebase from 'firebase/app';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        boxShadow: 'none'
    },
    flexGrow: {
        flexGrow: 1
    },
    signOutButton: {
        marginLeft: theme.spacing(1)
    }
}));

const Topbar = (props: TopbarPropTypes) => {
    const {className, onSidebarOpen, ...rest} = props;

    const classes = useStyles();

    const [notifications] = useState([]);

    const handleSignOut = async (event: any) => {
        event.preventDefault();
        await firebase.auth().signOut();
    };

    return (
        <AppBar
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Toolbar>
                <RouterLink to="/">
                    <img
                        alt="Logo"
                        src="/images/logos/logo--white.svg"
                    />
                </RouterLink>
                <div className={classes.flexGrow}/>
                <Hidden mdDown>
                    <IconButton color="inherit">
                        <Badge
                            badgeContent={notifications.length}
                            color="primary"
                            variant="dot"
                        >
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                    <IconButton
                        className={classes.signOutButton}
                        color="inherit"
                        onClick={handleSignOut}
                    >
                        <InputIcon/>
                    </IconButton>
                </Hidden>
                <Hidden lgUp>
                    <IconButton
                        color="inherit"
                        onClick={onSidebarOpen}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

type TopbarPropTypes = {
    className?: string,
    onSidebarOpen?: MouseEventHandler<any> | undefined
};

export default Topbar;
