import React from 'react';
import {useNavigate} from 'react-router-dom';
import {format} from 'date-fns';
import {ThreadData} from "../interfaces.ts";

interface ThreadListItemProps {
  thread: ThreadData;
}

const ThreadListItem: React.FC<ThreadListItemProps> = ({ thread }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/thread/${thread.id}`);
  };

  return (
    <div
      className="w-full px-4 py-2 mb-2 bg-white rounded-md shadow-md cursor-pointer hover:bg-gray-100"
      onClick={handleClick}
    >
      <h2 className="text-lg font-semibold text-blue-600">{thread.title}</h2>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{format(thread.date, 'PPpp')}</span>
        <span className="text-sm font-bold text-gray-700">{thread.creator.name}</span>
      </div>
    </div>
  );
};

export default ThreadListItem;