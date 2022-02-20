import { useState } from 'react'


interface UseMutationState
{
    loading: boolean
    data?: object
    error?: object
}

type UseMutationResult = [(data: any) => void , UseMutationState]


export default function useMutation(url: string): UseMutationResult
{   
    const [loading , setLoading] = useState(false)
    const [data , setData] = useState<undefined | any>(undefined)
    const [error , setError] = useState<undefined | any>(undefined)
    function mutation(data: any)
    {
        setLoading(true)
        fetch(url, 
            {
                method: 'POST',
                headers:
                {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((response) => response.json())
              .then(setData)
              .catch(setError)
    }
    return [mutation, {loading, data , error}]
}