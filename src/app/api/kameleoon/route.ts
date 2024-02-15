import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ServerResponse } from "http";

import kameleoonClient from "~/api/kameleoon";

export async function POST(req: NextApiRequest) {
  const res = new ServerResponse(req);
  try {
    const container = await req.json();
    await kameleoonClient.initialize();
    const visitorCode = kameleoonClient.getVisitorCode({
      request: req,
      response: res,
    });

    cookies().set("kameleoonVisitorCode", visitorCode);

    const featureKey = container?.fields.featureKey || "";
    const variationKey = kameleoonClient.getFeatureFlagVariationKey(
      visitorCode,
      featureKey
    );

    const variationEntryId = container.fields?.meta[variationKey];
    const variation = container.fields.variations.find(
      (v: any) => v.sys.id === variationEntryId
    );

    const response = NextResponse;

    return response.json(variation);
  } catch (error) {
    return NextResponse.json(error);
  }
}
