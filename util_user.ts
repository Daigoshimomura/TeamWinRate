import firebase from 'firebase';

export type Data = {
  UserID: string;
};

const appConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(appConfig);
}

export const db = firebase.firestore();

export const auth = firebase.auth();
