import React, {useContext} from 'react';
import {rootContext} from '../../contexts/RootContext';
import Card from '@material-ui/core/Card';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import {StickWidth} from '../../utils/Layout';
import {AuthorSvg} from '../../utils/Svg';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {genBaseStyle} from '../../utils/consts/theme';
import {isGuest} from '../../utils/helpers/user';

const AuthCenter = () => {
  const {user} = useContext(rootContext);
  const classes = makeStyles(theme => ({
    ...genBaseStyle(theme),
    root: {
      width: StickWidth,
      display: 'flex',
      flexDirection: 'column',
      padding: '23px',
      marginBottom: '10px',
      backgroundColor: theme.palette.background.default,
    },
    authCenter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
      color: theme.palette.text.hint,
    },
    autoIconContainer: {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
    },
    authIcon: {
      marginRight: '10px',
    },
    customIconRoot: {
      marginBottom: '5px',
    },
    customDivder: {
      marginBottom: '10px',
    },
    actionNumContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    actionContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: theme.palette.text.hint,
    },
    actionItem: {
      marginBottom: '5px',
    },
    customVerticalDivder: {
      height: '60px !important',
    },
  }))();

  if (isGuest(user)) {
    return <></>;
  }
  return (
    <Card classes={{root: classes.root}}>
      <a href="/creator" target="_blank" className={clsx(classes.authCenter, classes.hover)}>
        <div className={classes.autoIconContainer}>
          <div className={classes.authIcon} dangerouslySetInnerHTML={{__html: AuthorSvg}}></div>
          <div>创作者中心</div>
        </div>
        <ChevronRightIcon />
      </a>
      <Divider classes={{root: classes.customDivder}} />
      <div className={classes.actionNumContainer}>
        <a href="/creator" target="_blank" className={clsx(classes.actionContainer, classes.hover)}>
          <div className={classes.actionItem}>昨日阅读数</div>
          <div className={classes.actionItem}>34</div>
          <div>较前日 26.90%</div>
        </a>
        <Divider classes={{root: classes.customVerticalDivder}} orientation="vertical" />
        <a href="/creator" target="_blank" className={clsx(classes.actionContainer, classes.hover)}>
          <div className={classes.actionItem}>与你同在</div>
          <div className={classes.actionItem}>34</div>
          <div>较前日 26.90%</div>
        </a>
      </div>
    </Card>
  );
};

export default AuthCenter;
