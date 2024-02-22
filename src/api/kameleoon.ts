import {
  Environment,
  KameleoonClient,
  SDKConfigurationType,
} from "@kameleoon/nodejs-sdk";
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

export default kameleoonClient;
