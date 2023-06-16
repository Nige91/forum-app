import {db} from "./firebase.ts"
// @ts-ignore
import firebase from "firebase/compat";
import Firestore = firebase.firestore.Firestore;
import { collection, query, getDocs } from "firebase/firestore";
import {convertDtoToPostData} from "../converter.ts";



import {PostData, PostDataDTO} from "../interfaces.ts";
// import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
// import DocumentData = firebase.firestore.DocumentData;

class FirebaseService {
  db: Firestore;

  constructor() {
    this.db = db;
  }

  async getPosts() : Promise<PostData[]> {
    const q = query(collection(db, "posts"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => convertDtoToPostData(doc.data() as PostDataDTO) );
  }
}

export default new FirebaseService();