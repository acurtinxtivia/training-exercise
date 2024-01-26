import cn from 'classnames'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { TypeHeroImageFields } from "../../types/contentful";
import Link from "./Link";
import Heading from "./Heading";
import ImageWithFocalPoint from './ImageWithFocalPoint';

const alignmentClasses = {
    'Right': 'md:items-end',
    'Left': 'md:items-start',
    'Center': 'items-center',
}

const textAlignClasses = {
    'Right': 'md:text-right',
    'Left': 'md:text-left',
    'Center': 'text-center'
}

const Hero = ({ fields }: { fields: TypeHeroImageFields }) => {
    const alignmentClassName = fields?.sectionAlignment ? alignmentClasses[fields?.sectionAlignment] : ''
    const textAlignClassName = fields?.textAlignment ? textAlignClasses[fields.textAlignment] : ''
    
    return (
        <section 
            className='w-full relative'>
            <div className='w-full h-[416px] sm:h-[310px] md:h-[461px] xl:h-[591px]'>
                <ImageWithFocalPoint fields={fields.image.fields} className='h-full object-cover' />
            </div>
            {fields.darkenImage && (
                <div className='absolute top-0 left-0 w-full h-full bg-black/30 z-0' />
            )}
            <div className="absolute w-full h-full top-0 left-0 flex justify-center pt-[68px] md:pt-[125px] xl:pt-[152px]">
                <div className={cn(`w-full flex flex-col gap-4 z-10 px-[11vw] xl:px-4 text-center`, alignmentClassName, textAlignClassName)} style={{ maxWidth: fields.contentMaxWidth }}>
                    <div style={{ maxWidth: fields.headlineMaxWidth || 'unset' }}>
                        <Heading 
                            size="h1"
                            color={fields.textColor?.value}
                            className="font-black text-[36px] leading-[1] md:text-[40px] xl:text-[55px] xl:leading-[65px]"
                            >
                            {documentToReactComponents(fields.headlineRich)}
                        </Heading>
                    </div>
                    {fields.subText && (
                        <div style={{ color: fields?.textColor.value || 'inherit' }} className='text-xl font-light text-[18px] lg:text-[22px] lg:leading-[36px]'>
                            {documentToReactComponents(fields.subText)}
                        </div>
                    )}
                    {fields.actions && (<div className={`flex ${fields.actionAlignment === 'Vertical' ? 'flex-col': ''} justify-center flex-wrap gap-6 pt-[10px]`}> 
                        {fields.actions?.map((action) => (
                            <Link fields={action.fields} key={action.sys.id} />
                        ))}
                    </div>)}
                </div>
            </div>
        </section>
    )
}

export default Hero
