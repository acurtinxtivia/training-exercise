import { documentToReactComponents} from '@contentful/rich-text-react-renderer'

import { TypeTestimonialFields } from "../../types/contentful-types"
import ImageWithFocalPoint from './ImageWithFocalPoint'

const Testimonial = ({ fields }: { fields: TypeTestimonialFields }) => {

    return (
        <div
            className="sm:max-w-[390px] md:max-w-[319px] lg:max-w-[286px] xl:max-w-[308px] mx-[10px] md:mr-[30px] md:ml-0 lg:mr-[15px] lg:ml-0 xl:mr-[66px] xl:ml-0"
            style={{ width: 'calc(100vw - 90px)' }}
        >
            <div className='flex flex-col items-center justify-between shadow-light border border-off-white/70 px-[5px] pt-[40px] pb-[30px] rounded-[5px] text-center gap-[22px]'>
                <div className='w-full flex justify-center items-center gap-[20px]'>
                    <div className='border-b scale-y-[0.3] border-light-gray/30 w-[66px]' />
                    <ImageWithFocalPoint fields={fields.image.fields} className='h-20 w-20 object-cover rounded-full'/>
                    <div className='border-b scale-y-[0.3] border-light-gray/30 w-[66px]' />
                </div>
                <em className='text-light-gray font-light leading=[21px] px-[30px]'>
                    {documentToReactComponents(fields.testimonial)}
                </em>
                <div>
                    <strong>{fields.name}</strong>
                    <p className='text-extra-light-gray'>{`(${fields.position})`}</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial