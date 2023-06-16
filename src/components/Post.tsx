import React from 'react';
import { format } from 'date-fns';

interface PostProps {
  username: string;
  content: string;
  date: Date;
}

const Post: React.FC<PostProps> = ({ username, content, date }) => {
  return (
    <div className="p-4 my-4 bg-white rounded-md shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-blue-600">{username}</h2>
        <span className="text-sm text-gray-500">{format(date, 'yyyy.MM.dd HH:mm')}</span>
      </div>
      <p className="mt-2 text-gray-700">{content}</p>
    </div>
  );
};

export default Post;
