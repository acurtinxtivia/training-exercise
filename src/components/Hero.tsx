import cn from 'classnames'

import { TypeHeroImageFields } from "../../types/contentful";
import Link from "./Link";
import Heading from "./Heading";

const alignmentClasses = {
    'Right': 'items-end',
    'Left': 'items-start',
    'Center': 'items-center',
}

const textAlignClasses = {
    'Right': 'text-right',
    'Left': 'text-left',
    'Center': 'text-center'
}

const Hero = ({ fields }: { fields: TypeHeroImageFields }) => {
    const alignmentClassName = fields?.sectionAlignment ? alignmentClasses[fields?.sectionAlignment] : ''
    const textAlignClassName = fields?.textAlignment ? textAlignClasses[fields.textAlignment] : ''

    return (
        <section 
            className={`w-full relative pt-40 pb-64 px-8 bg-bottom flex justify-center`}
            style={{ backgroundImage: `url('https:${fields.image.fields.image.fields.file.url}')` }}
        >
            {fields.darkenImage && (
                <div className='absolute top-0 left-0 w-full h-full bg-black/30 z-0' />
            )}
            <div className={cn(`w-full flex flex-col gap-6 z-10`, alignmentClassName, textAlignClassName)} style={{ maxWidth: fields.contentMaxWidth }}>
                <Heading 
                    size="h1"
                    color={fields.textColor?.value}
                    className="font-bold max-w-[500px]"
                >
                    {fields.headline}
                </Heading>
                {fields.actions && (<div className={`flex ${fields.actionAlignment === 'Vertical' ? 'flex-col': ''} gap-6`}> 
                    {fields.actions?.map((action) => (
                        <Link fields={action.fields} key={action.sys.id} />
                    ))}
                </div>)}
            </div>
        </section>
    )
}

export default Hero
