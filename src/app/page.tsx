import { fetchLandingEntriesBySlug } from '~/api'
import PageRenderer from '~/components/PageRenderer';

export default async function Home() {
  const [data] = await fetchLandingEntriesBySlug();

  return (
    <PageRenderer data={data} />
  )
}
