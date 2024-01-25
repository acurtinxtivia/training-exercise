import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cn from 'classnames'

import ChevronDownIcon from '../icons/ChevronDownIcon'
import ChevronUpIcon from '../icons/ChevronUpIcon'

const MobileNavItem = ({ item }: { item: any }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()
    const currentPageSlug = pathname.split('/')[1]
    const isCurrentPage = currentPageSlug === item.fields.slug
    const colorClass = (isCurrentPage || menuOpen) ? 'bg-primary text-white' : 'text-primary'
    
    return (
        <li key={item.sys.id} className={cn('w-full flex flex-col')}>
            <div className={cn('w-full flex justify-between items-center px-[16px] py-3', colorClass)}>
                <Link href={`/${item.fields.slug}`}>
                    {item.fields.label}
                </Link>
                {item.fields.submenus && (
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen
                            ? <ChevronUpIcon className="h-4 w-4" />
                            : <ChevronDownIcon className="h-4 w-4" />
                        }
                    </button>
                )}
            </div>
            {menuOpen && item.fields.submenus && (
                <div className='flex flex-col'>
                    {item.fields.submenus.map((submenu) => (
                        <div className='flex flex-col bg-white text-primary' key={submenu.sys.id}>
                            {submenu.fields.title && (
                                <p className='px-[20px] pt-3 text-black font-normal'>{submenu.fields.title}</p>
                            )}
                            <ul className='flex flex-col'>
                                {submenu.fields.navigationItems.map((item) => {
                                     const colorClass = currentPageSlug === item.fields.slug ? 'bg-primary text-white' : 'text-primary'
                                     const paddingClass = submenu.fields.title ? 'px-[35px]' : 'px-[20px]'
                                     return (
                                        <Link href={`/${item.fields.slug}`} className={cn('py-3', paddingClass, colorClass)} key={item.sys.id}>
                                            {item.fields.label}
                                        </Link>
                                    )
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </li>
    )
}

export default MobileNavItem