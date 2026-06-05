import { Hero } from '@/components/hero';
import styles from './styles.module.scss';
import { getItemBySlug } from '@/utils/actions/get-data'
import { PostProps } from '@/utils/post.type';
import { Phone } from 'lucide-react';
import { Container } from '@/components/container';
import Image from 'next/image';

interface ParamsProps {
    params: Promise<{ slug: string }>
}

export default async function Page({ params }: ParamsProps){
    const { slug } = await params;
    const { objects }: PostProps = await getItemBySlug(slug)

    return(
      <>
        <Hero 
          heading={objects[0].title}
          buttonUrl={objects[0].metadata.button.url}
          buttonTitle={objects[0].metadata.button.title}
          bannerUrl={objects[0].metadata.banner.url}
          icon={<Phone size={24} color="#FFF" />}
        />

        <Container>
          <section className={styles.about}>

            <article className={styles.innerAbout}>
              <h1 className={styles.title}>
                {objects[0].metadata.description.title}
              </h1>
              <p>
                {objects[0].metadata.description.text}
              </p>

              {objects[0].metadata.description.button_active && (
                <a 
                  href={objects[0].metadata.description.button_url as string}
                  target="_blank"
                  className={styles.link}
                >
                  {objects[0].metadata.description.button_title}
                </a>
              )}
            </article>

            <div className={styles.bannerAbout}>
              <Image
                className={styles.imageAbout}
                alt={objects[0].title}
                quality={100}
                fill={true}
                priority={true}
                src={objects[0].metadata.description.banner.url}
                sizes="(max-width: 480px) 100vw, (max-width: 1024) 75vw, 50vw"
              />
            </div>

          </section>
        </Container>
      </>
    )
}