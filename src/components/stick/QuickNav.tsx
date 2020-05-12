import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import {genBaseStyle} from '../../utils/consts/theme';
import NumberWrapper from '../common/NumberWrapper';
// TODO: fuck, 所有的collect， like都要修改数据表了
const QuickNav = (props: any) => {
  const classes = makeStyles(theme => ({
    ...genBaseStyle(theme),
    navItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
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
      marginRight: theme.spacing(2),
    },
  }))();
  const {label, query, icon, linkTo} = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (query) {
      query().then((data: any) => {
        setCount(Number.parseInt(data.count));
      });
    }
  }, []);

  return (
    <a
      className={clsx(classes.navItem, classes.hover)}
      href={linkTo}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={classes.iconLabel}>
        <div className={classes.customIcon} dangerouslySetInnerHTML={{__html: icon}}></div>
        <div>{label}</div>
      </div>
      {query && <NumberWrapper number={count} />}
    </a>
  );
};

export default QuickNav;
