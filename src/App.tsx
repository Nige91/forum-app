import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ThreadListView from "./views/ThreadListView.tsx";
import React, {useContext} from "react";
import ThreadItemView from "./views/ThreadItemView.tsx";
import LoginPage from "./views/LoginPage.tsx";
import {auth} from "./firebase/firebase.ts";
import { onAuthStateChanged } from "firebase/auth";
import {useState, useEffect} from "react";
import Toolbar from "./components/Toolbar.tsx";
import LoadingSpinner from "./components/LoadingSpinner.tsx";
import PostgrestService from "./service/PostgrestService.ts";
import TopicListView from "./views/TopicListView.tsx";
import {UserContext} from "./context/UserContext.tsx";

function App() {
  // const [user, setUser] = useState<Account | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const userContext = useContext(UserContext)
  if(!userContext) throw new Error('Used UserContext outside of provider');
  const { user, updateUser } = userContext;

  useEffect(() => {
    // Listen for changes in the user's authentication state
    const unsubscribe = onAuthStateChanged(auth,(userFB) => {
      if(userFB && userFB.email){
        PostgrestService.getOrInsertUser(userFB.email).then(userPG => {
          updateUser(userPG);
          setLoading(false)
        })
      }
      else{
        setLoading(false)
      }
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <TopicListView />,
      loader: () => PostgrestService.getTopics()
    },
    {
      path: '/topic/:topicId',
      element: <ThreadListView />,
      // @ts-ignore
      loader: ({params: {topicId}}:{params: {topicId: string}}) => PostgrestService.getThreads(topicId)
    },
    {
      path: '/thread/:threadId',
      element: <ThreadItemView />,
      // @ts-ignore
      loader: ({params: {threadId}}:{params: {threadId: string}}) => PostgrestService.getPosts(threadId)
    },
  ]);


  if(loading){
    return(
      <LoadingSpinner/>
    )
  }
  if(!user){
    return <LoginPage/>
  }
  return (
    <>
      <Toolbar/>
      <RouterProvider router={router} />
    </>
  )
}

export default App
