import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import store from '../core/store';

const props = require('./server.json');

const superagent = superagentPromise(_superagent, global.Promise);

// const encode = encodeURIComponent;
const responseBody = (res) => 
  //TODO: mark ajax end
   res.body
;

const failure = (error) => {
  // TODO: mark ajax end
  // TODO: handle notification error
  console.error(error);
  return error;
};

const tokenPlugin = (req) => {
  const state = store.getState();
  // TODO: set bearer jwt token
  // TODO: mark ajax begin
};

const Api = () => {
  const env = process.env.NODE_ENV;
  return env === 'development' ? props.dev : props.prod;
};

const requests = {
  del: async url =>
    superagent.del(`${Api()}${url}`)
      .use(tokenPlugin)
      .then(responseBody)
      .catch(failure),
  get: async url =>
    superagent
      .get(`${Api()}${url}`)
      .use(tokenPlugin)
      .then(responseBody)
      .catch(failure),
  put: async (url, body) =>
    superagent
      .put(`${Api()}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody)
      .catch(failure),
  post: async (url, body) =>
    superagent
      .post(`${Api()}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody)
      .catch(failure)
};

const Offer = {
  list: async () => requests.get('offer'),
  detail: async offerId => requests.get(`offer/${offerId}`)
};

const Course = {};

const University = {};

export default {
  Offer,
  Course,
  University
};
