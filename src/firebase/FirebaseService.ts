import {db} from "./firebase.ts"
// @ts-ignore
import firebase from "firebase/compat";
import Firestore = firebase.firestore.Firestore;
import { collection, query, getDocs, addDoc, orderBy } from "firebase/firestore";
import {convertDtoToPostData, convertPostDataToDTO} from "../converter.ts";



import {PostData, PostDataDTO} from "../interfaces.ts";
// import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
// import DocumentData = firebase.firestore.DocumentData;

class FirebaseService {
  db: Firestore;

  constructor() {
    this.db = db;
  }

  async getPosts() : Promise<PostData[]> {
    const q = query(collection(db, 'posts'), orderBy('date'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => convertDtoToPostData(doc.data() as PostDataDTO) );
  }

  async sendPost(post:PostData) {
    return addDoc(collection(db, 'posts'), convertPostDataToDTO(post))
  }

  async sendPosts(posts:PostData[]){
    for(let post of posts){
      await this.sendPost(post)
    }
  }
}

export default new FirebaseService();