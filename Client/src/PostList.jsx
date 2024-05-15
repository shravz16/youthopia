import React from 'react';
import Post from './Post';

function PostList({ posts, onDelete }) {
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
