import { fetchLandingEntriesBySlug } from "~/api";
import PageRenderer from "~/components/PageRenderer";
import NotFound from "~/components/NotFound";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const result = await fetchLandingEntriesBySlug("blog");

  if (!result || result.length < 1) return <NotFound />;

  return <PageRenderer data={result[0]} />;
}
