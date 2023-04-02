const firebaseConfig = {
    apiKey: "AIzaSyDm9HAfhA4nSxqCdCvXtwWnVArT-B1FA1M",
    authDomain: "scouting-app-4010.firebaseapp.com",
    projectId: "scouting-app-4010",
    storageBucket: "scouting-app-4010.appspot.com",
    messagingSenderId: "52181276630",
    appId: "1:52181276630:web:75694610586411d5bf7677"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

if(location.hostname === "localhost") {
    fetch("http://localhost:5500/firebase.json").then(async res => {
        const debugConfig = await res.json();
        const firestorePort = debugConfig.emulators.firestore.port
        const storagePort = debugConfig.emulators.storage.port
        db.useEmulator("localhost", firestorePort);
        storage.useEmulator("localhost", storagePort);
    })
}