import { fetchLandingEntriesBySlug } from '~/api'

import PageHeader from '~/components/PageHeader';

export default async function Home() {
  const [data]: any = await fetchLandingEntriesBySlug();

  return (
    <main>
      <h1>{data.fields.pageTitle}</h1>
      {data.fields.sections.map((section: any) => {
        switch(section.fields.internalName) {
          case ('PageHeader'): {
            return <PageHeader />
          }
          default:
            return <div>{section.fields.internalName}</div>
        }
      })}
    </main>
  )
}
