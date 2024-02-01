import { fetchLandingEntriesBySlug } from '~/api'
import PageRenderer from '~/components/PageRenderer';
import NotFound from '~/components/NotFound';

export default async function Home() {
  const data = await fetchLandingEntriesBySlug();

  if (!data) return <NotFound />

  return (
    <PageRenderer data={data[0]} />
  )
}
