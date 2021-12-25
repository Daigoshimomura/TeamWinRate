import { request } from 'http';
import { TeamType } from 'components/teamBuilding/teamBuilding';
import firebase from 'firebase';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'util_user';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  //useID
  const queryID: string = req.query.id as string;

  //db
  const teamsRef = db.collection('teams').doc(queryID);

  const method = req.method;

  //チーム追加処理
  if (method === 'POST') {
    const post: {
      index: string;
      action: string;
    } = JSON.parse(req.body);

    if (post.action == 'delete') {
      //TODO:削除処理修正する必要あり
      const index = teamsRef.collection('teamList').doc(`${post.index}`);

      await index.delete();
    } else {
      const reqest: {
        index: string;
        teamName: string;
        championList: string;
      } = JSON.parse(req.body);

      const hoge = teamsRef.collection('teamList');

      const snapshot = await hoge.get();
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });

      await teamsRef.collection('teamList').doc().set(reqest);
    }
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
    console.log('get');

    const result = async () => {
      try {
        const data = teamsRef.collection('teamList');
        const doc = await data.get();
        doc.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
        });
        return doc;
      } catch (e) {
        console.log('e', e);
      }
    };
    res.status(200).json({ dataList: result() });
  }
};
