const firebase = require("firebase");
const admin = require("firebase-admin");
const serviceAccount = require("./service-account.json");

const firebaseConfig = {
  apiKey: "AIzaSyCSd-pH20VU1O1bd6sPXDGTbKmALIqaBIc",
  authDomain: "testcapstone-bd06c.firebaseapp.com",
  projectId: "testcapstone-bd06c",
  storageBucket: "testcapstone-bd06c.appspot.com",
  messagingSenderId: "225869817417",
  appId: "1:225869817417:web:66dffe5c6818b427a24198"
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const userRef = db.collection("user");
const rewardRef = db.collection("reward");
const transactionRef = db.collection("transaction");
const trashRef = db.collection("trash");


firebase.initializeApp(firebaseConfig);

module.exports = {
  admin,
  firebase,
  db,
  transactionRef,
  userRef,
  rewardRef,
  trashRef
};
