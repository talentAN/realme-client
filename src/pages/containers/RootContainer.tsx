import React, {useContext} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {rootContext} from '../../contexts/RootContext';
import Login from '../Login';
import Register from '../Register';
import Main from './Main';
import GlobalDialog from '../../components/common/GlobalDialog';
import {ThemeProvider} from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeMap} from '../../utils/consts/theme';
import * as route from '../../utils/consts/Route';
function RootContainer() {
  const {dialog, theme} = useContext(rootContext);
  return (
    <ThemeProvider theme={ThemeMap.get(theme)!}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path={route.LOGIN} component={Login} />
          <Route path={route.REGISTER} component={Register} />
          <Route path={route.ROOT} component={Main} />
        </Switch>
        <GlobalDialog {...dialog} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default RootContainer;
