import React, {useContext, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Redirect, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {rootContext} from '../contexts/RootContext';
import {requestContext} from '../contexts/request';
import * as route from '../utils/consts/Route';
import {isGuest} from '../utils/helpers/user';
import genLoginStyle from './Login.style';

const MD5 = require('md5-es').default;

const Login: React.FC = () => {
  const {User} = useContext(requestContext);
  const {user, setUser, setDiaLog} = useContext(rootContext);
  const classes = makeStyles(theme => genLoginStyle(theme) as any)() as any;
  const [account, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const _checkLoginNotValid = (): boolean => {
    return account === '' || account === 'guest' || password === '';
  };

  const onLogin = () => {
    if (_checkLoginNotValid()) {
      setDiaLog({
        open: true,
        content: '用户名和密码不能为空',
        onConfirm: null,
      });
    } else {
      User.login({account, password: MD5.hash(password)}).then((data: any) => {
        if (data) {
          setUser(data);
        } else {
          setDiaLog({
            open: true,
            content: '用户名和密码不匹配，请重新登陆',
            onConfirm: () => {
              setPassword('');
            },
          });
        }
      });
    }
  };

  if (!isGuest(user)) {
    return <Redirect to={route.ROOT} />;
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.Logo}></div>
        <Typography component="h1" variant="h5">
          LifLib
        </Typography>
        <form className={classes.form} noValidate method="post">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="用户名"
            name="username"
            autoComplete="email"
            value={account}
            onChange={e => {
              setUsername(e.target.value);
            }}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="密码"
            type="password"
            id="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            autoComplete="current-password"
          />
          <Button
            classes={{root: classes.hover}}
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={onLogin}
          >
            登陆
          </Button>
          <Grid container>
            <Grid item xs classes={{root: classes.customGrid}}>
              <Link to={route.ABOUT} className={classes.link}>
                千万不要忘记密码！
              </Link>
            </Grid>
            <Grid item>
              <Link to={route.ROOT} className={classes.link}>
                没有账户?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
