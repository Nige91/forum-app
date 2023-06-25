import React, {useContext} from 'react';
import Post from './Post';
import {PostData} from "../interfaces.ts";
import NewPost from "./NewPost.tsx";
import PostgrestService from "../service/PostgrestService.ts";
import DialogContext from "../context/DialogContext.tsx";
import {AxiosError} from "axios";

interface ThreadProps {
  title: string;
  posts: PostData[];
  onPostAdded: () => void
}

const Thread: React.FC<ThreadProps> = ({ title, posts, onPostAdded}) => {
  const {openDialog} = useContext(DialogContext)
  function addPost(content: string) {
    PostgrestService.addPost(content, '26830081-177e-45e4-abe4-9a224ed09ec7', posts[0].thread.id).then(()=>{
      onPostAdded();
    }).catch((error: AxiosError)=>{
      //TODO test
      openDialog(error.toString())
    })
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4 my-4 bg-gray-100 rounded-md shadow-md">
      <h1 className="mb-4 text-2xl font-bold text-blue-700">{title}</h1>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
      <NewPost addPost={addPost} />
    </div>
  );
};

export default Thread;
