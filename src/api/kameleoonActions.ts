"use server";
import { IncomingMessage, ServerResponse } from "http";
import { Socket } from "net";
import { headers, cookies } from "next/headers";

import kameleoonClient from "./kameleoon";

export async function getKameleoonVisitorCode() {
  await kameleoonClient.initialize();
  //   const req = new IncomingMessage(new Socket());
  //   const cookieHeader = headers().get("cookie");
  //   if (cookieHeader) {
  //     req.headers.cookie = cookieHeader;
  //   }

  //   const res = new ServerResponse(req);
  //   const visitorCode = kameleoonClient.getVisitorCode({
  //     cookies: cookie,
  //   });
  const visitorCode = kameleoonClient.getVisitorCode({
    cookies: cookies,
  });
  //   cookies().set("kameleoonVisitorCode", visitorCode);

  return visitorCode;
}

export async function getKameleoonVariation(container: any) {
  await kameleoonClient.initialize();
  //   const visitorCode = await getKameleoonVisitorCode();
  //   const visitorCode = cookies().get("kameleoonVisitorCode")?.value || "";
  const visitorCode = "asdasdad";

  const featureKey = container?.fields.featureKey || "";
  const variationKey = kameleoonClient.getFeatureFlagVariationKey(
    visitorCode,
    featureKey
  );

  const variationEntryId = container.fields?.meta[variationKey];
  const variation = container.fields.variations.find(
    (v: any) => v.sys.id === variationEntryId
  );

  return variation;
}
