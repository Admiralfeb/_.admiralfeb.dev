import { NextApiHandler } from 'next';
import { corsMiddleware } from './cors.middleware';

const projectHandler: NextApiHandler = async (req, res) => {
  await corsMiddleware(req, res);
  res.json({ message: 'Projects will return here.' });
};

export default projectHandler;
