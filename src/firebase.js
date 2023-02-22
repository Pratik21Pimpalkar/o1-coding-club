import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJYa_XeEtk5on1suNADFnOp8X_CViTDt8",
  authDomain: "skillovilla-aef04.firebaseapp.com",
  projectId: "skillovilla-aef04",
  storageBucket: "skillovilla-aef04.appspot.com",
  messagingSenderId: "627193338018",
  appId: "1:627193338018:web:c83712d9b510a704d9dffb"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
