import { PrismaClient, TweetUpdateInput } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllTweetsWithUserName = () => prisma.tweet.findMany({
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
})

export const findById = (id: number) => prisma.tweet.findOne({
  where: {
    id,
  },
})

export const updateById = (data: TweetUpdateInput, id: number) => prisma.tweet.update({
  data,
  where: {
    id,
  },
})

export const remove = (id: number) => prisma.tweet.delete({
  where: {
    id,
  },
})
