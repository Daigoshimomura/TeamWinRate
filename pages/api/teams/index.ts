import { request } from 'http';
import { TeamType } from 'components/teamBuilding/teamBuilding';
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

  //useID
  const queryID: string = req.query.id as string;

  //db
  const teamsRef = db.collection('teams').doc(queryID);

  const method = req.method;

  console.log(method, 'method');

  //チーム追加処理
  if (method === 'POST') {
    // console.log("teamName",req.query.myTeam.teamName as string);
    //bodyはany
    const reqest: {
      index: string;
      teamName: string;
      championList: string;
    } = JSON.parse(req.body);

    console.log(reqest.index);

    const index: string = reqest.index;

    await teamsRef.collection('teamList').doc(index).set(reqest);
    // teamsRef.update({ team: neqRequets }); // 配列を入れようとしてる
    // teamsRef.set(reqest); // objectを入れようとしてる
    // db.collection('teams')
    // temasっていうコレクション＝{ teamName: string; championList: string }の配列
    // temasっていうコレクション＝ string[]の配列
    // temasっていうコレクション＝ { teamNameList: string[] } の配列
    // const teams = [
    //   { teamNameList: ['a'] },
    //   { teamNameList: ['b'] },
    //   { teamNameList: ['b'] },
    // ];

    // teamsRef = object:{ teamName: string; championList: string }

    // //中身が変わらない状態だと、保存できない。
    // teamsRef.update({
    //   myTeamList: firebase.firestore.FieldValue.arrayUnion(reqest),
    // });
    res.end();
  } else if (method === 'GET') {
    const result = async () => {
      try {
        return await (await teamsRef.get()).data();
      } catch (e) {
        console.log('e', e);
      }
    };
    res.status(200).json({ name: result() });
  }
};
