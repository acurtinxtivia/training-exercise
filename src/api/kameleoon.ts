import {
  Environment,
  KameleoonClient,
  SDKConfigurationType,
  CredentialsType,
} from "@kameleoon/nodejs-sdk";
import { IncomingMessage, ServerResponse } from "http";
import { Socket } from "net";
import { headers } from "next/headers";
import { cookies } from "next/headers";
import { KameleoonVisitorCodeManager } from "@kameleoon/nextjs-visitor-code-manager";
import { KameleoonEventSource } from "@kameleoon/nodejs-event-source";

const clientId = process.env.KAMELEOON_CLIENT_ID || "";
const clientSecret = process.env.KAMELEOON_CLIENT_SECRET || "";
const siteCode = process.env.KAMELEOON_SITE_CODE_VERCEL || "";

const configuration: Partial<SDKConfigurationType> = {
  environment: Environment.Production,
  // domain: "http://localhost:3000",
};

let kameleoonClient = new KameleoonClient({
  siteCode: "u2g7ks0i9p",
  credentials: { clientId, clientSecret },
  configuration,
  externals: {
    visitorCodeManager: new KameleoonVisitorCodeManager(),
    eventSource: new KameleoonEventSource(),
  },
});

// export const getKameleoonVisitorCode = async () => {
//   await kameleoonClient.initialize();
//   const req = new IncomingMessage(new Socket());
//   const cookieHeader = headers().get("cookie");
//   if (cookieHeader) {
//     req.headers.cookie = cookieHeader;
//   }

//   const res = new ServerResponse(req);
//   const visitorCode = kameleoonClient.getVisitorCode({
//     request: req,
//     response: res,
//   });

//   cookies().set("kameleoonVisitorCode", visitorCode);

//   return visitorCode;
// };

// export const getKameleoonVariation = async (container: any) => {
//   await kameleoonClient.initialize();
//   const visitorCode = await getKameleoonVisitorCode();
//   // const visitorCode = "asdasdasdasd";

//   const featureKey = container?.fields.featureKey || "";
//   const variationKey = kameleoonClient.getFeatureFlagVariationKey(
//     visitorCode,
//     featureKey
//   );

//   const variationEntryId = container.fields?.meta[variationKey];
//   const variation = container.fields.variations.find(
//     (v: any) => v.sys.id === variationEntryId
//   );

//   return variation;
// };

export default kameleoonClient;
