import type { NextPage } from 'next'
import Button from '@components/button'
import Input from '@components/input'
import Layout from '@components/layout'
import useUser from '@libs/client/useUser'
import { useForm } from 'react-hook-form'

interface EditProfileForm
{
  email?: string
  phone?: string
}


const EditProfile: NextPage = () => 
{ 
  const { user } = useUser()
  const { register } = useForm<EditProfileForm>()
  return (
    <Layout canGoBack title='Edit Profile'>
      <form className='py-10 px-4 space-y-4'>
        <div className='flex items-center space-x-3'>
          <div className='w-14 h-14 rounded-full bg-slate-500' />
          <label
            htmlFor='picture'
            className='cursor-pointer py-2 px-3 border hover:bg-gray-50 border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700'
          >
            Change
            <input
              id='picture'
              type='file'
              className='hidden'
              accept='image/*'
            />
          </label>
        </div>
        <Input 
          register ={register('email')}
          required 
          label='Email address' 
          name='email' 
          type='email' />
        <Input
          register ={register('phone')}
          required
          label='Phone number'
          name='phone'
          type='number'
          kind='phone'
        />
        <Button text='Update profile' />
      </form>
    </Layout>
  )
}

export default EditProfile