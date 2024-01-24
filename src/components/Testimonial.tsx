import { documentToReactComponents} from '@contentful/rich-text-react-renderer'

import { TypeTestimonialFields } from "../../types/contentful"

const Testimonial = ({ fields }: { fields: TypeTestimonialFields }) => {
    return (
        <div className="min-w-[300px] flex flex-col items-center justify-between shadow-md border px-4 py-8 rounded-md text-center gap-4">
            <em>
                {documentToReactComponents(fields.testimonial)}
            </em>
            <div>
                <strong>{fields.name}</strong>
                <p>{`(${fields.location})`}</p>
            </div>
        </div>
    )
}

export default Testimonial