import { GET_ARTICLES } from "../constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload.articles
      };
    default:
      return state;
  }
};