'use client'
import { useRef, useState, useEffect } from 'react'
import cn from 'classnames'

import { TypeSetOfTestimonialsFields } from "../../types/contentful"
import Heading from "./Heading"
import Testimonial from "./Testimonial"
import ChevronLeftIcon from './icons/ChevronLeftIcon'
import ChevronRightIcon from './icons/ChevronRightIcon'

const SetOfTestimonials = ({ fields }: { fields: TypeSetOfTestimonialsFields }) => {
    const scrollArea = useRef<HTMLDivElement>(null)
    const [testimonials, setTestimonials] = useState<any>(fields.testimonials)
    const [scrollingLeft, setScrollingLeft] = useState(false)
    const [scrollingRight, setScrollingRight] = useState(false)

    const scrollingClasses = {
        'animate-scroll-left': scrollingLeft,
        'animate-scroll-right': scrollingRight,
        'translate-x-[-100%]': !scrollingLeft && !scrollingRight,
    }

    const scrollNext = () => {
        setScrollingRight(true)
        setTestimonials(prev => {
            const [first, ...rest] = prev
            return [...rest, first]
        })
        
        setTimeout(() => {
            setScrollingRight(false)
        }, 300)
    }

    const scrollPrev = () => {
        setScrollingLeft(true)
        setTestimonials(prev => (
            [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]
        ))

        setTimeout(() => {
            setScrollingLeft(false)
        }, 300)
    }

    useEffect(() => {
        if (scrollArea.current) {
            let swipeXStart = 0
            let swipeXEnd = 0
            const onTouchStart = (e) => {
                swipeXStart = e.touches[0].clientX
            }

            const onTouchMove = (e) => {
                e.preventDefault()
                swipeXEnd = e.touches[0].clientX
            }

            const onTouchEnd = () => {
                const delta = swipeXEnd - swipeXStart

                if (delta > 0) {
                    console.log('swiped right')
                    scrollPrev()
                }
                if (delta < 0) {
                    console.log('swiped left')
                    scrollNext()
                }
            }
            scrollArea.current.addEventListener('touchstart', onTouchStart)
            scrollArea.current.addEventListener('touchmove', onTouchMove)
            scrollArea.current.addEventListener('touchend', onTouchEnd)

            return () => {
                scrollArea.current?.removeEventListener('touchstart', onTouchStart)
                scrollArea.current?.removeEventListener('touchmove', onTouchMove)
                scrollArea.current?.removeEventListener('touchend', onTouchEnd)
            }
        }
    }, [scrollArea])

    return (
        <section className="w-full flex justify-center pt-[68px] pb-[50px]">
            <div className="w-full flex flex-col items-center" style={{ maxWidth: fields.maxWidth }}>
                <Heading 
                    size={fields.titleSize} 
                    className='font-black pb-[26px] text-[28px] md:text-[36px] lg:text-[46px]'
                >
                    {fields.title}
                </Heading>
                <div className='w-[50px] lg:w-[68px] h-[3px] bg-primary mb-[40px] md:mb-[60px]' />
                <div className='relative w-full flex items-center mx-auto max-w-[480px] pb-[35px] sm:max-w-none sm:mx-none md:w-[750px] lg:w-[970px] xl:w-[1200px]'>
                    <button onClick={scrollPrev} className='group hidden md:block w-[72px]'>
                        <ChevronLeftIcon className='w-20 h-20 text-silver group-active:text-primary' strokeWidth={0.4} />
                    </button>
                    <div
                        className="w-full flex flex-no-wrap overflow-x-hidden"
                        ref={scrollArea}
                    >
                        <div className={cn(scrollingClasses)}>
                            <Testimonial fields={testimonials[testimonials.length - 1].fields} />
                        </div>
                        {testimonials.map((testimonial) => (
                            <div className={cn(scrollingClasses)} key={testimonial.sys.id}>
                                <Testimonial fields={testimonial.fields} />
                            </div>
                        ))}
                        <div className={cn(scrollingClasses)}>
                            <Testimonial fields={testimonials[0].fields} />
                        </div>
                    </div>
                    <button onClick={scrollNext} className='group hidden md:block w-[72px]'>
                        <ChevronRightIcon className='h-20 w-20 stroke-silver group-active:text-primary' strokeWidth={0.4} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SetOfTestimonials