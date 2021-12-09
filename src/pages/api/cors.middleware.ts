import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

// Init CORS. Accept Get requests from admiralfeb.net or any of its subdomains.
export const cors = Cors({
  origin: /admiralfeb\.net$/,
  methods: ['GET'],
});

export const corsMiddleware = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  return new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};
