/**
 *
 * RootContext provide the follows
 * - Global Dialog
 * - Global Theme
 * - Auth
 * TODO:
 * - I18N
 */

import React, {useState, createContext} from 'react';
import useUserHandler from '../utils/hooks/AuthHandler';
import {getCurrUser} from '../utils/Helpers';
import {Default_Theme} from '../utils/consts/theme';
export const rootContext = createContext<any>({});
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
  const [theme, setTheme] = useState(Default_Theme);
  return (
    <Provider value={{user, setUser, setGuest, dialog, setDiaLog, theme, setTheme}}>
      {children}
    </Provider>
  );
};

export default RootProvider;
