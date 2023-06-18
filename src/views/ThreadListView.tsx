import React, {useEffect, useState} from 'react';
import FirebaseService from "../firebase/FirebaseService.ts";
import {ThreadData} from "../interfaces.ts";
import ThreadListItem from "../components/ThreadListItem.tsx";

const ThreadListView: React.FC = () => {
  const [threads, setThreads] = useState<ThreadData[]>([])
  useEffect(()=>{
    FirebaseService.getThreads().then(threads =>{
      setThreads(threads)
      console.log('test')
    })
  }, [])

  return (
    threads.map(thread=><ThreadListItem thread={thread}/>)
  )
};
export default ThreadListView;