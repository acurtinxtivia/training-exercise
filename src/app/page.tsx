import { fetchLandingEntriesBySlug } from '~/api'
import PageHeader from '~/components/PageHeader';
import Hero from '~/components/Hero';
import SetOfCards from '~/components/SetOfCards';
import SetOfTestimonials from '~/components/SetOfTestimonials';
import Banner from '~/components/Banner';
import Footer from '~/components/Footer';

export default async function Home() {
  const [data]: any = await fetchLandingEntriesBySlug();

  return (
    <main className='w-full flex flex-col items-center'>
      {data.fields.sections.map((section: any) => {
        switch(section.sys.contentType.sys.id) {
          case 'header':
            return <PageHeader data={section} key={section.sys.id} />
          case 'heroImage':
            return <Hero data={section} key={section.sys.id} />
          case 'banner':
            return <Banner fields={section.fields} key={section.sys.id} />
          case 'setOfCard':
            return <SetOfCards data={section} key={section.sys.id} />
          case 'setOfTestimonials':
            return <SetOfTestimonials data={section} key={section.sys.id} />
          case 'footer':
            return <Footer data={section} />
          default:
            return null
        }
      })}
    </main>
  )
}
