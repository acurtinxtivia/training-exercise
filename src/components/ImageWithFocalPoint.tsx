import Image from "next/image";

import { TypeImageWithFocalPointFields } from "../../types/contentful-types";

const ImageWithFocalPoint = ({ fields, className = '' }: { fields: TypeImageWithFocalPointFields, className?: string }) => {
    return (
        <Image
            src={`https:${fields.image.fields.file?.url}`}
            alt={fields.altText}
            height={fields.image.fields.file?.details?.image.height || 200}
            width={fields.image.fields.file?.details?.image.width || 200}
            className={className}
        />
    )
}

export default ImageWithFocalPoint