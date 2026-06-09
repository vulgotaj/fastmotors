import { Suspense } from 'react';
import { getItemBySlug } from '@/utils/actions/get-data'
import { PostProps } from '@/utils/post.type';
import { Metadata } from 'next'
import { Content } from './components/content';
import Loading from './components/loading';

export async function generateMetadata({ params }: ParamsProps): Promise<Metadata>{
  
  try{
    const { slug } = await params;
    const { objects }: PostProps = await getItemBySlug(slug)
    .catch(() => {
      return {
        title: "FastMotors - Oficina Especializada",
        description: "Oficina de carros no Rio de Janeiro"
      }
    })

    return{
      title: `FastMotors - ${objects[0].title}`,
      description: `${objects[0].metadata.description.text}`,
      openGraph: {
        title: `FastMotors - ${objects[0].title}`,
        images: `${objects[0].metadata.banner.url}`
      },
      robots:{
        index: true,
        follow: true,
        nocache: true,
        googleBot:{
          index: true,
          follow: true,
          noimageindex: true
        }
      }
    }


  }catch(err){
    return {
      title: "FastMotors - Oficina Especializada",
      description: "Oficina de carros no Rio de Janeiro"
    }
  }
}

export interface ParamsProps {
    params: Promise<{ slug: string }>
}

export default async function Page({ params }: ParamsProps){
    const { slug } = await params;
  
    return(
      <>
        <Suspense fallback={<Loading/>}>
          <Content slug={slug}/>
        </Suspense>
      </>
    )
}