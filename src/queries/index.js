import { request } from '@octokit/request';

export default async (url) => {
  const resp = await request(url, {
    headers: {
      authorization: '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',
    },
    org: 'octokit',
    type: 'private',
  });
  const { data } = resp;

  switch (resp.status) {
    case 401:
      return Promise.reject(new Error('Unauthorized'));
    case 403:
      return Promise.reject(new Error('Forbidden'));
    case 200:
      return data;
    default:
      return Promise.reject(new Error(`Unexpected status ${resp.status}`));
  }
};
