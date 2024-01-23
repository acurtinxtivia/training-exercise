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

const Hero = ({ data }: { data: { fields: TypeHeroImageFields }}) => {
    const alignmentClassName = data.fields?.sectionAlignment ? alignmentClasses[data.fields?.sectionAlignment] : ''
    const textAlignClassName = data.fields?.textAlignment ? textAlignClasses[data.fields.textAlignment] : ''

    return (
        <section className={`w-full relative pt-32 pb-40 bg-[url('https:${data.fields.image.fields.image.fields.file.url}')] bg-cover bg-center flex justify-center`}>
            {data.fields.darkenImage && (
                <div className='absolute top-0 left-0 w-full h-full bg-black/30 z-0' />
            )}
            <div className={cn(`w-full flex flex-col gap-6 z-10`, alignmentClassName, textAlignClassName)} style={{ maxWidth: data.fields.contentMaxWidth }}>
                <Heading 
                    size="h1"
                    color={data.fields.textColor?.value}
                    className="font-bold max-w-[500px]"
                >
                    {data.fields.headline}
                </Heading>
                {data.fields.actions && (<div className={`flex ${data.fields.actionAlignment === 'Vertical' ? 'flex-col': ''} gap-4`}> 
                    {data.fields.actions?.map((action) => (
                        <Link fields={action.fields} key={action.sys.id} />
                    ))}
                </div>)}
            </div>
        </section>
    )
}

export default Hero
