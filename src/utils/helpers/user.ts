import {User} from '../../types';

export const isGuest = (user: User) => user.id === 'guest';
