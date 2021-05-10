import { request } from 'umi';

export const getRemoteList = async () => {
  return request('http://public-api-v1.aspirantzhang.com/users')
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
};
