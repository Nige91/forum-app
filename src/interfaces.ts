export interface PostData {
  creator: string;
  content: string;
  date: Date;
}

export interface PostDataDTO {
  creator: string;
  content: string;
  date: number;
}

export interface ThreadData {
  title: string;
  threadId: string;
  date: Date;
  creator: string;
}

export interface ThreadDataDTO {
  title: string;
  threadId: string;
  date: number;
  creator: string;
}