import React, { useState } from 'react';
import axios from 'axios';
import './styles/CreatePostForm.css'; 
function CreatePostForm({ posts,setPosts,onCreate }) {
  
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreatePost = async () => {
    try {
      const response = await axios.post('http://localhost:3000/forums', {
        title,
        likes:0,
        youth:JSON.parse(sessionStorage.getItem("user")),
        content
      });
      
      console.log(posts)
      onCreate(response.data);
      setTitle('');
      setContent('');
      setShowForm(false);
      window.location.href='/discuss'
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  if (!showForm) {
    return (
      <button className="open-form-button" onClick={() => setShowForm(true)}>
        Create a Post
      </button>
    );
  }

  return (
    <div className="create-post">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleCreatePost}>
        Submit Post
      </button>
      <button onClick={() => setShowForm(false)}>Cancel</button>
    </div>
  );
}

export default CreatePostForm;
