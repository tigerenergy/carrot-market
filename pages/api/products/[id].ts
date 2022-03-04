import { NextApiRequest, NextApiResponse } from 'next'
import withHandler , { ResponseType } from '@libs/server/withHandler'
import client from '@libs/server/client'
import { withApiSession } from '@libs/server/withSession'



async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
) 
{ 
    console.log(req.query)
    res.json(
        {   
            ok:true
        })
}

export default withApiSession(
    withHandler(
    {
        methods: ['GET'],
        handler,
    })
)
