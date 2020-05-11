export type User = {
  id: string;
  token?: string;
};

export interface AuthContextInterface {
  auth: User;
  setAuth: (userAuth: User) => void;
  setGuest: () => void;
}

export type BookProps = {
  bookConfig: BookConfig;
  onBookChange?: Function;
};

export interface BookConfig {
  id: string;
  author: string;
  title: string;
  abstract: string;
  coverImg: any;
  chapters: any[];
}
