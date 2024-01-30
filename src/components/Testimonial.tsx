import { documentToReactComponents} from '@contentful/rich-text-react-renderer'

import { TypeTestimonialFields } from "../../types/contentful"
import ImageWithFocalPoint from './ImageWithFocalPoint'

const Testimonial = ({ fields }: { fields: TypeTestimonialFields }) => {

    return (
        <div
            className="min-w-[390px] md:min-w-[319px] lg:min-w-[286px] xl:min-w-[308px] mr-[20px] md:mr-[30px] lg:mr-[15px] xl:mr-[66px]"
        >
            <div className='flex flex-col items-center justify-between shadow-light border border-off-white/70 px-[30px] pt-[40px] pb-[30px] rounded-[5px] text-center gap-[22px]'>
                <div className='w-full flex justify-around items-center gap-4'>
                    <div className='border-b scale-y-[0.3] border-light-gray/30 w-full' />
                    <ImageWithFocalPoint fields={fields.image.fields} className='h-20 w-20 object-cover rounded-full'/>
                    <div className='border-b scale-y-[0.3] border-light-gray/30 w-full' />
                </div>
                <em className='text-light-gray font-light leading=[21px]'>
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