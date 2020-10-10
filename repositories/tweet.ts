import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAllTweetsWithUserName = () => prisma.tweet.findMany({
  orderBy: {
    id: 'desc',
  },
  include: {
    User: {
      select: {
        name: true,
      },
    },
  },
});

export default getAllTweetsWithUserName;
