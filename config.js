import * as firebase from "firebase";

require("@firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI6i1C51detmSZHOipJNR1y8wzlW6iwXY",
  authDomain: "my-pro-f5df7.firebaseapp.com",
  projectId: "my-pro-f5df7",
  storageBucket: "my-pro-f5df7.appspot.com",
  messagingSenderId: "398419220165",
  appId: "1:398419220165:web:0569e7217bd51a3f3682ac",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
export default firebase.firestore();
