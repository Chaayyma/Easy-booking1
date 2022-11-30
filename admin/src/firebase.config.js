import { getApp, getApps, initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT5KunoeXNap7Yv3m4pSNnLr_QlypOi3Y",
  authDomain: "easy-booking-2daac.firebaseapp.com",
  projectId: "easy-booking-2daac",
  storageBucket: "gs://easy-booking-2daac.appspot.com",
  messagingSenderId: "627268795761",
  appId: "1:627268795761:web:ea886f7b4dbed4e7f08ad0",
  measurementId: "G-2PH79X71FW",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
