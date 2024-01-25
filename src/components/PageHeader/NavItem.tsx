import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import cn from 'classnames'

import ChevronDownIcon from "../icons/ChevronDownIcon"

const SubMenus = ({ submenus, menuOpen, stickyNav = false }: { submenus: any, menuOpen: boolean, stickyNav?: boolean }) => {
    const displayClass = 'hidden group-hover:flex'
    if (submenus.length > 1) {
        const topOffset = stickyNav ? 'top-[30px]' : 'top-[120px]'
        return (
            <div className={cn("fixed left-[50%] -translate-x-1/2 w-full max-w-[1200px] pt-10", displayClass, topOffset)}>
                <div className="bg-white w-full flex justify-between px-8 py-8 border">
                    {submenus.map((submenu) => (
                        <div className="flex flex-col text-light-gray" key={submenu.sys.id}>
                            {submenu.fields.title && <p className="font-normal">{submenu.fields.title}</p>}
                            <ul className="font-light min-w-[268px]">
                                {submenu.fields.navigationItems.map((item) => (
                                    <li key={item.sys.id} className="hover:text-primary px-2 py-2 whitespace-nowrap">
                                        <Link href={`/${item.fields.slug}`}>
                                            {item.fields.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    const submenu = submenus[0]
    return (
        <div className={cn("absolute top-[100%] pt-5 -left-[18px] hidden group-hover:flex", displayClass)}>
            <div className="bg-white border">
                {submenu.title && <p>{submenu.title}</p>}
                <ul className="text-light-gray font-light min-w-[268px]">
                    {submenu.fields.navigationItems.map((item) => (
                        <li key={item.sys.id} className="hover:text-primary px-[18px] py-[12px] whitespace-nowrap border-b">
                            <Link href={`/${item.fields.slug}`}>
                                {item.fields.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const NavItem = ({ item, stickyNav = false }: { item: any , stickyNav: boolean }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()
    const isCurrentPage = pathname.split('/')[1] === item.fields.slug
    const colorClass = isCurrentPage || menuOpen ? 'text-primary' : ''

    return (
        <li key={item.sys.id} className="flex items-center gap-1 relative group">
            <Link href={`/${item.fields.slug}`} className={colorClass}>
                {item.fields.label}
            </Link>
            {item.fields.submenus && (
                <button onClick={() => {}}>
                    <ChevronDownIcon className="h-4 w-4 text-primary group-hover:rotate-180 transition-all" />
                </button>
            )}
            {(item.fields.submenus) && (
                <SubMenus submenus={item.fields.submenus} stickyNav={stickyNav} menuOpen={menuOpen} />
            )}
        </li>
    )
}

export default NavItem