import { IProject } from 'models/project';
import { Db } from 'mongodb';
import { NextApiHandler } from 'next';
import { connectToDatabase, getItems } from 'utils/mongo';
import { corsMiddleware } from './cors.middleware';

const projectHandler: NextApiHandler = async (req, res) => {
  try {
    await corsMiddleware(req, res);
    const { db } = await connectToDatabase();
    const projects = await getProjects(db);
    res.status(200).send(projects);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export default projectHandler;

const getProjects = async (db: Db) => {
  const items = (await getItems<IProject>('projects', db)) as IProject[];
  return items.map((x) => {
    x._id = x._id.toString();
    return x;
  });
};
