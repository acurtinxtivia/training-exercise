'use client'
import { useState } from 'react'
import cn from 'classnames'

import ChevronLeftIcon from "./icons/ChevronLeftIcon"
import ChevronRightIcon from "./icons/ChevronRightIcon"
import Hero from './Hero'

const Carousel = ({ fields }: { fields: any }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const slides = fields.slides;
    const incrementSlider = (amt: number) => {
        let newIndex = currentIndex + amt;
        if (newIndex > slides.length - 1) newIndex = 0
        if (newIndex < 0) newIndex = slides.length - 1
        setCurrentIndex(newIndex)
    }

    return (
        <section className="w-full flex justify-center relative">
            <div className='w-full overflow-hidden flex'>
                {slides.map((slide: any, idx: number) => (
                    <div key={slide.sys.id} className={cn('w-full flex-shrink-0', { 'hidden': currentIndex !== idx })}>
                        <Hero fields={slide.fields}  />
                    </div>
                ))}
            </div>
            <button className="absolute top-[50%] left-0 -translate-y-[50%] bg-black/20" onClick={() => incrementSlider(-1)}>
                <ChevronLeftIcon className="h-10 text-white" />
            </button>
            <button className="absolute top-[50%] right-0 -translate-y-[50%] bg-black/20" onClick={() => incrementSlider(1)}>
                <ChevronRightIcon className="h-10 text-white" />
            </button>
        </section>
    )
}

export default Carousel