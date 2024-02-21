import { cookies, headers } from "next/headers";

import { fetchLandingEntriesBySlug } from "~/api";
import { getKameleoonVisitorCode } from "~/api/kameleoonActions";

import PageRenderer from "~/components/PageRenderer";
import NotFound from "~/components/NotFound";

export default async function Home() {
  const data = await fetchLandingEntriesBySlug();
  // console.log(headers().get("cookie"));
  // const visitorCode = await getKameleoonVisitorCode();
  const res = fetch("http://localhost:3000", {
    method: "POST",
    body: JSON.stringify(data[0]),
  });
  // async function getVisitorCode() {
  //   "use server";
  //   const code = await getKameleoonVisitorCode();
  //   cookies().set("kameleoonVisitorCode", code);
  // }
  // await getVisitorCode();
  if (!data) return <NotFound />;

  return <PageRenderer data={data[0]} />;
}
