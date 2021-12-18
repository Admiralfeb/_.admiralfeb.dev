import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

// Init CORS. Accept Get requests from admiralfeb.dev or any of its subdomains.
export const cors = Cors({
  // origin: /admiralfeb\.net$/,
  origin: [
    'https://admiralfeb.dev',
    'https://www.admiralfeb.dev',
    'https://bwasm.admiralfeb.dev',
    'https://cra.admiralfeb.dev',
    'https://nextjs.admiralfeb.dev',
    'https://ng.admiralfeb.dev',
    'https://rust.admiralfeb.dev',
    'https://vue.admiralfeb.dev',
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
