import React, { useState } from 'react';

interface NewPostProps {
  addPost: (content: string) => void;
}

const NewPost: React.FC<NewPostProps> = ({ addPost }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (content) {
      addPost(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 my-4 bg-white rounded-md shadow-lg">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 mb-4 text-gray-700 border border-gray-300 rounded-md"
        placeholder="Write your post here..."
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Post</button>
    </form>
  );
};

export default NewPost;
