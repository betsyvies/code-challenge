
import requestFromAPI from './index';

export const getUserGists = (user) => requestFromAPI(`GET /users/${user}/gists`);

