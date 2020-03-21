import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

let config: { storageBucket: string; apiKey: string; messagingSenderId: string; appId: string; projectId: string; measurementId: string; databaseURL: string; authDomain: string };
config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

firebase.initializeApp(config);

export default firebase;