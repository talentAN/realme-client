import {Theme} from '@material-ui/core/styles';
import {genBaseStyle} from '../utils/consts/theme';
import {NavWidth, NavHeight, PopOverRootWidth, PopOverElementHeight} from '../utils/Layout';
import Logo from '../logo.svg';

const genNavTheme = (theme: Theme) => {
  return {
    ...genBaseStyle(theme),
    root: {
      maxHeight: NavHeight,
      position: 'fixed',
      width: '100%',
      zIndex: 100,
    },
    muiRoot: {
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      justifyContent: 'center',
      height: NavHeight,
    },
    toolBar: {
      margin: 'auto',
      width: '100%',
      maxWidth: NavWidth,
      height: `${NavHeight} !important`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    logo: {
      background: `url(${Logo}) no-repeat center`,
      width: '80px',
      height: '48px',
    },
    tabs: {
      backgroundColor: theme.palette.background.default,
    },
    searchRoot: {
      padding: theme.spacing(0, 1),
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      width: 300,
    },
    customIconRoot: {
      padding: 0,
    },
    navAndSearch: {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    divider: {
      // height: 28,
      margin: 4,
    },
    customTabRoot: {
      minWidth: '20px',
      marginRight: '20px',
    },
    customMenu: {
      top: `${NavHeight} !important`,
      width: PopOverRootWidth,
    },
    customMenuItem: {
      fontSize: '14px',
      lineHeight: 1,
      height: PopOverElementHeight,
      minHeight: PopOverElementHeight,
    },
    customListItemIcon: {
      minWidth: 0,
      marginRight: theme.spacing(2),
      color: 'currentColor',
    },
  };
};

export default genNavTheme;
