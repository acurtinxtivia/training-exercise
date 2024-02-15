export const kameleoonLandingParser = async (pages: any) => {
  return await Promise.all(
    pages.map(async (page: any) => {
      const sections = await Promise.all(
        page.fields.sections.map(async (section: any) => {
          if (
            section.sys.contentType.sys.id === "kameleoonVariationContainer"
          ) {
            const res = await fetch("http://localhost:3000/api/kameleoon", {
              method: "POST",
              body: JSON.stringify(section),
            });
            const variation = await res.json();
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
