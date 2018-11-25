import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


var config = {
    apiKey: "AIzaSyCpKiwf3pW0vMhAw4ll12gzuRtutzA6-ik",
    authDomain: "project-management-36a02.firebaseapp.com",
    databaseURL: "https://project-management-36a02.firebaseio.com",
    projectId: "project-management-36a02",
    storageBucket: "project-management-36a02.appspot.com",
    messagingSenderId: "32124845550"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;