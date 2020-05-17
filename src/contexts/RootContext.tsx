/**
 *
 * RootContext provide the follows
 * - Global Dialog
 * - Global Snackbar
 * - Global Theme
 * - Auth
 * TODO:
 * - I18N
 */

import React, {useState, createContext} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import useUserHandler from '../utils/hooks/AuthHandler';
import {getCurrUser, emptyFunc} from '../utils/Helpers';
import {Default_Theme} from '../utils/consts/theme';
import MuiAlert from '@material-ui/lab/Alert';

export enum Severity {
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Success = 'success',
}
export const rootContext = createContext<any>({});
const autoHideDuration = 10000;
const Default_Snackbar = {
  open: false,
  variant: Severity.Info,
  message: '',
  autoHideDuration,
  onClose: emptyFunc,
};
const {Provider} = rootContext;

const RootProvider = ({children}: any) => {
  const {user, setUser, setGuest} = useUserHandler(getCurrUser());
  // global dialog state
  const [dialog, setDiaLog]: any = useState({
    open: false,
    title: '',
    contexts: '',
    onConfirm: null,
    isCancelable: false,
  });
  const [snakebar, setSnackbar] = useState(Default_Snackbar);
  const [theme, setTheme] = useState(Default_Theme);
  const onCloseSnackbar = async () => {
    if (snakebar.onClose) {
      await snakebar.onClose();
    }
    setSnackbar(Default_Snackbar);
  };
  return (
    <Provider
      value={{user, setUser, setGuest, dialog, setDiaLog, theme, setTheme, snakebar, setSnackbar}}
    >
      {children}
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={snakebar.open}
        autoHideDuration={snakebar.autoHideDuration || Default_Snackbar.autoHideDuration}
        onClose={onCloseSnackbar}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity={snakebar.variant || Default_Snackbar.variant}
          onClose={onCloseSnackbar}
        >
          {snakebar.message || ''}
        </MuiAlert>
      </Snackbar>
    </Provider>
  );
};

export default RootProvider;
