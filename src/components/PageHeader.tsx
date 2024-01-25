'use client'
import { useState } from 'react'

import { TypeHeaderFields } from "../../types/contentful"
import ImageWithFocalPoint from "./ImageWithFocalPoint"
import NavBar from "./NavBar"
import MobileNav from './MobileNav'
import BarsIcon from './icons/BarsIcon'
import ArrowLeftIcon from './icons/ArrowLeftIcon'

const PageHeader = ({ fields }: { fields: TypeHeaderFields }) => {
    const [navOpen, setNavOpen] = useState(false)
    const logo = fields.logo

    return (
        <header className="w-full">
            <div className="w-full flex justify-center px-4">
                <div className="w-full flex justify-between py-6" style={{ maxWidth: fields.maxWidth}}>
                    <div className="flex gap-4">
                        <button className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
                            {navOpen 
                                ? (<ArrowLeftIcon className='h-10 w-10'/>) 
                                : (<BarsIcon className='h-10 w-10'/>)
                            }
                        </button>
                        <ImageWithFocalPoint fields={logo.fields} />
                    </div>
                </div>
            </div>
            <div className='relative'>
            {navOpen && (
                <MobileNav
                    fields={fields.navigationMenu?.fields}
                    maxWidth={fields.maxWidth}
                />
            )}
            <NavBar 
                fields={fields.navigationMenu?.fields}
                maxWidth={fields.maxWidth}
                />
            </div>
        </header>
    )
}

export default PageHeader;
