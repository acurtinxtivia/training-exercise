import { fetchLandingEntriesBySlug } from '~/api'

import PageHeader from '~/components/PageHeader';
import Hero from '~/components/Hero';

export default async function Home() {
  const [data]: any = await fetchLandingEntriesBySlug();

  return (
    <main className='w-full flex flex-col items-center'>
      {data.fields.sections.map((section: any) => {
        switch(section.fields.internalName) {
          case ('PageHeader'): {
            return <PageHeader data={section} />
          }
          case ('HomeHero'): {
            return <Hero data={section} />
          }
          default:
            return <div>{section.fields.internalName}</div>
        }
      })}
    </main>
  )
}
