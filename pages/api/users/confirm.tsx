import { withIronSessionApiRoute } from 'iron-session/next'
import withHandler , { ResponseType } from '@libs/server/withHandler'
import { NextApiRequest, NextApiResponse } from 'next'
import client from '@libs/server/client'

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
 if(!exists) res.status(404).end()
 req.session.user =
 {
   id:exists?.userId
 }
 await req.session.save()
 res.status(200).end()
}

export default withIronSessionApiRoute(withHandler('POST' , handler),
{
  cookieName: 'carrotsession',
  password: '3284932849028902378328490238490238asdasdasd23445345345sdasdasd',


})
