
import { Route, Routes } from 'react-router-dom';
import JsonUploader from "./views/JsonUploader.tsx";
import ThreadListView from "./views/ThreadListView.tsx";
import React from "react";
import ThreadItemView from "./views/ThreadItemView.tsx";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ThreadListView/>}/>
        <Route path='/thread/:threadId' element={<ThreadItemView/>}/>
        <Route path='/json' element={<JsonUploader/>}/>
      </Routes>
    </>
  )
}

export default App
