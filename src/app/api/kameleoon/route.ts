import { NextApiRequest } from "next";
import { NextRequest, NextResponse, userAgent } from "next/server";
import { cookies } from "next/headers";
import { ServerResponse } from "http";
import { BrowserType, Browser } from "@kameleoon/nodejs-sdk";

import kameleoonClient from "~/api/kameleoon";

export async function POST(req: NextApiRequest) {
  const res = new ServerResponse(req);

  try {
    const container = await req.json();
    await kameleoonClient.initialize();
    // const visitorCode = kameleoonClient.getVisitorCode({
    //   request: req,
    //   response: res,
    // });
    const visitorCode = kameleoonClient.getVisitorCode({
      cookies,
    });

    // cookies().set("kameleoonVisitorCode", visitorCode);

    // const { browser } = userAgent(req);
    // if (browser && browser.name && browser.version) {
    //   const browserName = browser.name as keyof typeof BrowserType;
    //   const browserData = new Browser(
    //     BrowserType[browserName],
    //     parseInt(browser.version)
    //   );

    //   kameleoonClient.addData(visitorCode, browserData);
    //   kameleoonClient.flush(visitorCode);
    // }

    const featureKey = container?.fields.featureKey || "";
    const variationKey = kameleoonClient.getFeatureFlagVariationKey(
      visitorCode,
      featureKey
    );

    const variationEntryId = container.fields?.meta[variationKey];
    const variation = container.fields.variations.find(
      (v: any) => v.sys.id === variationEntryId
    );

    return NextResponse.json(variation);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function GET(req: NextApiRequest) {
  console.log("getting");
  return NextResponse.json(req.headers);
}
