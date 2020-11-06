import { NextApiRequest, NextApiResponse } from 'next'
import { findById, remove, updateById } from 'repositories/tweet'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = Number(req.query.id)

  switch (req.method) {
    case 'GET':
      try {
        const tweet = await findById(id)
        res.status(200).json({ tweet })
      } catch (error) {
        res.status(404).json({ error })
      }
      break

    case 'PUT':
      try {
        const tweet = await updateById(req.body, id)
        res.status(200).json(tweet)
      } catch (error) {
        res.status(404).json(error)
      }
      break

    case 'DELETE':
      try {
        const tweet = await remove(id)
        res.status(200).json(tweet)
      } catch (error) {
        res.status(404).json(error)
      }
      break

    default:
      res.status(405).end()
      break
  }
}
