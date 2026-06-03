import { Submenu } from "@/components/home/submenu";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";
import { Hero } from "@/components/hero";
import { Phone } from 'lucide-react';
import { Services } from "@/components/services";
import { Container } from "@/components/container";
import { Footer } from '@/components/home/footer';

export default async function Home() {
  const { object }: HomeProps = await getDataHome();

  return (
      <main>

        <Submenu />
        
        <Hero 
          heading={object.metadata.heading}
          buttonUrl={object.metadata.cta_button.url}
          buttonTitle={object.metadata.cta_button.title}
          bannerUrl={object.metadata.banner.url}
          icon={<Phone size={24} color="#FFF" />}
        />

        <Container>
          <Services object={object}/>
          <Footer object={object}/>
        </Container>

      </main>
  );
}
