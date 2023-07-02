export interface PostData {
  id: string
  creator:{
    id: string,
    name: string
  };
  thread:{
    id: string,
    title: string
  },
  content: string;
  date: Date;
}

export interface PostDataInDTO {
  id: string;
  creator:{
    id: string,
    name: string
  };
  thread:{
    id: string,
    title: string
  },
  content: string;
  date: number;
}

//TODO use pascalCase instead of snake case and automatically transform when sending to postgrest.
export interface PostDataOutDTO {
  id: string;
  creator_id: string;
  thread_id: string;
  content: string;
  date: number;
}

export interface ThreadData {
  id: string;
  creator:{
    id: string,
    name: string
  };
  title: string;
  date: Date;
}

export interface ThreadDataInDTO {
  id: string;
  creator:{
    id: string,
    name: string
  };
  title: string;
  date: number;
}

export interface TopicData {
  id: string;
  title: string;
}

export interface User {
  id: string;
  name: string;
}