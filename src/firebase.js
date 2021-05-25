import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDUIUCT89tE6x-u01_cCMQ-2nbsQ2ra_HI",
	authDomain: "netflix-clone-ae3c5.firebaseapp.com",
	projectId: "netflix-clone-ae3c5",
	storageBucket: "netflix-clone-ae3c5.appspot.com",
	messagingSenderId: "977084619393",
	appId: "1:977084619393:web:3386f1d6739e0af6e44b80",
	measurementId: "G-RQW118PN58",
};

let app;

if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
