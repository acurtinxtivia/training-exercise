import cn from 'classnames'

import type { TypeCardFields } from "../../types/contentful"
import Heading from "./Heading"
import ImageWithFocalPoint from './ImageWithFocalPoint'

const imagePositionClass = {
    Top: 'flex-col items-start',
    Bottom: 'flex-col-reverse items-start',
    Left: 'flex-row',
    Right: 'flex-row-reverse'
}

const Card = ({ data }: { data: { fields: TypeCardFields } }) => {
    return (
        <div className={cn('flex gap-6', imagePositionClass[data.fields.imagePosition || 'Top'])}>
            {data.fields.image && (
                <ImageWithFocalPoint fields={data.fields.image.fields} className='w-full rounded-md'/>
            )}
            <div className='flex flex-col items-start gap-4'>
                <Heading size={data.fields.titleSize} className="font-bold">{data.fields.title}</Heading>
                <p>{data.fields.subText}</p>
            </div>
        </div>
    )
}

export default Card