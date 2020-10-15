import React from 'react';
import FeedToggleItem from './FeedToggleItem';

const FeedToggle = () => {
  return (
    <div class="feed-toggle">
      <ul class="nav nav-pills outline-active">
        <FeedToggleItem name="Your Feed" isActive={false} />
        <FeedToggleItem name="Your Feed" isActive={true} />
      </ul>
    </div>
  );
}

export default FeedToggle;