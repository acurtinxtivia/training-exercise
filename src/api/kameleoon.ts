import {
  Environment,
  KameleoonClient,
  SDKConfigurationType,
  CredentialsType,
} from "@kameleoon/nodejs-sdk";

const clientId = process.env.KAMELEOON_CLIENT_ID || "";
const clientSecret = process.env.KAMELEOON_CLIENT_SECRET || "";
const siteCode = process.env.KAMELEOON_SITE_CODE_VERCEL || "";

const configuration: Partial<SDKConfigurationType> = {
  updateInterval: 2,
  environment: Environment.Production,
  domain: "http://localhost:3000",
};

let kameleoonClient = new KameleoonClient({
  siteCode,
  credentials: { clientId, clientSecret },
  configuration,
});

export default kameleoonClient;
