import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ThreadListView from "./views/ThreadListView.tsx";
import React from "react";
import ThreadItemView from "./views/ThreadItemView.tsx";
import LoginPage from "./views/LoginPage.tsx";
import {auth} from "./firebase/firebase.ts";
import { onAuthStateChanged } from "firebase/auth";
import {useState, useEffect} from "react";
import firebase from "firebase/compat";
import User = firebase.User;
import Toolbar from "./components/Toolbar.tsx";
import {DialogProvider} from "./context/DialogContext.tsx";
import Dialog from "./components/Dialog.tsx";
import LoadingSpinner from "./components/LoadingSpinner.tsx";
import PostgrestService from "./service/PostgrestService.ts";
import TopicListView from "./views/TopicListView.tsx";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Listen for changes in the user's authentication state
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      setUser(user);
      setLoading(false)
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
  if(user){
    return (
      <>
        <DialogProvider>
          <Toolbar/>
          <RouterProvider router={router} />
          <Dialog/>
        </DialogProvider>
      </>
    )
  }
  else{
    return <DialogProvider>
      <LoginPage/>
      <Dialog/>
    </DialogProvider>
  }
}

export default App
