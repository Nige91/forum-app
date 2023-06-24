import { Route, Routes } from 'react-router-dom';
import JsonUploader from "./views/JsonUploader.tsx";
import ThreadListView from "./views/ThreadListView.tsx";
import React from "react";
import ThreadItemView from "./views/ThreadItemView.tsx";
import LoginPage from "./views/LoginPage.tsx";
import {auth} from "./firebase/firebase.ts";
import { onAuthStateChanged } from "firebase/auth";
import {useState, useEffect} from "react";
import firebase from "firebase/compat";
import User = firebase.User;
import {FaSpinner} from "react-icons/fa";
import Toolbar from "./components/Toolbar.tsx";
import {DialogProvider} from "./context/DialogContext.tsx";
import Dialog from "./components/Dialog.tsx";

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

  if(loading){
    //TODO loading icon
    return(
      <div className="flex items-center justify-center h-screen">
        <FaSpinner className="animate-spin text-blue-500 text-4xl" />
      </div>
    )
  }
  if(user){
    return (
      <>
        <DialogProvider>
          <Toolbar/>
          <Routes>
            <Route path='/' element={<ThreadListView/>}/>
            <Route path='/thread/:threadId' element={<ThreadItemView/>}/>
            <Route path='/json' element={<JsonUploader/>}/>
          </Routes>
          <Dialog/>
        </DialogProvider>
      </>
    )
  }
  else{
    return <LoginPage/>
  }
}

export default App
