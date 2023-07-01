import React, {useContext} from 'react';
import {PostData} from "../interfaces.ts";
import {useLoaderData} from 'react-router-dom';
import Thread from "../components/Thread.tsx";
import DialogContext from "../context/DialogContext.tsx";

//TODO merge with Thread?
const ThreadItemView: React.FC = () => {
  const {openDialog} = useContext(DialogContext)
  const posts = useLoaderData() as PostData[]

  if (!posts || posts.length === 0) {
    openDialog('Error: no posts available!')
  }

  else{
    return <div className="max-w-prose mx-auto"><Thread posts={posts} title={posts[0].thread.title}/></div>
  }
};

export default ThreadItemView;