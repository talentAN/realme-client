import React, {useContext} from 'react';
import {rootContext} from '../../contexts/RootContext';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import {StickWidth} from '../../utils/Layout';
import NumberWrapper from '../common/NumberWrapper';
import {StickNavList} from '../../utils/consts/PageConfig';
import {genBaseStyle} from '../../utils/consts/theme';
import {isGuest} from '../../utils/helpers/user';

const NavList = () => {
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
    navItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      textDecoration: 'none',
      color: theme.palette.text.hint,
    },
    iconLabel: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'first',
    },
    customIcon: {
      height: '18px',
      marginRight: '10px',
    },
    navItemNum: {
      width: '50px',
      height: '20px',
      border: 'solid',
      borderWidth: '.5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.text.primary,
    },
  }))();

  if (isGuest(user)) {
    return <></>;
  }
  return (
    <Card classes={{root: classes.root}}>
      {StickNavList.map((config: any, index: number) => {
        const {label, hasNum, icon, linkTo} = config;
        return (
          <a
            key={index}
            className={clsx(classes.navItem, classes.hover)}
            href={linkTo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={classes.iconLabel}>
              <div className={classes.customIcon} dangerouslySetInnerHTML={{__html: icon}}></div>
              <div>{label}</div>
            </div>
            {hasNum && <NumberWrapper number={6} />}
          </a>
        );
      })}
    </Card>
  );
};

export default NavList;
