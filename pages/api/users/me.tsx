import { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'
import withHandler , { ResponseType } from '@libs/server/withHandler'
import { withApiSession } from '@libs/server/withSession'
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
 
 const profile = await client.user.findUnique(
     {
         where:
         {
             id: req.session.user?.id
         },
     })
 res.json(
     {
         ok: true,
         profile,
     })
     console.log(profile)
}

export default withApiSession((withHandler('GET' , handler)))
