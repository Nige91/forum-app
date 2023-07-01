import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TopicData } from "../interfaces.ts";
import {Card, CardContent, Typography} from '@mui/material';

interface TopicListItemProps {
  topic: TopicData;
}

const TopicListItem: React.FC<TopicListItemProps> = ({ topic }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/topic/${topic.id}`);
  };

  return (
    <Card
      style={{ marginBottom: "10px", cursor: "pointer" }}
      onClick={handleClick}
    >
      <CardContent>
        <Typography variant="h5" color="primary">
          {topic.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TopicListItem;
