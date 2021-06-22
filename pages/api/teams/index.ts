import * as admin from 'firebase-admin';
import type { NextApiRequest, NextApiResponse } from 'next';
import firebaseSercret from '../../../firebase_sercret.json';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  admin.initializeApp({
    // @ts-ignore
    credential: admin.credential.cert(firebaseSercret),
  });
  console.log(
    await admin
      .firestore()
      .collection('teams')
      .doc('ZP7Xr31sAsa9IJPfArUf')
      .get()
  );
  res.status(200).json({ name: 'John Doe' });
};

// アカウントを作成したときに、teamsにdocumentを追加する
// 自分で作ったチームを保存するときに、temas/{documentId}/teamList にdocumentを追加する
// 同じように削除、更新
