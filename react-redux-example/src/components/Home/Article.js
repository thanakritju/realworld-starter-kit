import React from 'react';

const Article = (props) => {
  return (
    <div class="article-preview">
			<div class="article-meta">
				<a href="profile.html"><img src={props.info.image} /></a>
				<div class="info">
					<a href="" class="author">{props.info.author}</a>
					<span class="date">{props.info.date}</span>
				</div>
				<button class="btn btn-outline-primary btn-sm pull-xs-right">
					<i class="ion-heart"></i> {props.heart}
				</button>
			</div>
			<a href="" class="preview-link">
				<h1>{props.preview.header}</h1>
				<p>{props.preview.description}</p>
				<span>Read more...</span>
			</a>
		</div>
  );
}

export default Article;