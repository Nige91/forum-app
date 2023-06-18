import {Thread} from './components/Thread'
import {PostData} from "./interfaces.ts";
import FirebaseService from "./firebase/FirebaseService.ts";
import {useEffect, useState} from "react";
import { Route, Routes } from 'react-router-dom';
import JsonUploader from "./views/JsonUploader.tsx";
function App() {
  const [posts, setPosts] = useState<PostData[]>([])
  useEffect(()=>{
    FirebaseService.getPosts().then(posts =>{
      setPosts(posts)
      console.log('test')
    })
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Thread title="PS vs XBOX" posts={posts}/>}/>
        <Route path='/json' element={<JsonUploader/>}/>
      </Routes>
    </>
  )
}

export default App
