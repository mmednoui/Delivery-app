import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5qJIC9RlfFpzTDAmk2WZMqgNTSHf1JFw",
  authDomain: "delivery-app-fd0a9.firebaseapp.com",
  databaseURL: "https://delivery-app-fd0a9-default-rtdb.firebaseio.com",
  projectId: "delivery-app-fd0a9",
  storageBucket: "delivery-app-fd0a9.appspot.com",
  messagingSenderId: "163200189388",
  appId: "1:163200189388:web:cbc2d5fa5188ae55639369",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
