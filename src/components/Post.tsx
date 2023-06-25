import React from 'react';
import { format } from 'date-fns';
import {PostData} from "../interfaces.ts";

interface PostProps {
  post: PostData
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="p-4 my-4 bg-white rounded-md shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-blue-600">{post.creator.name}</h2>
        <span className="text-sm text-gray-500">{format(post.date, 'yyyy.MM.dd HH:mm')}</span>
      </div>
      <p className="mt-2 text-gray-700">{post.content}</p>
    </div>
  );
};

export default Post;
