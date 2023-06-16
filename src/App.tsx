import {Thread} from './components/Thread'
import {PostData} from "./interfaces.ts";
import FirebaseService from "./firebase/FirebaseService.ts";
import {useEffect, useState} from "react";
function App() {
  const [posts, setPosts] = useState<PostData[]>([])
  useEffect(()=>{
    FirebaseService.getPosts().then(posts =>{
      setPosts(posts)
    })
  })

  return (
    <>
      <Thread title="PS vs XBOX" posts={posts}/>
    </>
  )
}

export default App
