import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import 'normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

const App = () => (
  <div className='app'>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/projects' component={Projects} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

export default App;
