import cn from 'classnames'

import type { TypeCardFields } from "../../types/contentful-types"
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
                        className='rounded-md w-full h-full text-[18px] md:text-[20px] lg:text-[22px]'
                    />
                )}
            </div>
            <div className='flex flex-col items-start gap-6 self-end pr-[9px]'>
                <div>
                    <Heading 
                        size={data.fields.titleSize} 
                        className="font-bold text-[18px] leading-[21px] md:text-[20px] md:leading-[24px] xl:text-[22px] xl:leading-[30px]"
                    >
                        {data.fields.title}
                    </Heading>
                    <hr className='w-[45px] h-[4px] bg-primary mt-[11px]' />
                </div>
                <p className='font-light leading-[24px] text-light-gray'>{data.fields.subText}</p>
            </div>
        </div>
    )
}

export default Card