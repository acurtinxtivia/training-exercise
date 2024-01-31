import { documentToReactComponents} from '@contentful/rich-text-react-renderer'
import cn from 'classnames'

import type { TypeImageAndTextFields } from '../../types/contentful'
import ImageWithFocalPoint from "./ImageWithFocalPoint"
import Heading from './Heading'

const imagePositionClass = {
    Top: 'flex-col',
    Left: 'flex-col lg:flex-row',
    Right: 'flex-col lg:flex-row-reverse',
    Bottom: 'flex-col-reverse'
}

const imageSizeClass = {
    Top: 'w-full',
    Left: 'lg:w-[50%]',
    Right: 'lg:w-[50%]',
    Bottom: 'w-full'
}

const ImageAndText = ({ fields }: { fields: TypeImageAndTextFields }) => {
    return (
        <section className="w-full flex justify-center pt-[68px]">
            <div className={cn('px-4 flex justify-center gap-8 sm:w-[480px] md:w-[750px] lg:w-[970px] xl:w-full', imagePositionClass[fields.imagePosition])} style={{ maxWidth: fields.maxWidth }}>
                <div className={cn('flex-shrink-0', imageSizeClass[fields.imagePosition])}>
                    <ImageWithFocalPoint fields={fields.image.fields} className='w-full h-full max-h-[450px] object-cover' />
                </div>
                <div className='flex flex-col gap-2 flex-grow-0'>
                    {fields.title && (
                        <Heading size={fields.titleSize || 'h2'} className='font-bold'>{fields.title}</Heading>
                    )}
                    <div className='text-light-gray'>
                        {documentToReactComponents(fields.text)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageAndText