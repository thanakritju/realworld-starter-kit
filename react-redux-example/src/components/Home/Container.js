import React from 'react';
import PopularTags from './PopularTags';
import Article from './Article';
import FeedToggle from './FeedToggle';

const Container = () => {
  return (
	<div class="container page">
		<div class="row">
			<div class="col-md-9">
				<FeedToggle />
				<Article 
					info={{ image: "http://i.imgur.com/Qr71crq.jpg", author: "Eric Simons", date: "January 20th"}}
					heart={29}
					preview={{ header: "How to build webapps that scale", description: "This is the description for the post."}}
					/>
				<Article 
					info={{ image: "http://i.imgur.com/N4VcUeJ.jpg", author: "Albert Pai", date: "January 20th"}}
					heart={32}
					preview={{ header: "The song you won't ever stop singing. No matter how hard you try.", description: "This is the description for the post."}}
					/>
			</div>
			<PopularTags />
		</div>
	</div>
  );
}

export default Container;