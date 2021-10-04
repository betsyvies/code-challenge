import requestFromAPI from './index';

export const getUser = (user) => requestFromAPI(`GET /users/${user}`);

export const getUserGists = (user) => requestFromAPI(`GET /users/${user}/gists`);
