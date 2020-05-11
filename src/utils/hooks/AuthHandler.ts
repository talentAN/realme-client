import {useState} from 'react';
import {User} from '../../types';
import {GUEST} from '../consts/index';
import {key_user} from '../Helpers';

const useUserHandler = (initialState: User) => {
  const [user, _setUser] = useState(initialState);
  const setUser = (user: User) => {
    window.localStorage.setItem(key_user, JSON.stringify(user));
    _setUser(user);
  };

  const setGuest = () => {
    setUser(GUEST);
  };

  return {
    user,
    setUser,
    setGuest,
  };
};

export default useUserHandler;
