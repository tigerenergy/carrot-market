import { useForm } from 'react-hook-form'


interface LoginForm
{
    username: string,
    email: string,
    password: string
}



export default function Forms()
{   
    const { register, handleSubmit , formState:{ errors }} = useForm<LoginForm>()
    const onValid = (data: LoginForm) =>
    {
        console.log('im Ok!')
    }
    const onInvalid = (errors: any) =>
    {
        console.log(errors)
    }
    console.log(errors)
    return(
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
            <input 
            {...register('username',
                {
                    required: 'username is required',
                    minLength:
                    {
                        message: 'The username should be longer than 5 chars.',
                        value: 5
                    },
                }
              )
            }
            type='text' 
            placeholder='userName' 
            />

            <input 
            {...register('email',
                {
                  required: 'email is required',
                  validate: 
                  {
                      notGmail: (value) => 
                      !value.includes('@gmail.com') || 'Gmail is not allowed',
                  }      
                }
              )
            }
            type='email' 
            placeholder='Email'
            className={`${Boolean(errors.email) ? 'border-red-500' : 'border-blue-600'}`}
            />
            {errors.email?.message}

            <input 
            {...register('password',
                {
                    required: 'password is required',
                }
              )
            }
            type='password' 
            placeholder='Password' 
            />

            <input 
            type='submit' 
            value='Create Account'/>
        </form>
    )
}