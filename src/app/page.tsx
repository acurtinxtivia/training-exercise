import { fetchLandingEntriesBySlug } from "~/api";

import PageRenderer from "~/components/PageRenderer";
import NotFound from "~/components/NotFound";
import { kameleoonLandingParser } from "~/api/kameleoonParser";

export default async function Home() {
  const data = await fetchLandingEntriesBySlug();

  if (!data || data.length < 1) return <NotFound />;

  const page = data[0];
  const res = await fetch("http://localhost:3000/api/kameleoon/visitorCode");
  const visitorCode = await res.json();

  const parsedPage = await kameleoonLandingParser(page, visitorCode);

  return <PageRenderer data={parsedPage} />;
}
