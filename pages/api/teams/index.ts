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

      await teamsRef.collection('teamList').doc().set(reqest);
    }

    res.end();
  } else if (method === 'GET') {
    try {
      const data = teamsRef.collection('teamList');
      const doc = await data.get();
      const teamList: {
        dcName: string;
        teamInfo: firebase.firestore.SnapshotOptions;
      }[] = [];

      doc.forEach((elm) => {
        teamList.push({
          dcName: elm.id,
          teamInfo: elm.data(),
        });
      });

      res.status(200).json(teamList);
    } catch (e) {
      console.log('e', e);
    }
  }
};
