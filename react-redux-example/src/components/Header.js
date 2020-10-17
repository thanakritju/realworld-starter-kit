import React from 'react';
import HeaderItem from './HeaderItem';

const Header = () => {
  return (
    <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="index.html">conduit</a>
      <ul class="nav navbar-nav pull-xs-right">
        <HeaderItem name="Home" />
        <HeaderItem name="New Post" icon="ion-compose" />
        <HeaderItem name="Settings" icon="ion-gear-a"/>
        <HeaderItem name="Sign up" />
      </ul>
    </div>
  </nav>
  );
}

export default Header;