import { withIronSessionApiRoute } from 'iron-session/next'
import withHandler , { ResponseType } from '@libs/server/withHandler'
import { NextApiRequest, NextApiResponse } from 'next'
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

export default withIronSessionApiRoute(withHandler('GET' , handler),
{
  cookieName: 'carrotsession',
  password: '3284932849028902378328490238490238asdasdasd23445345345sdasdasd',


})
