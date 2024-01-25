import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import cn from 'classnames'

import { TypeBannerFields } from "../../types/contentful"
import Heading from "./Heading"
import Link from './Link'

const sectionAlignmentClass = {
    Left: 'items-start',
    Right: 'items-end',
    Center: 'items-center'
}

const textAlignmentClass = {
    Left: 'text-left items-start md:items-center md:justify-start',
    Right: 'text-right items-end md:items-center md:justify-end',
    Center: 'text-center items-center'
}

const Banner = ({ fields }: { fields: TypeBannerFields }) => {
    let verticalPadding = fields.backgroundImage ? 5 : 2
    if (fields.increaseVerticalPadding) {
        const multiplier = parseInt(fields.increaseVerticalPadding.split('x')[1]) || 1
        verticalPadding = verticalPadding * multiplier
    }

    const sectionStyle: any = {
        maxWidth: fields.maxWidth,
        paddingTop: `${verticalPadding}rem`,
        paddingBottom: `${verticalPadding}rem`,
    }

    if (fields.backgroundColor) {
        sectionStyle.backgroundColor = fields.backgroundColor?.value
    }

    if (fields.backgroundImage) {
        sectionStyle.backgroundImage = `url(https:${fields.backgroundImage.fields.image.fields.file.url})`
    }

    const contentStyle = {
        maxWidth: fields.contentMaxWidth,
        color: fields.textColor?.value || 'inherit'
    }
    return (
        <section className="w-full flex justify-center pt-16">
            <div className={cn("relative w-full bg-pink-200 flex flex-col bg-cover bg-fixed px-4", sectionAlignmentClass[fields.sectionAlignment])} style={sectionStyle}>
                {fields.darkenImage && (
                    <div className='absolute top-0 left-0 w-full h-full bg-black/30 z-0' />
                )}
                <div className={cn("flex flex-col lg:flex-row gap-12 z-10", textAlignmentClass[fields.textAlignment || 'Center'])} style={contentStyle}>
                    <Heading size={fields.headlineSize} className="font-black whitespace-nowrap">{fields.headline}</Heading>
                    {fields.subText && (
                        <div className='h-full flex flex-col lg:flex-row items-center gap-5 lg:gap-4'>
                            <div className='border-t w-12 lg:border-t-0 lg:w-auto lg:border-r h-full'/>
                            <div className='text-2xl font-light'>
                                {documentToReactComponents(fields.subText)}
                            </div>
                        </div>
                    )}
                    {fields.actions && (
                        <div className='flex flex-col sm:flex-row gap-4'>
                            {fields.actions.map((action) => (
                                <Link fields={action.fields} key={action.sys.id} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Banner