import React from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { ThreadData } from "../interfaces.ts";
import {Card, CardContent, Grid, Typography} from '@mui/material';

interface ThreadListItemProps {
  thread: ThreadData;
}

const ThreadListItem: React.FC<ThreadListItemProps> = ({ thread }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/thread/${thread.id}`);
  };

  return (
    <Card
      style={{ marginBottom: "10px", cursor: "pointer" }}
      onClick={handleClick}
    >
      <CardContent>
        <Grid container>
          <Grid item xs={8}>
            <Typography variant="h5" color="primary">
              {thread.title}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className='text-right' variant="body2" color="textSecondary">
              {format(thread.date, 'PPpp')}
            </Typography>
          </Grid>
        </Grid>
        <Typography className="pt-4" variant="body2">
          {thread.creator.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ThreadListItem;
