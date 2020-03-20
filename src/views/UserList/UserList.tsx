import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { UsersTable, UsersToolbar } from './components';
import { Theme } from "@material-ui/core";
import { AplicationState } from "../../store";
import * as UsersActions from "../../store/ducks/users/actions";
import { bindActionCreators, Dispatch } from "redux";
import { User } from "../../store/ducks/users/types";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(3)
    },
    content: {
        marginTop: theme.spacing(2)
    }
}));

interface StateProps {
    users: User[];
}

interface DispatchProps {
    loadRequest(): void,
}

type Props = StateProps & DispatchProps;

const UserList: React.FC<Props> = (props) => {
    useEffect(() => {
        const { loadRequest } = props;
        loadRequest();
    }, []);

    const classes = useStyles();

    const { users } = props;

    return (
        <div className={classes.root}>
            <UsersToolbar/>
            <div className={classes.content}>
                <UsersTable users={users}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state: AplicationState) => ({
    users: state.users.data
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(UsersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
