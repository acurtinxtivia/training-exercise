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
        <section className="w-full flex justify-center pt-[68px]">
            <div className="w-full flex flex-col items-center" style={{ maxWidth: fields.maxWidth }}>
                <Heading 
                    size={fields.titleSize} 
                    className='font-black pb-[26px] text-[28px] md:text-[36px] lg:text-[46px]'
                >
                    {fields.title}
                </Heading>
                <div className='w-[50px] lg:w-[68px] h-[3px] bg-primary mb-[40px] md:mb-[60px]' />
                <div className='w-full flex items-center gap-2 mx-auto max-w-[480px] sm:max-w-none sm:mx-none'>
                    <button onClick={() => scroll(-250)} className='group hidden sm:block'>
                        <ChevronLeftIcon className='w-20 h-20 text-silver group-active:text-primary' strokeWidth={0.4} />
                    </button>
                    <div className="w-full flex flex-no-wrap overflow-x-scroll hide-scrollbar scroll-smooth gap-[66px]" ref={scrollArea}>
                        {fields.testimonials?.map((testimonial) => (
                            <Testimonial key={testimonial.sys.id} fields={testimonial.fields} />
                            ))}
                    </div>
                    <button onClick={() => scroll(250)} className='group hidden sm:block'>
                        <ChevronRightIcon className='h-20 w-20 stroke-silver group-active:stroke-primary' strokeWidth={0.4} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SetOfTestimonials