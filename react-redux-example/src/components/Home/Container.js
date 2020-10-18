import React from 'react';
import PopularTags from './PopularTags';
import ArticleList from './ArticleList';

const Container = () => {
  return (
		<div class="container page">
			<div class="row">
				<ArticleList />
				<PopularTags />
			</div>
		</div>
  );
}

export default Container;