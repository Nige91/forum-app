import React from 'react'
import {ThreadData} from "../interfaces.ts";
import ThreadListItem from "../components/ThreadListItem.tsx";
import {useLoaderData} from "react-router-dom";

const ThreadListView: React.FC = () => {
  const threads = useLoaderData() as ThreadData[] ;

  return (
    threads.map(thread=><ThreadListItem thread={thread}/>)
  )
};
export default ThreadListView;