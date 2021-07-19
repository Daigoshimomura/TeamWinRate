import firebase from 'firebase';
import firebaseApi from 'firebase_api.json';

export type Data = {
  UserID: string;
};

if (firebase.apps.length === 0) {
  console.log(firebase.apps.length, 'firebase.apps.length');
  firebase.initializeApp(firebaseApi);
}

export const auth = firebase.auth();
