import cn from 'classnames'

import type { TypeCardFields } from "../../types/contentful"
import Heading from "./Heading"
import ImageWithFocalPoint from './ImageWithFocalPoint'

const imagePositionClass = {
    Top: 'flex-col items-center',
    Bottom: 'flex-col-reverse items-start',
    Left: 'flex-row',
    Right: 'flex-row-reverse'
}

const Card = ({ data }: { data: { fields: TypeCardFields } }) => {
    return (
        <div className={cn('flex flex-wrap gap-7 w-full', imagePositionClass[data.fields.imagePosition || 'Top'])}>
            <div className='w-full'>
                {data.fields.image && (
                    <ImageWithFocalPoint 
                        fields={data.fields.image.fields} 
                        className='rounded-md w-full h-full'
                    />
                )}
            </div>
            <div className='flex flex-col items-start gap-6 self-end'>
                <Heading size={data.fields.titleSize} className="font-bold tracking-wide">{data.fields.title}</Heading>
                <p className='font-light tracking-wide text-light-gray'>{data.fields.subText}</p>
            </div>
        </div>
    )
}

export default Card