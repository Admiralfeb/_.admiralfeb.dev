import { NextApiHandler } from 'next';
import { corsMiddleware } from './cors.middleware';

const resumeHandler: NextApiHandler = async (req, res) => {
  await corsMiddleware(req, res);

  res.json({ message: 'Resume will return here.' });
};

export default resumeHandler;
