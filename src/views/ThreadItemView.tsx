import React, {useContext, useEffect, useState} from 'react';
import {PostData} from "../interfaces.ts";
import { useParams } from 'react-router-dom';
import PostgrestService from "../service/PostgrestService.ts";
import Thread from "../components/Thread.tsx";
import DialogContext from "../context/DialogContext.tsx";
import LoadingSpinner from "../components/LoadingSpinner.tsx";

//TODO merge with Thread?
const ThreadItemView: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([])
  const [loading, setLoading] = useState(true)
  const { threadId } = useParams();
  const {openDialog} = useContext(DialogContext)

  useEffect(() => {
    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function loadPosts() {
    if (typeof threadId === 'string') {
      PostgrestService.getPosts(threadId).then(posts => {
        if (!posts || posts.length === 0) {
          openDialog('Error: no posts available!')
        } else {
          setPosts(posts)
          setLoading(false)
        }
      })
    }
  }

  function handlePostAdded(){
    setLoading(true)
    loadPosts()

  }

  if(loading){
    return <LoadingSpinner/>
  }
  else{
    return <div className="max-w-prose mx-auto"><Thread posts={posts} title={posts[0].thread.title} onPostAdded={handlePostAdded}/></div>
  }
};

export default ThreadItemView;