import { TypePageLanding } from "../../types/contentful-types";
import { getKameleoonVariation } from "./kameleoonActions";
// export const kameleoonLandingParser = async (pages: TypePageLanding[]) => {
//   return await Promise.all(
//     pages.map(async (page) => {
//       const sections = await Promise.all(
//         page.fields.sections.map(async (section) => {
//           if (
//             section.sys.contentType.sys.id === "kameleoonVariationContainer"
//           ) {
//             const res = await fetch("http://localhost:3000/api/kameleoon", {
//               method: "POST",
//               body: JSON.stringify(section),
//             });
//             const variation = await res.json();
//             return variation;
//           }
//           return section;
//         })
//       );

//       page.fields.sections = sections;
//       return page;
//     })
//   );
// };

export const kameleoonLandingParser = async (pages: TypePageLanding[]) => {
  return await Promise.all(
    pages.map(async (page) => {
      const sections = await Promise.all(
        page.fields.sections.map(async (section) => {
          if (
            section.sys.contentType.sys.id === "kameleoonVariationContainer"
          ) {
            const variation = await getKameleoonVariation(section);
            return variation;
          }
          return section;
        })
      );

      page.fields.sections = sections;
      return page;
    })
  );
};
