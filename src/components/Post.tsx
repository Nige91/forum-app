import React from 'react';
import { format } from 'date-fns';
import {PostData} from "../interfaces.ts";
import {Card, CardContent, Grid, Typography} from "@mui/material";

interface PostProps {
  post: PostData
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container>
          <Grid item xs={8}>
            <Typography color="primary" variant="body1">{post.creator.name}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2" className='text-right' color="textSecondary">{format(post.date, 'yyyy.MM.dd HH:mm')}</Typography>
          </Grid>
        </Grid>
        <Typography variant="body1" className="pt-4">{post.content}</Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
