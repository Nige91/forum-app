import React, {useEffect, useState} from 'react';
import FirebaseService from "../firebase/FirebaseService.ts";
import {PostData} from "../interfaces.ts";
import Post from "../components/Post.tsx";
import { useParams } from 'react-router-dom';

const ThreadItemView: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([])
  const { threadId } = useParams();
    useEffect(() => {
      if (typeof threadId === 'string') {
        FirebaseService.getPosts(threadId).then(posts => {
          setPosts(posts)
          console.log('test')
        })
      }
    }, [])

  return posts.map(post=><Post post={post}/>)
};

export default ThreadItemView;