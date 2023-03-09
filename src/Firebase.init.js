
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDo-7HWvMnIlya9ozeUQHfuhJ7U9-xnDQA",
  authDomain: "business-app-9cb8e.firebaseapp.com",
  projectId: "business-app-9cb8e",
  storageBucket: "business-app-9cb8e.appspot.com",
  messagingSenderId: "80388938048",
  appId: "1:80388938048:web:de23776cb78709c9d202a5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
export default auth ;