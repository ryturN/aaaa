const firebase = require("firebase");
const admin = require("firebase-admin");
const serviceAccount = require("./service-account.json");

const firebaseConfig = {
//
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
