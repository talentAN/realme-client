import React, {useContext, useState} from 'react';
import {rootContext} from '../contexts/RootContext';
import {requestContext} from '../contexts/request';
import {Redirect, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import genLoginStyle from './Login.style';
import {makeStyles} from '@material-ui/core/styles';
import * as route from '../utils/consts/Route';
const MD5 = require('md5-es').default;

const Register: React.FC = () => {
  const {setDiaLog, user} = useContext(rootContext);
  const {User} = useContext(requestContext);
  const {id} = user;
  const classes = makeStyles(theme => genLoginStyle(theme) as any)() as any;
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [pwdConfirm, setPwdConfirm] = useState('');

  const checkRegisterNotValid = (): boolean => {
    return account === '' || account === 'guest' || password === '' || pwdConfirm !== password;
  };

  const onRegister = () => {
    if (checkRegisterNotValid()) {
      setDiaLog({
        open: true,
        content: '用户名和密码不能为空, 且两次密码输入必须相同',
        onConfirm: null,
      });
    } else {
      User.register({account, password: MD5.hash(password)}).then((data: any) => {
        if (data.status === 'success') {
          setDiaLog({
            open: true,
            content: '注册成功, 请登录',
            onConfirm: () => {
              window.location.pathname = route.LOGIN;
            },
          });
        } else {
          setDiaLog({
            open: true,
            content: '注册失败，用户名重复，请重新注册',
            onConfirm: () => {
              setAccount('');
            },
          });
        }
      });
    }
  };

  if (id !== 'guest') {
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
            id="username"
            label="用户名"
            name="username"
            autoComplete="username"
            value={account}
            onChange={e => {
              setAccount(e.target.value);
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="pwdConfirm"
            label="确认密码"
            type="password"
            id="pwdConfirm"
            value={pwdConfirm}
            onChange={e => {
              setPwdConfirm(e.target.value);
            }}
            autoComplete="current-password"
          />
          <Button
            classes={{root: classes.hover}}
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={onRegister}
          >
            注册
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to={route.ABOUT} className={classes.link}>
                千万不要忘记密码！
              </Link>
            </Grid>
            <Grid item>
              <Link to={route.LOGIN} className={classes.link}>
                返回登陆
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Register;
