import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'
import 'react-toastify/dist/ReactToastify.css';
import { faThumbsUp, faComment, faTrash } from '@fortawesome/free-solid-svg-icons';
import './styles/Post.css';
import axios from 'axios';

TimeAgo.addDefaultLocale(en)

const timeAgo = new TimeAgo('en-US');

function Post({ post, onDelete }) {
  
  const [p,setP]=useState(post)
  const curr=JSON.parse(sessionStorage.getItem('user'));
  const [comment,setComment] = useState([]);

  const handleLikeClick = async () => {
    const response = await axios.put('http://localhost:3000/forums/'+p.post_id, {
     likes:p.likes+1
    });
    const resp=await response
    setP({...p,likes:p.likes+1})
  };
  console.log(comment)
const handleComment =async () =>{
  
  const data={
    youth:JSON.parse(sessionStorage.getItem('user')),
    comment:comment,
    post_id:post.post_id
    
  }
  const options={
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify(data)
}
  const resp=await fetch('http://localhost:3000/comment',options)
  const comments=p.comment;
  comments.push(data)
  setP(prev=>({
    ...prev,
    comment:comments
  }))
  console.log(p)
 
}
  const handleDeleteClick = () => {

    onDelete(post._id);
  };
  //post.youth.email === curr.email
  return(
    <div className="post">
      <div className='title-and-time'>
        <h5>Posted by: {p.youth.userName}</h5>
        <p id='posted-time'>{timeAgo.format(Date.now())}</p>
      </div>

    <div className="post-content">

            <h3>{p.title}</h3>

        
        <p id='post-desc-content'>{p.content}</p>
        
        {p.comment.map((commentObj, index) => (
          
            <div key={index} className='commentE'>
                <p id="commenter-name">{commentObj.youth.userName} </p>
                <p id='commenter-comment'>{commentObj.comment}</p>
            </div>
        ))}
    </div>

    <div className="post-interactions">
        <button onClick={handleLikeClick} className="like-button">
            <FontAwesomeIcon icon={faThumbsUp} />
            <span className="likes-count">{p.likes}</span>
        </button>
        {true && (  // Replace 'true' with your actual condition for showing the delete button
            <button onClick={handleDeleteClick} className="delete-button">
                <FontAwesomeIcon icon={faTrash} />
            </button>
        )}
    </div>
    <div id='comment-bar-and-button'>
            <input
                type="text"
                className="comment-bar"
                placeholder="Add a comment"
                onChange={(event) => setComment(event.target.value)}
            />
            <button onClick={handleComment} id='comment-btn-discussion'>
                <FontAwesomeIcon icon={faComment} />
            </button>
        </div>
</div>

  )}

export default Post;
