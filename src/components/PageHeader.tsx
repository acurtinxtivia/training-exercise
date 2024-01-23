'use client'
import Image from "next/image"
import Link from "next/link"

import { TypeHeaderFields } from "../../types/contentful"
import ImageWithFocalPoint from "./ImageWithFocalPoint"

const PageHeader = ({data}: { data: { fields: TypeHeaderFields } }) => {
    const logo = data.fields.logo
    const navigationItems = data.fields.navigationMenu?.fields.navigationItems || []

    return (
        <header className="w-full ">
            <div className="w-full flex justify-center">
                <div className={`w-full max-w-[${data.fields.maxWidth}px] flex justify-between py-6`}>
                    <ImageWithFocalPoint fields={logo.fields} />
                </div>
            </div>
            <nav className="w-full bg-primary-dark flex justify-center py-4 text-white">
                <ul className={`w-full max-w-[${data.fields.maxWidth}px] flex gap-8 font-bold`}>
                    {navigationItems.map(item => (
                        <ul key={item.sys.id}>
                            <Link href={`/${item.fields.slug}`}>
                                {item.fields.label}
                            </Link>
                        </ul>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default PageHeader;
