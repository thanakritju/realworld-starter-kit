import React from 'react';
import { Provider } from "react-redux";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/index';
import { store } from './store';

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
