import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import AddCommentIcon from '@material-ui/icons/AddComment';
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
      <AddCommentIcon classes={{root: classes.customIconRoot}} />
      <div>写想法</div>
    </a>
  );
};

export default AddChapter;
