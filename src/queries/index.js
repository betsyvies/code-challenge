const baseUrl = 'https://api.github.com/';
export default async (url, opts = {}) => {
  const resp = await fetch(`${baseUrl}${url}`, {
    ...opts,
    headers: {
      'Content-Type': 'application/json',
      Authorization: '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',
      ...(opts || {}).headers,
    },
  });
  const data = await resp.json();

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
