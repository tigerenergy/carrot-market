import { NextApiRequest, NextApiResponse } from 'next'
import withHandler , { ResponseType } from '@libs/server/withHandler'
import { withApiSession } from '@libs/server/withSession'
import client from '@libs/server/client'



async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) 
{ 
 
    if(req.method === 'GET')
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
    }
    if(req.method === 'POST')
    {
        const { session: { user }, body: { email , phone }} = req 
        if(email)
        {
            const alreadyExists = Boolean(await client.user.findUnique(
                {
                    where:
                    {
                        email,    
                    },
                    select:
                    {
                        id: true,
                    }
                })
            )
            if(alreadyExists)
            {
                return res.json(
                    {
                        ok: false,
                        error: 'Email already taken.'
                    })
            }
            await client.user.update(
                {
                    where:
                    {
                        id: user?.id,
                    },
                    data:
                    {
                        email,
                    },       
                })
                res.json({ ok: true })
        }
        else if(phone)
        {
            if(phone)
            {
                const alreadyExists = Boolean(await client.user.findUnique(
                    {
                        where:
                        {
                            phone,    
                        },
                        select:
                        {
                            id: true,
                        }
                    })
                )
                if(alreadyExists)
                {
                    return res.json(
                        {
                            ok: false,
                            error: 'Phone already in use.'
                        })
                }
                await client.user.update(
                    {
                        where:
                        {
                            id: user?.id,
                        },
                        data:
                        {
                            phone,
                        },       
                    })
                    res.json({ ok: true })
            }  
        }
    } 
}

export default withApiSession(
    withHandler(
    {
        methods: ['GET' , 'POST'],
        handler,
    })
)
