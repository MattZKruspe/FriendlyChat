/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
// import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyBwlBrW9oK3rPLHXIkSTmf95L9IbqYyFis",
  authDomain: "friendlychat3-b5b1d.firebaseapp.com",
  projectId: "friendlychat3-b5b1d",
  storageBucket: "friendlychat3-b5b1d.appspot.com",
  messagingSenderId: "740682174601",
  appId: "1:740682174601:web:a8f6425bc515833d4d7658"
};

// const app = initializeApp(firebaseConfig);

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}