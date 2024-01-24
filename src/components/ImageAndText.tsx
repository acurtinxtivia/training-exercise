import { documentToReactComponents} from '@contentful/rich-text-react-renderer'
import cn from 'classnames'

import type { TypeImageAndTextFields } from '../../types/contentful'
import ImageWithFocalPoint from "./ImageWithFocalPoint"
import Heading from './Heading'

const imagePositionClass = {
    Top: 'flex-col',
    Left: 'flex-col md:flex-row',
    Right: 'flex-col md:flex-row-reverse',
    Bottom: 'flex-col-reverse'
}

const ImageAndText = ({ fields }: { fields: TypeImageAndTextFields }) => {
    return (
        <section className="w-full flex justify-center pt-16">
            <div className={cn('px-8 flex gap-8', imagePositionClass[fields.imagePosition])} style={{ maxWidth: fields.maxWidth }}>
                <div className='flex-shrink-0'>
                    <ImageWithFocalPoint fields={fields.image.fields} />
                </div>
                <div className='flex flex-col gap-2 flex-grow-0'>
                    {fields.title && (
                        <Heading size={fields.titleSize || 'h2'} className='font-bold'>{fields.title}</Heading>
                    )}
                    <div>
                        {documentToReactComponents(fields.text)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageAndText