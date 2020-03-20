import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

let config: { storageBucket: string; apiKey: string; messagingSenderId: string; appId: string; projectId: string; measurementId: string; databaseURL: string; authDomain: string };
config = {
    apiKey: "AIzaSyBQxF7N6P-LxzZZ1EgOWoheTedL7sPeKvg",
    authDomain: "dc-app-produtor-v2.firebaseapp.com",
    databaseURL: "https://dc-app-produtor-v2.firebaseio.com",
    projectId: "dc-app-produtor-v2",
    storageBucket: "dc-app-produtor-v2.appspot.com",
    messagingSenderId: "614775502350",
    appId: "1:614775502350:web:7164ae3ed2d57ad044ae5f",
    measurementId: "G-RWH1JWDW5Y"
};

firebase.initializeApp(config);

export default firebase;