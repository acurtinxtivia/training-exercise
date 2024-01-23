import NextLink from "next/link"

import { TypeLinkFields } from "../../types/contentful"
import Button from "./Button"

const Link = ({ fields }: { fields: TypeLinkFields }) => {
    const link = (
        <NextLink href={`/${fields.href}`} target={fields.target}>
            {fields.label}
        </NextLink>
    )

    return fields.displayStyle === "Button" ? (
        <Button theme={fields.theme}>{link}</Button>
    ) : link;
}

export default Link