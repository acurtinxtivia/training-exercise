'use client'
import { useState, useEffect } from 'react'
import cn from 'classnames'

import type { TypeCarouselFields, TypeHeroImage } from '../../types/contentful-types'
import ChevronLeftIcon from "./icons/ChevronLeftIcon"
import ChevronRightIcon from "./icons/ChevronRightIcon"
import Hero from './Hero'

type Direction = 'next' | 'prev';

const Carousel = ({ fields }: { fields: TypeCarouselFields }) => {
    const slides = fields.slides;
    const slideDuration = fields.slideDuration || 5
    const [currentIndex, setCurrentIndex] = useState(slides.length - 1)
    const [isSliding, setIsSliding] = useState(false)
    const [direction, setDirection] = useState<Direction>('next')
    const [autoSlideOn, setAutoSlideOn] = useState<boolean>(fields.autoSlide)

    const slidingClasses = slides.length > 1 ? {
        'transition-all duration-500': isSliding,
        'translate-x-[-200%]': direction === 'next' && isSliding,
        'translate-x-0': direction === 'prev' && isSliding,
        'translate-x-[-100%]': !isSliding
    } : ''

    const getOrder = (index: number) => {
        if (index - currentIndex < 0) {
            return slides.length - Math.abs(index - currentIndex)
        }

        return index - currentIndex
    }

    const incrementSlider = (direction: Direction, position: number) => {
        setIsSliding(true)
        setDirection(direction)

        setTimeout(() => {
            setCurrentIndex(position)
            setIsSliding(false)
        }, 500)
    }

    const slideNext = () => {
        setAutoSlideOn(false)
        incrementSlider('next', currentIndex === slides.length - 1 ? 0 : currentIndex + 1)
    }

    const slidePrev = () => {
        setAutoSlideOn(false)
        incrementSlider('prev', currentIndex === 0 ? slides.length - 1 : currentIndex - 1)
    }

    useEffect(() => {
        if (autoSlideOn) {
            const timer = setTimeout(() => {
                incrementSlider('next', currentIndex === slides.length - 1 ? 0 : currentIndex + 1)
            }, slideDuration * 1000)

            return () => {
                clearTimeout(timer)
            }
        }
    }, [autoSlideOn, currentIndex])

    return (
        <section className="w-full flex justify-center relative">
            <div className='w-full overflow-hidden flex'>
                {slides.map((slide: TypeHeroImage, idx: number) => (
                    <div key={slide.sys.id} className={cn('w-full flex-shrink-0', slidingClasses)} style={{ order: getOrder(idx)}}>
                        <Hero fields={slide.fields}  />
                    </div>
                ))}
                {slides.length === 2 && (
                    <div className={cn('w-full flex-shrink-0', slidingClasses)} style={{ order: 2 }}>
                        <Hero fields={slides[currentIndex].fields}  />
                    </div>
                )}
            </div>
            <button className="absolute top-[50%] left-0 -translate-y-[50%] bg-black/20 hover:bg-black/30 transition-all duration-300" disabled={isSliding} onClick={slidePrev}>
                <ChevronLeftIcon className="h-10 text-white" />
            </button>
            <button className="absolute top-[50%] right-0 -translate-y-[50%] bg-black/20 hover:bg-black/30 transition-all duration-300" disabled={isSliding} onClick={slideNext}>
                <ChevronRightIcon className="h-10 text-white" />
            </button>
        </section>
    )
}

export default Carousel