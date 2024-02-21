"use client";
import NextLink from "next/link";

import { TypeLinkFields } from "../../types/contentful-types";
import Button from "./Button";

const Link = ({ fields }: { fields: TypeLinkFields }) => {
  const onClick = async () => {
    await fetch("/api/kameleoon/conversion/331130", {
      method: "POST",
    });
  };

  const link = (
    <NextLink href={`/${fields.href}`} target={fields.target}>
      {fields.label}
    </NextLink>
  );

  return fields.displayStyle === "Button" ? (
    <Button theme={fields.theme} onClick={onClick}>
      {link}
    </Button>
  ) : (
    link
  );
};

export default Link;
