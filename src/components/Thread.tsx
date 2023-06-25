import React from 'react';
import Post from './Post';
import {PostData} from "../interfaces.ts";

interface ThreadProps {
  title: string;
  posts: PostData[];
}

export const Thread: React.FC<ThreadProps> = ({ title, posts }) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 my-4 bg-gray-100 rounded-md shadow-md">
      <h1 className="mb-4 text-2xl font-bold text-blue-700">{title}</h1>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
