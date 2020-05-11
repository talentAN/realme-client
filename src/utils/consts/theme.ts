import {createMuiTheme, Theme} from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import grey from '@material-ui/core/colors/grey';
import amber from '@material-ui/core/colors/amber';

export const genBaseStyle = (theme: Theme) => {
  return {
    hover: {
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  };
};

export const customOptsStyle: any = {
  customGutters: {
    padding: '0px',
  },
  customTextRoot: {
    margin: 0,
    padding: 0,
  },
  option: {
    width: '100%',
    flexGrow: 1,
    display: 'flex',
    position: 'relative',
  },
  optionLabel: {flexGrow: 1, padding: '8px 24px 8px 16px'},
  customIcon: {
    zIndex: -10,
    position: 'absolute',
    right: '20px',
    top: '8px',
    textAlign: 'center',
  },
};
const Light = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue['A200'],
      light: lightBlue['50'],
    },
    type: 'light',
    background: {
      default: grey[50],
      paper: grey[200],
    },
    text: {
      primary: '#000',
      hint: grey[700],
    },
    grey: {
      50: grey[50],
      100: grey[100],
      200: grey[200],
      300: grey[300],
      400: grey[400],
      500: grey[500],
      600: grey[600],
      700: grey[700],
      800: grey[800],
      900: grey[900],
      A100: grey['A100'],
      A200: grey['A200'],
      A400: grey['A400'],
      A700: grey['A700'],
    },
  },
  overrides: {
    MuiTabs: {
      indicator: {
        color: lightBlue['A200'],
        backgroundColor: lightBlue['A200'],
      },
    },
    MuiTab: {
      root: {
        minWidth: '100px !important',
      },
      textColorInherit: {
        '&$selected': {
          color: lightBlue['A200'],
        },
      },
    },
  },
});
const Dark = createMuiTheme({
  palette: {
    primary: {
      main: amber['A200'],
    },
    type: 'dark',
    background: {
      default: grey[50],
      paper: grey[200],
    },
  },
  overrides: {
    MuiTabs: {
      indicator: {
        color: amber['A200'],
        backgroundColor: amber['A200'],
      },
    },
    MuiTab: {
      root: {
        minWidth: '100px !important',
      },
      textColorInherit: {
        '&$selected': {
          color: amber['A200'],
        },
      },
    },
  },
});

export const Default_Theme = 'light';
export const ThemeMap = new Map([
  ['light', Light],
  ['dark', Dark],
]);
