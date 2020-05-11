import {genBaseStyle} from '../utils/consts/theme';
import Logo from '../logo.svg';

const genLoginStyle = (theme: any) => ({
  ...genBaseStyle(theme),
  Logo: {
    width: '100%',
    height: '80px',
    background: `no-repeat center url(${Logo})`,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    color: theme.palette.text.primary,
  },
  customGrid: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default genLoginStyle;
