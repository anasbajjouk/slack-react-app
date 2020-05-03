import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBff2Lm7wwTuy_DZo6OWBIJRooCePx9SOc",
  authDomain: "slack-like-app-3cc5c.firebaseapp.com",
  databaseURL: "https://slack-like-app-3cc5c.firebaseio.com",
  projectId: "slack-like-app-3cc5c",
  storageBucket: "slack-like-app-3cc5c.appspot.com",
  messagingSenderId: "843205024061",
  appId: "1:843205024061:web:fa81b6785cc5048d4b4d54",
  measurementId: "G-PN10JGLH82",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
