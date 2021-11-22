import * as firebase from "firebase";

require("@firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA50okANUgnGmOSlbClt7Qd5trN-GIoG4A",
  authDomain: "tanavproject.firebaseapp.com",
  projectId: "tanavproject",
  storageBucket: "tanavproject.appspot.com",
  messagingSenderId: "293206800517",
  appId: "1:293206800517:web:7e291c9018549471f591ec"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
export default firebase.firestore();
