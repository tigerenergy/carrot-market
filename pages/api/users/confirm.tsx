import { NextApiRequest, NextApiResponse } from 'next'
import { withApiSession } from '@libs/server/withSession'
import withHandler , { ResponseType } from '@libs/server/withHandler'
import client from '@libs/server/client'



declare module 'iron-session'
{
  interface IronSessionData
  {
    user?:
    {
      id: number
    }
  }
}




async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) 
{ 
 const { token } =req.body
 const exists = await client.token.findUnique(
   {
     where:
     {
       payload: token,
     },
   })
 if(!exists) return res.status(404).end()
 req.session.user =
 {
   id:exists.userId
 }
 await req.session.save()
 res.status(200).end()
}

export default withApiSession((withHandler('POST' , handler)))