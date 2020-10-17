import request from 'superagent';

const API_ROOT = "https://conduit.productionready.io/api"

const responseBody = res => res.body;

const Articles = {
  all: () =>
    request.get(`${API_ROOT}/articles`).then(responseBody)
}

export default {
  Articles
}