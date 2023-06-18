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
    const q = query(collection(this.db, 'posts'), orderBy('date'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => convertDtoToPostData(doc.data() as PostDataDTO) );
  }

  async sendPost(post:PostData) {
    return addDoc(collection(this.db, 'posts'), convertPostDataToDTO(post))
  }

  async sendPosts(posts:PostData[]){
    for(let post of posts){
      await this.sendPost(post)
    }
  }

  async addDataFromJson(collectionName: string, jsonString: string): Promise<void> {
    const data: any[] = JSON.parse(jsonString);
    for(let item of data){
      await addDoc(collection(this.db, collectionName), item)
    }
  }
}

export default new FirebaseService();