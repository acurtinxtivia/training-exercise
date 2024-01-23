import { fetchLandingEntriesBySlug } from '~/api'
import PageHeader from '~/components/PageHeader';
import Hero from '~/components/Hero';
import SetOfCards from '~/components/SetOfCards';

export default async function Home() {
  const [data]: any = await fetchLandingEntriesBySlug();

  return (
    <main className='w-full flex flex-col items-center'>
      {data.fields.sections.map((section: any) => {
        switch(section.sys.contentType.sys.id) {
          case 'header':
            return <PageHeader data={section} />
          case 'heroImage':
            return <Hero data={section} />
          case 'setOfCard':
            return <SetOfCards data={section} />
          default:
            return null
        }
      })}
    </main>
  )
}
