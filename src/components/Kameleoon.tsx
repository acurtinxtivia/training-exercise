// "use client";
// import { useState, useEffect } from "react";

import { TypePageLandingFields } from "../../types/contentful-types";
import SectionRenderer from "./SectionRenderer";

type Section = TypePageLandingFields["sections"][number];

interface KameleoonProps {
  section: Section;
}

const Kameleoon = ({ section }: KameleoonProps) => {
  // const [component, setComponent] = useState<Section>();

  // useEffect(() => {
  //   const getKameleoonResponse = async () => {
  //     const resp = await fetch("/api/kameleoon", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(section),
  //     });

  //     const variation = await resp.json();
  //     setComponent(variation);
  //   };
  //   getKameleoonResponse();
  // }, []);

  // if (component) {
  //   return (
  //     <div className="w-full py-8">
  //       <SectionRenderer section={component} />
  //     </div>
  //   );
  // }
  return null;
};

export default Kameleoon;
