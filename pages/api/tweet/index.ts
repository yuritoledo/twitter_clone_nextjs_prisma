import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { getAllTweetsWithUserName } from 'repositories/tweet'

interface ApiRequest extends NextApiRequest {
  body: { text: string, userId: number }
}

const prisma = new PrismaClient()

export default async (req: ApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      try {
        const { text, userId } = req.body
        const { id } = await prisma.tweet.create({
          data: {
            text,
            User: {
              connect: { id: userId },
            },
          },
        })

        res.status(200).json({ id })
      } catch (error) {
        res.status(500).json(error)
      }
      break

    case 'GET':
      try {
        const tweets = await getAllTweetsWithUserName()
        res.status(200).json(tweets)
      } catch (error) {
        res.status(500).json({ error })
      }
      break
    default:
      res.status(405).end()
      break
  }
}
