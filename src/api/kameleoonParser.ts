import { TypePageLanding } from "../../types/contentful-types";
import { getKameleoonVariation } from "./kameleoonActions";

export const kameleoonLandingParser = async (
  page: TypePageLanding,
  visitorCode: string
) => {
  const sections = await Promise.all(
    page.fields.sections.map(async (section) => {
      if (section.sys.contentType.sys.id === "kameleoonVariationContainer") {
        const variation = await getKameleoonVariation(section, visitorCode);
        if (variation) {
          return variation;
        }
        return section;
      }
      return section;
    })
  );
  page.fields.sections = sections;
  return page;
};
