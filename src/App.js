import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import Post from './components/Post.js';
import User from './components/User.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";

function App() {
  return (
    <Router>
      <div style={{height:'100%'}}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/post/:id/:post_id" component={Post} />
          <Route path="/user/:id" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
