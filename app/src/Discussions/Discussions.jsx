import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import CreatePost from './CreatePostForm';
import PostList from './PostList';
import Navbar from '../LandingPage/Navbar'
import "./App.css";

function Discussions() {
  const [posts, setPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://3.22.180.190:3000/forums');
        setPosts(response.data.data);
        console.log(response,"setting posts")
        setDisplayedPosts(response.data.data); // Initialize displayed posts
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const handleSearch = (query) => {
    const filteredPosts = posts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setDisplayedPosts(filteredPosts);
  };

  return (
    <div>
      <Navbar></Navbar>
    <div className="postcontainer">
      <h1>Discussion Forum</h1>
      <SearchBar onSearch={handleSearch} />
      <PostList posts={displayedPosts} onDelete={(id) => {
        const updatedPosts = posts.filter(post => post._id !== id);
        setPosts(updatedPosts);
        setDisplayedPosts(updatedPosts);
      }} />
      <CreatePost onCreate={(newPost) => {
        const updatedPosts = [...posts, newPost];
        setPosts(updatedPosts);
        setDisplayedPosts(updatedPosts);
      }} />
    </div>
    </div>
  );
}

export default Discussions;
