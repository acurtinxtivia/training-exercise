'use client'
import { useRef } from 'react'
import { TypeSetOfTestimonialsFields } from "../../types/contentful"
import Heading from "./Heading"
import Testimonial from "./Testimonial"
import ChevronLeftIcon from './icons/ChevronLeftIcon'
import ChevronRightIcon from './icons/ChevronRightIcon'

const SetOfTestimonials = ({ fields }: { fields: TypeSetOfTestimonialsFields }) => {
    const scrollArea = useRef<HTMLDivElement>(null)

    const scroll = (amt: number) => {
        if (scrollArea.current) {
            scrollArea.current.scrollLeft += amt
        }
    }

    return (
        <section className="w-full flex justify-center pt-16">
            <div className="w-full flex flex-col items-center" style={{ maxWidth: fields.maxWidth }}>
                <Heading size={fields.titleSize} className='font-bold pb-8'>{fields.title}</Heading>
                <div className='w-full flex items-center gap-2'>
                    <button onClick={() => scroll(-250)}><ChevronLeftIcon className='h-16 w-16 text-gray-400' /></button>
                    <div className="w-full flex flex-no-wrap overflow-x-scroll hide-scrollbar scroll-smooth gap-12" ref={scrollArea}>
                        {fields.testimonials?.map((testimonial) => (
                            // <div key={testimonial.sys.id}>{testimonial.fields.name}</div>
                            <Testimonial key={testimonial.sys.id} fields={testimonial.fields} />
                            ))}
                    </div>
                    <button onClick={() => scroll(250)}><ChevronRightIcon className='h-16 w-16 text-gray-400' /></button>
                </div>
            </div>
        </section>
    )
}

export default SetOfTestimonials