import Image from "next/image";

import { TypeImageWithFocalPointFields } from "../../types/contentful";

const ImageWithFocalPoint = ({ fields, className = '' }: { fields: TypeImageWithFocalPointFields, className?: string }) => {
    return (
        <Image
            src={`http:${fields.image.fields.file?.url}`}
            alt={fields.altText}
            height={fields.image.fields.file?.details.image.height}
            width={fields.image.fields.file?.details.image.width}
            className={className}
        />
    )
}

export default ImageWithFocalPoint