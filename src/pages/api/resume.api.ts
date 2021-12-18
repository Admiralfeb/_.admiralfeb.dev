import { IExperience } from 'models/experience';
import { ISkill } from 'models/skill';
import { Db } from 'mongodb';
import { NextApiHandler } from 'next';
import { connectToDatabase, getItems } from 'utils/mongo';
import { corsMiddleware } from './cors.middleware';

const resumeHandler: NextApiHandler = async (req, res) => {
  try {
    await corsMiddleware(req, res);
    const { db } = await connectToDatabase();
    const skills = await getSkills(db);
    const experience = await getExperiences(db);
    res.status(200).send({ skills, experience });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export default resumeHandler;

const getSkills = async (db: Db) => {
  const items = (await getItems<ISkill>('skills', db)) as ISkill[];
  return items.map((x) => {
    x._id = x._id.toString();
    return x;
  });
};

const getExperiences = async (db: Db) => {
  const items = (await getItems<IExperience>(
    'experience',
    db,
    'displayOrder',
    1
  )) as IExperience[];
  return items.map((x) => {
    x._id = x._id.toString();
    return x;
  });
};
