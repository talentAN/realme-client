import React, {FC} from 'react';
import {Route, Switch} from 'react-router-dom';
import {useTheme} from '@material-ui/core/styles';
import Nav from '../../components/Nav';
import Landing from './Landing';
import Drafts from '../Drafts';
import DraftEditor from '../DraftEditor';
import About from '../About';
import Page404 from '../Page404';
import * as route from '../../utils/consts/Route';
const MainContainer: FC = () => {
  const theme = useTheme();
  return (
    <>
      <Nav />
      <div
        style={{
          flexGrow: 1,
          marginTop: `${theme.spacing(6)}px`,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Switch>
          <Route path={route.DRAFT} component={Drafts} />
          <Route path="/draft/:draftID/edit" component={DraftEditor} />
          <Route path={route.WRITE} component={DraftEditor} />
          <Route path={route.ABOUT} component={About} />
          <Route exact path={route.ROOT} component={Landing} />
          <Route component={Page404} />
        </Switch>
      </div>
    </>
  );
};

export default MainContainer;
