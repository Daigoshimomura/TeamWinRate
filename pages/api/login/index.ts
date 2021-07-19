import firebase from 'firebase';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Data } from 'util_user';
import { auth } from 'util_user';

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // const ifLogin = () => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       console.log(user.uid, 'user.uid');
  //       res.status(200).json({ UserID: user.uid });
  //       console.log('ログインできた');
  //     } else {
  //       console.log(user, 'ログインしていない。');
  //     }
  //   });
  // };

  //ログイン処理
  await auth
    .signInWithEmailAndPassword('aaa@gmali.com', '123456')
    .then(() => {
      console.log('ログイン');
    })
    .catch((error) => {
      console.log(error, 'loginerror');
    });
};
