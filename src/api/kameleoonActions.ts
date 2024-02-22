"use server";
import { IncomingMessage, ServerResponse } from "http";
import { Socket } from "net";
import { headers, cookies } from "next/headers";

import kameleoonClient from "./kameleoon";

export async function getKameleoonVisitorCode() {
  await kameleoonClient.initialize();

  const visitorCode = kameleoonClient.getVisitorCode({
    cookies: cookies,
  });

  return visitorCode;
}

export async function getKameleoonVariation(
  container: any,
  visitorCode: string
) {
  try {
    await kameleoonClient.initialize();

    const featureKey = container?.fields.featureKey || "";
    const variationKey = kameleoonClient.getFeatureFlagVariationKey(
      visitorCode,
      featureKey
    );

    const variationEntryId = container.fields?.meta[variationKey];
    const variation = container.fields.variations.find(
      (v: any) => v.sys.id === variationEntryId
    );

    if (variation) {
      return variation;
    }

    return container;
  } catch (error) {
    console.error(error);
    return container;
  }
}
