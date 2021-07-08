import React, {useState, useEffect} from 'react';
import logo from './../logo.svg';
import './../App.css';
import {POSTS} from './Data/Posts.js';
import {COMMENTS} from './Data/Comments.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import {BrowserRouter as Router, Switch, Route,  Prompt} from 'react-router-dom';
import {useHistory, withRouter, Link, Redirect} from 'react-router-dom';
function Post({ match }) {
  const [posts, setPosts] = useState(POSTS);
  const [Comments, setComments] = useState(COMMENTS);
  const [mainpost, setMainPost] = useState([]);
  const [postId, setPostId] =  useState(match.params.id);
  const [realPostId, setRealPostId] =  useState(match.params.post_id);
  const [noComment, setNoComments] = useState(false);
  const fetchPost = () => {
    
  }

   useEffect(() => {    
      fetchPost();
      console.log(match.params.id);
      var id = match.params.id;
      var postt = POSTS[id];

      setMainPost([postt]);
   });



   const show_comments =  Comments.map((comment) => {
    if(comment.postId == realPostId){
      return(        
          <div className="comment-main-box" style={{height: '100%'}}>
            <div className="comment-title-box">
              <FontAwesomeIcon className="user_icon"  size='sm' icon={faUser} style={{marginTop:25, marginRight:10}}/>
                <h3 id="comment-title-txt">{comment.name}</h3>
                <p id="comment-title-txt2">{comment.email}</p>
            </div>
            <div className="comment-body-box">
                <p id="comment-body-txt">{comment.body}</p>                
            </div>                       
          </div>        
        )
     }     
   })


   const show_posts =  mainpost.map((mpost) => {
      return(
          <div className="post-main-box" style={{height: '100%'}}>
            <div>
              <div className="post-title-box">
                  <h3 id="post-title-txt">{mpost.title}</h3>
              </div>
              <div className="post-body-box">
                  <p id="post-body-txt">{mpost.body}</p>
              </div>
              <div className="comment-section" style={{minHeight:30}}>
                <h3>Comments:</h3>
                {show_comments}
                <Link to={`/user/${mpost.userId}`}><button className="more-btn" >More From Author</button></Link>
              </div>              
            </div>
          </div>
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

export default Post;
