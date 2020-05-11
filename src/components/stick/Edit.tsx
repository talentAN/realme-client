//TODO: Global Tooltip on Add note
import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import {rootContext} from '../../contexts/RootContext';
import {isGuest} from '../../utils/helpers/user';
import {StickWidth} from '../../utils/Layout';
import {genBaseStyle} from '../../utils/consts/theme';
import AddChapter from '../common/CardActions/AddChapter';
import AddIdear from '../common/CardActions/AddIdear';
import MyDrafts from '../common/CardActions/MyDrafts';
const Edit = () => {
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
    write: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
    },
    customDivder: {
      marginBottom: '10px',
    },
  }))() as any;
  return (
    <Card classes={{root: classes.root}}>
      <div className={classes.write}>
        <AddChapter />
        <AddIdear />
      </div>
      {!isGuest(user) && (
        <>
          <Divider classes={{root: classes.customDivder}} />
          <MyDrafts />
        </>
      )}
    </Card>
  );
};

export default Edit;
