import React, {useContext} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';

import {makeStyles} from '@material-ui/styles';
import {Avatar, Theme, Typography} from '@material-ui/core';
import {User} from "firebase/app";
import {AuthContext} from "../../../../../../Auth";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = (props: ProfilePropTypes) => {
  const { className, ...rest } = props;
  const currentUser = useContext<User | null>(AuthContext);
  const classes = useStyles();

  const user = {
    name: currentUser?.displayName,
    avatar: currentUser?.photoURL ?? undefined,
    bio: 'Brain Director'
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        src={user.avatar}
        to="/settings"
      />
      <Typography
        className={classes.name}
        variant="h4"
      >
        {user.name}
      </Typography>
      <Typography variant="body2">{user.bio}</Typography>
    </div>
  );
};

type ProfilePropTypes = {
  className?: string
};

export default Profile;
