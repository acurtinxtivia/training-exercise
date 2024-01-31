'use client'
import { useState, type TouchEvent } from 'react'
import cn from 'classnames'

import { TypeSetOfTestimonialsFields, TypeTestimonial } from "../../types/contentful-types"
import Heading from "./Heading"
import Testimonial from "./Testimonial"
import ChevronLeftIcon from './icons/ChevronLeftIcon'
import ChevronRightIcon from './icons/ChevronRightIcon'

const SetOfTestimonials = ({ fields }: { fields: TypeSetOfTestimonialsFields }) => {
    const [testimonials, setTestimonials] = useState<TypeTestimonial[]>(fields.testimonials || [])
    const [scrollingLeft, setScrollingLeft] = useState(false)
    const [scrollingRight, setScrollingRight] = useState(false)
    const [swipeXStart, setSwipeXStart] = useState(0);
    const [swipeXEnd, setSwipeXEnd] = useState(0);

    const scrollingClasses = {
        'animate-scroll-left': scrollingLeft,
        'animate-scroll-right': scrollingRight,
    }

    const scrollNext = () => {
        setScrollingRight(true)
        setTestimonials((prev: TypeTestimonial[]) => {
            const [first, ...rest] = prev
            return [...rest, first]
        })
        
        setTimeout(() => {
            setScrollingRight(false)
        }, 300)
    }

    const scrollPrev = () => {
        setScrollingLeft(true)
        setTestimonials((prev: TypeTestimonial[]) => (
            [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]
        ))

        setTimeout(() => {
            setScrollingLeft(false)
        }, 300)
    }

    const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        setSwipeXStart(e.touches[0].clientX)
    }

    const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        setSwipeXEnd(e.touches[0].clientX)
    }

    const onTouchEnd = () => {
        const delta = swipeXEnd - swipeXStart
        if (delta > 0) {
            scrollPrev()
        }
        if (delta < 0) {
            scrollNext()
        }
    }

    return (
        <section className="w-full flex justify-center pt-[68px] pb-[50px]">
            <div className="w-full flex flex-col items-center" style={{ maxWidth: fields.maxWidth }}>
                <Heading 
                    size={fields.titleSize} 
                    className='font-black pb-[26px] text-[28px] md:text-[36px] lg:text-[46px]'
                >
                    {fields.title}
                </Heading>
                <hr className='w-[50px] lg:w-[68px] h-[3px] bg-primary mb-[40px] md:mb-[60px]' />
                <div className='w-full flex justify-center'>
                    <button onClick={scrollPrev} className='group hidden md:block'>
                        <ChevronLeftIcon className='h-[70px] text-silver group-active:text-primary' strokeWidth={0.4} />
                    </button>
                    <div 
                        className='w-full sm:max-w-[450px] md:max-w-[670px] lg:max-w-[890px] xl:max-w-none flex justify-center md:justify-normal overflow-x-hidden'
                        onTouchStart={onTouchStart}    
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <div className={cn(scrollingClasses, 'translate-x-[-100%]')}>
                            <Testimonial fields={testimonials[testimonials.length - 1].fields} />
                        </div>
                        {testimonials.map((testimonial) => (
                            <div className={cn(scrollingClasses, 'translate-x-[-100%]')} key={testimonial.sys.id}>
                                <Testimonial fields={testimonial.fields} />
                            </div>
                        ))}
                    </div>
                    <button onClick={scrollNext} className='group hidden md:block'>
                        <ChevronRightIcon className='h-[70px] stroke-silver group-active:text-primary' strokeWidth={0.4} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SetOfTestimonials