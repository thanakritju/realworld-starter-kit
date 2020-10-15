import React from 'react';

const FeedToggleItem = ({name, isActive}) => {
  return (
    <li class="nav-item">
      <a class={isActive ? "nav-link active": "nav-link disabled"} href="">{name}</a>
    </li>
  );
}

export default FeedToggleItem;