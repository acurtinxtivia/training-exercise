import { documentToReactComponents} from '@contentful/rich-text-react-renderer'

import { TypeTestimonialFields } from "../../types/contentful"

const Testimonial = ({ fields }: { fields: TypeTestimonialFields }) => {
    return (
        <div className="min-w-[300px] flex flex-col items-center justify-between shadow-md border px-8 py-12 rounded-md text-center gap-4">
            <em className='text-light-gray'>
                {documentToReactComponents(fields.testimonial)}
            </em>
            <div>
                <strong>{fields.name}</strong>
                <p className='text-extra-light-gray'>{`(${fields.location})`}</p>
            </div>
        </div>
    )
}

export default Testimonial