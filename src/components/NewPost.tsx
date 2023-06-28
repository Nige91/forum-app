import React, { useState } from 'react';
import {Button, Card, CardContent, TextField} from "@mui/material";

interface NewPostProps {
  addPost: (content: string) => void;
}

const NewPost: React.FC<NewPostProps> = ({ addPost }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (content) {
      addPost(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card variant="outlined">
        <CardContent>
          <TextField
            value={content}
            onChange={(e) => setContent(e.target.value)}
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Write your post here..."
          />
          <div className="my-2 float-right"><Button type="submit" variant="contained" color="primary">Post</Button></div>
        </CardContent>
      </Card>
    </form>
  );
};

export default NewPost;
