import mockFetch from './index';

const userGists = [{
  created_at: '2020-06-23T20:30:15Z',
  description: 'Python news',
  files: {
    'news.py': {
      filename: 'news.py',
      language: 'Python',
      raw_url: 'https://gist.githubusercontent.com/pierina/653af6587b1768f07205f8c9c224a7b0/raw/fef4f518c9a23f152944919dea7fefcd4261af49/news.py',
      size: 18,
      type: 'text/plain',
    },
  },
  id: '653af6587b1768g09205f8c9c224a7b0',
  node_id: 'MDQ6R2lzdDY1R2FmNjU4N2IxNzY4ZjA3MjA1ZjhjOWMyMjRhN2Iw',
  updated_at: '2017-12-29T23:05:21Z',
  url: 'https://api.github.com/gists/653af6587b1768f07205f8c9c224a7b0',
}];

const user = { avatar_url: 'https://avatars.githubusercontent.com/u/110297?v=4', name: 'Pierina Rodriguez' };

export const mockGetUser = (status) => mockFetch(status, user);

export const mockGetUserGists = (status) => mockFetch(status, userGists);
