import React from 'react';
import Post from './Post';

function PostList({ posts, onDelete }) {
  console.log(posts,"ss")
  return (
    <div>
      {posts.map(post => (
        <Post
          key={post._id}
          post={post}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default PostList;
