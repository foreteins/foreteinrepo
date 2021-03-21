import React from 'react';

import { Header } from './components';
import { Home, Cart, About, Contacts, Cooperation } from './pages';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <script src="//code.jivosite.com/widget/aiWCGZT6QX" async></script>
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contacts" component={Contacts} exact />
        <Route path="/cooperation" component={Cooperation} exact />
      </div>
    </div>
  );
}

export default App;
