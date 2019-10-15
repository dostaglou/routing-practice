import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

// Components for Home
import Home from './Home'
import About from './About'
import Header from './Header'
import Teachers from './Teachers'
import Courses from './Courses'

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Route exact
        path="/"
        component={Home} />
      <Route exact
        path="/about"
        render={ () => <About title="About" /> } />
      <Route exact
        path="/teachers"
        component={Teachers} />
      <Route exact
        path="/courses"
        component={Courses} />

    </div>
  </BrowserRouter>
);

export default App;
