import React from 'react'
import {TopicData} from "../interfaces.ts"
import {useLoaderData} from "react-router-dom";
import TopicListItem from "../components/TopicListItem.tsx";

const TopicListView: React.FC = () => {
  const topics = useLoaderData() as TopicData[] ;

  return (
    topics.map(topic=><TopicListItem topic={topic}/>)
  )
};
export default TopicListView;