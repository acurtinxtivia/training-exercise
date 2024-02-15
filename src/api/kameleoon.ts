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
  domain:
    "https://training-exercise-dgl3-vp1fr9640-alex-curtins-projects.vercel.app/",
};

let kameleoonClient = new KameleoonClient({
  siteCode,
  credentials: { clientId, clientSecret },
  configuration,
});

export default kameleoonClient;
