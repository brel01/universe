import React, {useState, useEffect} from 'react';
import logo from './../logo.svg';
import './../App.css';
import {POSTS} from './Data/Posts.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import {BrowserRouter as Router, Switch, Route,  Prompt} from 'react-router-dom';
import {useHistory, withRouter, Link, Redirect} from 'react-router-dom';
function Home() {
  const [posts, setPosts] = useState(POSTS);

 //   useEffect(() => {    
 // 
 //   });

   const show_posts =  posts.map((post, i) => {
      return(
        <Link to={`/post/${i}/${post.id}`}>
          <div className="post-main-box" key={i} style={{height: '100%'}}>
            <div className="post-title-box">
                <h3 id="post-title-txt">{post.title}</h3>
            </div>
            <div className="post-body-box">
                <p id="post-body-txt">{post.body}</p>
            </div>
          </div>
          </Link> 
        )
   })

  return (
    <div style={{margin:0}}>      
      <div className="container"> 

        <div className="main-box">
          <header className="header">
            <Link to="/"><div className="logo"><h2 id="logoTxt">UniversApp</h2></div></Link>
          </header>

          <div className="submain-box">
            <div>              
              {show_posts}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
