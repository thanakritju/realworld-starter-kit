import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = "https://conduit.productionready.io/api"

const responseBody = res => res.body;

const Articles = {
  all: () =>
    superagent.get(`${API_ROOT}/articles`).then(responseBody)
}

export default {
  Articles
}