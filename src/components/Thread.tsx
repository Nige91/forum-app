import React, {useContext} from 'react';
import Post from './Post';
import {PostData} from "../interfaces.ts";
import NewPost from "./NewPost.tsx";
import PostgrestService from "../service/PostgrestService.ts";
import DialogContext from "../context/DialogContext.tsx";
import {AxiosError} from "axios";
import { Card, CardContent, Typography } from '@mui/material';
import {useLocation, useNavigate} from "react-router-dom";

interface ThreadProps {
  title: string;
  posts: PostData[];
}

const Thread: React.FC<ThreadProps> = ({ title, posts}) => {
  const {openDialog} = useContext(DialogContext)
  const navigate = useNavigate()
  const location = useLocation()

  function addPost(content: string) {
    PostgrestService.addPost(content, 'cd31450d-2d6e-4cf9-b182-85147f86d438', posts[0].thread.id).then(()=>{
      navigate(location.pathname, { replace: true })
    }).catch((error: AxiosError)=>{
      openDialog(error.toString())
    })
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h4" color="secondary">{title}</Typography>
        {posts.map(post => (
          <div className="my-4">
            <Post  key={post.id} post={post}/>
          </div>
        ))}
        <NewPost addPost={addPost} />
      </CardContent>
    </Card>
  );
};

export default Thread;
