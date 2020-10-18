import React from 'react';
import { connect } from 'react-redux';
import Article from './Article';
import FeedToggle from './FeedToggle';
import { GET_ARTICLES } from '../../constants/actionTypes';
import agent from '../../agent';

const mapStateToProps = state => {
  return {
    articles: state.articleList.articles
	}
};

const mapDispatchToProps = dispatch => ({
  getArticles: () =>
    dispatch({ type: GET_ARTICLES, payload: agent.Articles.all()}),
});

const ArticleList = (props) => {
  if (!props.articles) {
    return (
      <div class="col-md-9">
        <FeedToggle />
        <div onClick={props.getArticles}>Loading</div>
      </div>
    )
  }

  return (
    <div class="col-md-9">
      <FeedToggle />
      {
        props.articles.map(article => {
          return <Article article={article} />
        })
      }
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);