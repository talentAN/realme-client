import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {genBaseStyle} from '../../../utils/consts/theme';

const useStyles = makeStyles(theme => ({
  ...genBaseStyle(theme),
  collapsedText: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    fontSize: '14px',
  },
  customIcon: {
    marginRight: '2px',
    fontSize: '1rem',
    width: '1.2rem',
    height: '1.2rem',
  },
}));
const ShowLess = (props: any) => {
  const classes = useStyles({});
  const {setIsShowMore} = props;

  return (
    <IconButton
      classes={{root: clsx(classes.collapsedText, classes.hover)}}
      onClick={() => {
        setIsShowMore(false);
      }}
    >
      <span>收起</span>
      <ExpandLessIcon classes={{root: classes.customIcon}} />
    </IconButton>
  );
};

export default ShowLess;
