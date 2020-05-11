import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import DraftsIcon from '@material-ui/icons/Drafts';
import NumberWrapper from '../../common/NumberWrapper';
import {genBaseStyle} from '../../../utils/consts/theme';
import {DRAFT} from '../../../utils/consts/Route';
const useStyles = makeStyles(theme => ({
  ...genBaseStyle(theme),
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: theme.palette.text.hint,
  },
  customIconRoot: {
    marginBottom: theme.spacing(1),
  },
  draftLabel: {
    display: 'flex',
    justifyContent: 'start',
  },
  customDraftIcon: {
    marginRight: theme.spacing(2),
  },
}));
const AddChapter = () => {
  const classes = useStyles({});
  return (
    <a
      href={DRAFT}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(classes.root, classes.hover)}
    >
      <div className={classes.draftLabel}>
        <DraftsIcon classes={{root: classes.customDraftIcon}} />
        <div>我的草稿</div>
      </div>
      <NumberWrapper number={6} />
    </a>
  );
};

export default AddChapter;
