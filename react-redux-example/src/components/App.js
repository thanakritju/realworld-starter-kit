import React from 'react';
import { Provider } from "react-redux";

import Header from './Header';
import Footer from './Footer';
import Home from './Home/index';
import { store } from '../store';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Home />
      <Footer />
    </Provider>
  );
}

export default App;
