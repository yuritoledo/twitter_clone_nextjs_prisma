import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = Number(req.query.id);

  switch (req.method) {
    case 'GET':
      try {
        const tweet = await prisma.tweet.findOne({
          where: {
            id,
          },
        });
        res.status(200).json({ tweet });
      } catch (error) {
        res.status(404).json({ error });
      }
      break;

    case 'PUT':
      try {
        const tweet = prisma.tweet.update({
          data: req.body,
          where: {
            id,
          },
        });
        res.status(200).json({ tweet });
      } catch (error) {
        res.status(404).json({ error });
      }
      break;
    case 'DELETE':
      try {
        const tweet = prisma.tweet.delete({
          where: {
            id,
          },
        });
        res.status(200).json({ tweet });
      } catch (error) {
        res.status(404).json({ error });
      }
      break;

    default:
      res.status(405).end();
      break;
  }
};
