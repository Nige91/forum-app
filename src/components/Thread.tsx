import React, {useContext} from 'react';
import Post from './Post';
import {PostData} from "../interfaces.ts";
import NewPost from "./NewPost.tsx";
import PostgrestService from "../service/PostgrestService.ts";
import DialogContext from "../context/DialogContext.tsx";
import {AxiosError} from "axios";
import { Button, Card, CardContent, Typography } from '@mui/material';

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
