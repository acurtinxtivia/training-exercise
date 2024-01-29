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
    Left: 'text-center md:text-left items-start md:items-center md:justify-start',
    Right: 'text-center md:text-right items-end md:items-center md:justify-end',
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
            <div className={cn("relative w-full flex flex-col bg-cover bg-fixed px-4", sectionAlignmentClass[fields.sectionAlignment])} style={sectionStyle}>
                {fields.darkenImage && (
                    <div className='absolute top-0 left-0 w-full h-full bg-black/30 z-0' />
                )}
                <div className={cn("flex flex-col lg:flex-row items-center lg:gap-12 z-10", textAlignmentClass[fields.textAlignment || 'Center'])} style={contentStyle}>
                    <Heading 
                        size={fields.headlineSize} 
                        className="font-black whitespace-nowrap text-[28px] leading-[34px] md:text-[36px] md:leading-[43px] lg:text-[46px] lg:leading-[55px]"
                    >
                        {fields.headline}
                    </Heading>
                    {fields.subText && (
                        <div className='flex flex-col lg:flex-row items-center gap-5 lg:gap-4 mt-[10px]'>
                            <hr className='border-t w-12 lg:border-t-0 lg:w-auto lg:border-r lg:h-[46px] mt-[10px] lg:mt-0' />
                            <div className='font-light text-[16px] leading-[26px] md:text-[18px] md:leading-[29px] xl:text-[22px]'>
                                {documentToReactComponents(fields.subText)}
                            </div>
                        </div>
                    )}
                    {fields.actions && (
                        <div className='flex flex-col items-center sm:flex-row gap-4 mt-[30px] lg:mt-0'>
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