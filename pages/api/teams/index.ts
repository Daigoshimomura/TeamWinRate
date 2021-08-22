import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'util_user';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  //更新とか
  // const teamsRef = admin.firestore().collection('teams');

  // const kousin = (userID: string) => {
  //   teamsRef.doc(userID).set({
  //     Name: 'teamList',
  //   });
  //   console.log('更新できた');
  // };

  // console.log('apiない');
  // const result = async () => {
  //   console.log(req.query.id, 'queryid');
  //   const hoge = req.query.id;
  //   const teamsRef = db.collection('teams');
  //   try {
  //     const result = teamsRef.where('Name', '==', 'name');
  //     const hoge = await (await teamsRef.doc('hoge').get()).data();
  //     const kousin = await teamsRef.doc('hoge').get();
  //     console.log('hoge', hoge);
  //     // console.log('auth.currentUser', auth.currentUser);
  //   } catch (e) {
  //     console.log('e', e);
  //   }
  //   return teamsRef;
  // };

  const result = async () => {
    const queryID = req.query.id as string;
    const teamsRef = db.collection('teams');
    try {
      const myTeam = await (await teamsRef.doc(queryID).get()).data();
      return myTeam;
    } catch (e) {
      console.log('e', e);
    }
  };
  res.status(200).json({ name: result() });
};
