import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = JSON.parse(req.body);
  try {
    const t = await prisma.tweet.create({ data });
    console.log(':: createTweet -> t', t);

    res.status(200).json({ id: t.id });
  } catch (error) {
    console.info(error);

    res.status(500).json({ error });
  }
};
