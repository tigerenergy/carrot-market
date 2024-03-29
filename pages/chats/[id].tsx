import type { NextPage } from 'next'

const ChatDetail: NextPage = () => 
{
  return (
    <div className='py-10 px-4 space-y-4'>
      <div className='flex items-start space-x-2'>
        <div className='w-8 h-8 rounded-full bg-slate-400'/>
        <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md'>
          <p>Hi how much are you selling them for?</p>
          </div>
        </div>
        <div className='flex flex-row-reverse items-start space-x-2 space-x-reverse'>
        <div className='w-8 h-8 rounded-full bg-slate-400'/>
        <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md'>
          <p>I want ￦20,000</p>
          </div>
      </div>
      <div className='flex items-start space-x-2'>
        <div className='w-8 h-8 rounded-full bg-slate-400'/>
        <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md'>
          <p>미쳤어</p>
          </div>
      </div>
      <div className='fixed w-full mx-auto max-w-md bottom-4 inset-x-0'>
        <div className='flex items-center relative'>
          <input className='shadow-sm rounded-full w-full pr-12 border-gray-300 focus:ring-orange-500 focus:border-orange-500 focus:outline-none' type='text' />
          <div className='absolute inset-y-0 flex py-1.5 pr-1.5 right-0'>
            <button className='flex items-center bg-orange-500 rounded-full px-3 text-sm text-white cursor-pointer hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none' >&rarr;</button>
          </div>
        </div>            
      </div>
    </div>
  )
}

export default ChatDetail