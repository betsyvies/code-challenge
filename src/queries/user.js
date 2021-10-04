import requestFromAPI from './index';

export const getUser = (user) => requestFromAPI(`users/${user}`);

export const getUserGists = (user) => requestFromAPI(`users/${user}/gists`);
