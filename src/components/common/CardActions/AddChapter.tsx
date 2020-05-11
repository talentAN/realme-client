import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import PostAddIcon from '@material-ui/icons/PostAdd';
import {genBaseStyle} from '../../../utils/consts/theme';
import {WRITE} from '../../../utils/consts/Route';
const useStyles = makeStyles(theme => ({
  ...genBaseStyle(theme),
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.text.hint,
  },
  customIconRoot: {
    marginBottom: theme.spacing(1),
  },
}));
const AddChapter = () => {
  const classes = useStyles({});
  return (
    <a
      href={WRITE}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(classes.root, classes.hover)}
    >
      <PostAddIcon classes={{root: classes.customIconRoot}} />
      <div>写文章</div>
    </a>
  );
};

export default AddChapter;
