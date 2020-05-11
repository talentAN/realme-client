const endpoint = 'http://localhost:8000';

const prefix = [endpoint].join('');
const genURL = (short: string) => `${prefix}/${short}`;

export const POST_GETALLBOOKS = ':// get all books';
export const POST_USER = genURL(`user`);
export const POST_RECOMMENDS = genURL(``);
export const POST_HOTS = genURL(`hot`);
export const POST_FOLLOW = genURL(`follow`);
export const CHAPTER = genURL(`chapter`);
export const DRAFT = genURL(`draft`);
