import type { NextRequest, NextFetchEvent } from 'next/server'
import { NextResponse } from 'next/server'
export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if(req.ua?.isBot)
  {
      return new Response('사람 아니면 나가라')
  }
  if(!req.url.includes('/api'))
  {
      if(!req.url.includes('/enter') && !req.cookies.carrotsession)
      {
          return NextResponse.redirect('/enter')
      }
  }
}