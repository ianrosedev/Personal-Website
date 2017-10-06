import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import 'normalize.css';
import './App.css';

const App = () => (
  <div className='app'>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

export default App;
