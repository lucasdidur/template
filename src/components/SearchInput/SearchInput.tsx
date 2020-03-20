import React from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Input, Paper, Theme } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: '4px',
    alignItems: 'center',
    padding: theme.spacing(1),
    display: 'flex',
    flexBasis: 420
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  input: {
    flexGrow: 1,
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.05px'
  }
}));

const SearchInput: React.FC<SearchInputPropTypes> = props => {
  const { className, onChange, style, placeholder, ...rest } = props;

  const classes = useStyles();

  return (
    <Paper
      {...rest}
      className={clsx(classes.root, className)}
      style={style}
    >
      <SearchIcon className={classes.icon} />
      <Input
        {...rest}
        className={classes.input}
        disableUnderline
        placeholder={placeholder}
        onChange={onChange}
      />
    </Paper>
  );
};

interface SearchInputPropTypes {
  className?: string,
  onChange?: (event: object) => void,
  style?: object,
  placeholder? : string
}

export default SearchInput;
