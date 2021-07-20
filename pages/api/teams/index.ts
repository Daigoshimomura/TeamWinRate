import { getMaxListeners } from 'process';
import { is } from '@babel/types';
import firebase from 'firebase';
import * as admin from 'firebase-admin';
// import firebase from 'firebase/app';

import type { NextApiRequest, NextApiResponse } from 'next';
import firebaseApi from '../../../firebase_api.json';
import firebaseSercret from '../../../firebase_sercret.json';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  admin.initializeApp({
    // @ts-ignore
    credential: admin.credential.cert(firebaseSercret),
  });
  // console.log(
  //   await admin
  //     .firestore()
  //     .collection('teams')
  //     .doc('ZP7Xr31sAsa9IJPfArUf')
  //     .get()
  // );
  // res.status(200).json({ name: 'John Doe' });

  //更新とか
  const teamsRef = admin.firestore().collection('teams');

  const kousin = (userID: string) => {
    teamsRef.doc(userID).set({
      Name: 'teamList',
    });
    console.log('更新できた');
  };

  //ログイン処理していないかどうか
  firebase.initializeApp(firebaseApi);

  //登録処理
  // await firebase
  //   .auth()
  //   .createUserWithEmailAndPassword('aaa@gmali.com', '123456')
  //   .then((res) => {
  //     console.log('登録できた');
  //   })
  //   .catch((error) => {
  //     console.log(error, '失敗');
  //   });

  const ifLogin = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('ログイン中');
        console.log(user.uid);
        kousin(user.uid);
      } else {
        console.log(user, 'ログインしていない。');
      }
    });
  };

  //ログイン処理
  // await firebase
  //   .auth()
  //   .signInWithEmailAndPassword('aaa@gmali.com', '123456')
  //   .then((res) => {
  //     console.log('ログインできた');
  //     ifLogin();

  //     // kousin();
  //   })
  //   .catch((error) => {
  //     console.log(error, 'ログイン失敗');
  //   });
};

// アカウントを作成したときに、teamsにdocumentを追加する
// 自分で作ったチームを保存するときに、temas/{documentId}/teamList にdocumentを追加する
// 同じように削除、更新
