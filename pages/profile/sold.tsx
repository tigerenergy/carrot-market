import type { NextPage } from 'next'
import Item from '../../components/item'
import Layout from '../../components/layout'
import useSWR from 'swr';

const Sold: NextPage = () => 
{
  const { data } = useSWR('/api/users/me/sales')
  return (
    <Layout title='판매내역' canGoBack>
      <div className='flex flex-col space-y-5 pb-10  divide-y'>
        {data?.sales?.map((record:any) => (
          <Item 
          id={record.product.id} 
          key={record.id} 
          title={record.product.name} 
          price={record.product.price} 
          hearts={record.product._count.favs}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Sold