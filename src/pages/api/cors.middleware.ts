import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

// Init CORS. Accept Get requests from admiralfeb.net or any of its subdomains.
export const cors = Cors({
  // origin: /admiralfeb\.net$/,
  origin: [
    'https://admiralfeb.net',
    'https://www.admiralfeb.net',
    'https://bwasm.admiralfeb.net',
    'https://cra.admiralfeb.net',
    'https://nextjs.admiralfeb.net',
    'https://ng.admiralfeb.net',
    'https://rust.admiralfeb.net',
    'https://vue.admiralfeb.net',
  ],
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
