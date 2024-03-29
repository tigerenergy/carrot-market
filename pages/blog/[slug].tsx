import { GetStaticProps, NextPage } from 'next'
import matter from 'gray-matter'
import { readdirSync } from 'fs'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import Layout from '@components/layout'


const Post:NextPage<{post:string , data:any}> = ({ post , data}) => 
{
  return (
    <Layout title={data.title} seoTitle={data.title}>
      <div className='blog-post-content' dangerouslySetInnerHTML={{__html:post , }}>
      </div>
      </Layout>
  )
}

export function getStaticPaths()
{ 
  const files = readdirSync('./posts').map(file =>
    {
      const [name , extension] = file.split('.')
      return {params:{slug: name}}
    })
  return{
    paths: files,
    fallback: false
  }  
}


export const getStaticProps:GetStaticProps = async (ctx:any) =>
{
 const {content, data} = matter.read(`./posts/${ctx.params?.slug}.md`)
 const { value } = await unified().use(remarkParse).use(remarkHtml).process(content)
  return{
    props: 
    {
      post: value,
      data
    },
  }
}


export default Post