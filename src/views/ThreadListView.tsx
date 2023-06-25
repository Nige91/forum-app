import React, {useEffect, useState} from 'react'
import {ThreadData} from "../interfaces.ts";
import ThreadListItem from "../components/ThreadListItem.tsx";
import PostgrestService from "../service/PostgrestService.ts";

const ThreadListView: React.FC = () => {
  const [threads, setThreads] = useState<ThreadData[]>([])
  useEffect(()=>{
    PostgrestService.getThreads().then(threads =>{
      setThreads(threads)
      console.log('test')
    })
  }, [])

  return (
    threads.map(thread=><ThreadListItem thread={thread}/>)
  )
};
export default ThreadListView;