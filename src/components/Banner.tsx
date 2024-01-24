import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { TypeBannerFields } from "../../types/contentful"
import Heading from "./Heading"

const Banner = ({ fields }: { fields: TypeBannerFields }) => {
    const sectionStyle: any = {
        maxWidth: fields.maxWidth,
    }

    if (fields.backgroundColor) {
        sectionStyle.backgroundColor = fields.backgroundColor?.value
    }

    if (fields.backgroundImage) {
        sectionStyle.backgroundImage = `url(http:${fields.backgroundImage.fields.image.fields.file.url})`
    }

    const contentStyle = {
        maxWidth: fields.contentMaxWidth,
        color: fields.textColor?.value || 'inherit'
    }
    return (
        <section className="w-full flex justify-center">
            <div className="w-full bg-pink-200 flex flex-col items-center bg-cover bg-fixed py-12" style={sectionStyle}>
                <div className="flex flex-col items-center gap-4" style={contentStyle}>
                    <Heading size={fields.headlineSize} className="font-bold">{fields.headline}</Heading>
                    <p>
                        {documentToReactComponents(fields.subText)}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Banner